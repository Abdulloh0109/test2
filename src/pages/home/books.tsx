import axios from 'axios';
import AddBook from './addBook';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import CustomButton from 'components/button';
import DeleteModal from 'components/deleteModal';

import { Box } from '@mui/material';
import styles from 'assets/css/customTable.module.scss';
import { shallowEqual, useSelector } from 'react-redux';
import { generateSign } from 'hook/generateSignature';
import Loading from 'components/loading';
import Empty from 'components/empty';
import BookCard from 'components/card';

type Props = {
  open: boolean;
  value: number;
  search: string;
  refetch: boolean;
  setOpen: (e: any) => void;
  setRefetch: (e: any) => void;
};

const Books = ({
  open,
  value,
  search,
  refetch,
  setOpen,
  setRefetch,
}: Props) => {
  const [limit, setLimit] = useState<number>(6);
  const [deleteModal, setDeleteModal] = useState<number | boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [delLoading, setDelLoading] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const filterData = data.filter((y: { status: number }) => y.status === value);

  const { user } = useSelector((state: any) => state.auth, shallowEqual);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/books`, {
        headers: {
          Key: user.key,
          Sign: user.getAllSign,
        },
      })
      .then((res) => {
        setData(
          res.data.data.map((i: any) => ({
            ...i.book,
            status: i.status,
          }))
        );
      })
      .catch((err) => toast.error(err?.response?.data?.message))
      .finally(() => {
        setLoading(false);
        setRefetch(false);
      });
  }, [refetch]);

  useEffect(() => {
    if (search) {
      setLoading(true);
      axios
        .get(`${process.env.REACT_APP_BASE_URL}/books/${search}`, {
          headers: {
            Key: user.key,
            Sign: generateSign('GET', `/books/${search}`, user.secret),
          },
        })
        .then((res) => {
          setData(res.data.data);
        })
        .catch((err) =>
          toast.error(err?.response?.data?.message, {
            toastId: 'search',
          })
        )
        .finally(() => setLoading(false));
    }
  }, [search]);

  const handleDelete = () => {
    setDelLoading(true);
    const sign = generateSign('DELETE', `/books/${deleteModal}`, user.secret);
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}/books/${deleteModal}`, {
        headers: {
          Key: user.key,
          Sign: sign,
        },
      })
      .then((res) => {
        setRefetch(true);
        setLimit(filterData.length);
        setDeleteModal(false);
      })
      .catch((err) => toast.error(err?.response?.data?.message))
      .finally(() => setDelLoading(false));
  };

  console.log('filterData', filterData);

  return (
    <Box className={styles.my_table}>
      <Box
        mt='80px'
        mb='100px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        flexDirection='column'
      >
        {data.length === 0 ? (
          <Empty />
        ) : loading ? (
          <Loading />
        ) : (
          <Box
            display='flex'
            gap='30px'
            flexWrap='wrap'
            alignItems='center'
            justifyContent='center'
          >
            {filterData.slice(0, limit)?.map((i: any) => (
              <BookCard
                key={i.id}
                data={i}
                setAdd={setOpen}
                setDeleteModal={setDeleteModal}
              />
            ))}
          </Box>
        )}

        {filterData.length <= 6 || loading || filterData.length === limit ? (
          ''
        ) : (
          <CustomButton
            onClick={() => setLimit(filterData.length)}
            style={{ mt: '50px', mb: '30px' }}
          >
            More
          </CustomButton>
        )}
      </Box>

      {open && (
        <AddBook
          open={open}
          close={() => setOpen(false)}
          refetch={setRefetch}
        />
      )}
      {deleteModal && (
        <DeleteModal
          open={deleteModal}
          close={() => setDeleteModal(false)}
          click={handleDelete}
          loading={delLoading}
        />
      )}
    </Box>
  );
};

export default Books;
