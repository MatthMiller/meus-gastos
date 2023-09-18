import React from 'react';
import HomeHeader from '../../Components/HomeHeader/HomeHeader';
import Balance from '../../Components/Balance/Balance';
import TransferHistory from '../../Components/TransferHistory/TransferHistory';
import RegisterButton from '../../Components/RegisterButton/RegisterButton';

const Home = () => {
  return (
    <>
      <HomeHeader />
      <Balance />
      <TransferHistory />
      <RegisterButton />
    </>
  );
};

export default Home;
