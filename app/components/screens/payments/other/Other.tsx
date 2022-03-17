import { View, Text, ScrollView } from 'react-native';
import tw from 'tailwind-rn';
import React from 'react';
import SubHeading from '../../../ui/SubHeading';
import OtherItem from './Item/OtherItem';
import { otherItems } from './data';

const Other = () => {
  return (
    <View>
      <SubHeading text="Important transfers" />

      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={tw('py-5')}>
        {otherItems.map((item) => (
          <OtherItem key={item.title} item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

export default Other;
