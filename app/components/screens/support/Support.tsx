import { View, Text, ScrollView } from 'react-native';
import React, { FC } from 'react';
import Layout from '../../layout/Layout';
import Padding from '../../ui/Padding';
import Header from './Header';
import Message from './Message';
import useMessages from './useMessages';
import Field from './Field';

const Support: FC = () => {
  const { messages } = useMessages();
  return (
    <Layout isScrollView={false}>
      <Padding>
        <Header />
        <ScrollView style={{ height: '80%' }}>
          {messages.map((msg) => (
            <Message key={msg._id} message={msg} />
          ))}
        </ScrollView>
        <Field />
      </Padding>
    </Layout>
  );
};

export default Support;
