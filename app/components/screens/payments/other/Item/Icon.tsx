import { View, Text } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { AntDesign } from '@expo/vector-icons';
import { IFooterItem } from '../../../../layout/footer/types';

const Icon: FC<Pick<IFooterItem, 'iconName'>> = ({ iconName }) => {
  return (
    <View style={tw('rounded-full bg-blue-500 w-8 h-8 items-center justify-center')}>
      <AntDesign name={iconName} size={19} color="#EDF4FE" />
    </View>
  );
};

export default Icon;
