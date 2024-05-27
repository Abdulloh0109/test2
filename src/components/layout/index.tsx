import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from 'components/header';
import Loading from 'components/loading';
import { Box } from '@mui/material';

const AppLayout = () => {
  return (
    <Box>
      <Sidebar />
      <Box m='34px 20px 0 20px'>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default AppLayout;
