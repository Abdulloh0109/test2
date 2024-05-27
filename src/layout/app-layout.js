import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from 'components/header';
import Loading from 'components/loading';
import useWindowDimensions from 'hook/generateSignature';
import HeaderMobile from 'components/header_mobile';

const AppLayout = () => {
  return (
    <div className='app-layout'>
      {useWindowDimensions().width <= 991 ? <HeaderMobile /> : <Sidebar />}

      <div style={{ margin: '34px 20px 0 20px' }}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default AppLayout;
