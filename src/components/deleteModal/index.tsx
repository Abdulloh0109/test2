import { Box, Button, Modal } from '@mui/material';
import styles from './main.module.scss';
import LoadingButton from 'components/loadingButton';

type CustomModalProps = {
  loading?: boolean;
  open: number | boolean;
  click: () => void;
  close: () => void;
};

const DeleteModal = ({ click, loading, open, close }: CustomModalProps) => {
  return (
    <Modal open={Boolean(open)} onClose={close}>
      <Box className={styles.modal}>
        <p className={styles.title}>Delete selected item</p>
        <p className={styles.subtitle}></p>

        <div className={styles.footer}>
          <Button
            className={styles.cancel}
            onClick={() => {
              close();
            }}
            disabled={loading}
          >
            No
          </Button>
          <LoadingButton
            className={styles.ok}
            onClick={click}
            type='submit'
            loading={loading}
          >
            Yes
          </LoadingButton>
        </div>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
