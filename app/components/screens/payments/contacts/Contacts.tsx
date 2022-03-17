import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn';

import useContacts from './useContacts';
import SubHeading from '../../../ui/SubHeading';
import Loader from '../../../ui/Loader';
import ContactItem from './ContactItem';

const Contacts = () => {
  const { contacts, isLoading } = useContacts();
  return (
    <View style={tw('my-8')}>
      <SubHeading text="Phone transfers" />
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={tw('mt-5')}>
          {contacts.map((c) => (
            <ContactItem key={c._id} contact={c} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Contacts;
