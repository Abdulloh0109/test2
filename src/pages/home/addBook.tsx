import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import CustomInput from 'components/customInput';
import styles from 'assets/css/modal.module.scss';
import LoadingButton from 'components/loadingButton';
import { shallowEqual, useSelector } from 'react-redux';
import { addModalStyle } from 'components/InitialStyle';
import { Box, Button, Modal, Typography } from '@mui/material';
import { generateSignature } from 'hook/generateSignature';
import FormSelect from 'components/customSelect';
import { statusData } from 'data/statusData';

type CustomModalProps = {
  open: any;
  close: () => void;
  refetch?: any;
};

const AddBook = ({ open, close, refetch }: CustomModalProps) => {
  const { user } = useSelector((state: any) => state.auth, shallowEqual);
  const [loading, setLoading] = useState(false);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
    setValue,
  } = useForm();

  const formSubmit = (e: any) => {
    const paramPost = {
      isbn: e.isbn,
    };
    const paramPatch = {
      status: e.status?.value,
    };
    const signPost = generateSignature(
      'POST',
      '/books',
      paramPost,
      user.secret
    );
    const signPutch = generateSignature(
      'PATCH',
      `/books/${open.id}`,
      paramPatch,
      user.secret
    );

    if (open.id) {
      setLoading(true);
      axios
        .patch(
          `${process.env.REACT_APP_BASE_URL}/books/${open.id}`,
          paramPatch,
          {
            headers: {
              Key: user.key,
              Sign: signPutch,
            },
          }
        )
        .then((res) => {
          if (res.data.message === 'ok') {
            console.log('success update', res);
            toast.success('Books updated successfully');
            close();
            refetch(true);
          }
        })
        .catch((err) => toast.error(err?.response?.data?.message))
        .finally(() => setLoading(false));
    } else {
      setLoading(true);
      axios
        .post(`${process.env.REACT_APP_BASE_URL}/books`, paramPost, {
          headers: {
            Key: user.key,
            Sign: signPost,
          },
        })
        .then((res) => {
          if (res.data.message === 'ok') {
            console.log('success add', res);
            toast.success('Books added successfully');
            close();
            refetch(true);
          }
        })
        .catch((err) => toast.error(err?.response?.data?.message))
        .finally(() => setLoading(false));
    }
  };

  useEffect(() => {
    if (open?.id) {
      setValue('isbn', open.isbn);
    }
  }, [open?.id]);

  return (
    <Modal className={styles.modal} open={Boolean(open)} onClose={close}>
      <Box sx={{ ...addModalStyle, height: '280px' }}>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className={styles.titleCont}>
            <Typography className={styles.title} variant='h3' align='center'>
              {!open?.id ? 'Add book' : 'Edit book'}
            </Typography>
          </div>

          <div className={styles.container}>
            <Box style={{ marginTop: '15px' }}>
              {open.id ? (
                <FormSelect
                  error={errors}
                  name={'status'}
                  data={statusData}
                  control={control}
                  label={'Select status'}
                />
              ) : (
                <CustomInput
                  error={errors}
                  name={'isbn'}
                  control={control}
                  label={'Isbn'}
                  type='text'
                />
              )}
            </Box>
          </div>

          <Box className={styles.modalFooter}>
            <Button
              className={styles.cancel}
              onClick={() => {
                close();
                reset();
              }}
            >
              Cancel
            </Button>
            <LoadingButton
              model='send'
              style={{ width: '100%' }}
              type='submit'
              loading={loading}
            >
              Save
            </LoadingButton>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default AddBook;
