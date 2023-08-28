import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header';
import Loading from 'components/Loading';

const LayOut = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LayOut;
