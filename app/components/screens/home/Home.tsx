import { View, Text } from 'react-native';
import React, { FC } from 'react';
import Header from './Header';
import Layout from '../../layout/Layout';
import Stories from './stories/Stories';
import Accounts from './accounts/Accounts';
import ApplyNewProducts from './apply-new-products/ApplyNewProducts';

const Home: FC = () => {
  return (
    <Layout>
      <Header />

      <Stories />

      <Accounts />

      <ApplyNewProducts />
    </Layout>
  );
};

export default Home;
