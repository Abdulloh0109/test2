import Login from 'pages/auth';
import HomePage from 'pages/home';
import NotFoundPage from 'components/404';
import AppLayout from 'components/layout';
import { ToastContainer } from 'react-toastify';
import { shallowEqual, useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const { user } = useSelector((state: any) => state.auth, shallowEqual);

  const auth = (children: any) => {
    if (user) {
      return <Navigate to={`/`} replace />;
    }

    return children;
  };

  const login = (children: any) => {
    if (!user) {
      return <Navigate to='/login' replace />;
    }
    return children;
  };

  console.log('user :>> ', user);
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/login' element={auth(<Login />)} />
        <Route path='' element={login(<AppLayout />)}>
          <Route path='/' element={<HomePage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        closeButton={false}
      />
    </BrowserRouter>
  );
}

export default App;
