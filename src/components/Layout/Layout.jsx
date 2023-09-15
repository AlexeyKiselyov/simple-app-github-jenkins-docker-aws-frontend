import { Outlet } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <ToastContainer autoClose={2500} position="top-center" />
    </>
  );
};
