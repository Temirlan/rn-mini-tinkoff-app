import { View, Text } from 'react-native';
import React, { FC } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import tw from 'tailwind-rn';

import { TypeCurrency } from '../types';

interface Props {
  currency: TypeCurrency;
}

const Currency: FC<Props> = ({ currency }) => {
  return (
    <View style={tw('rounded-full bg-blue-500 w-9 h-9 items-center justify-center')}>
      <View
        style={{
          ...tw('w-5 h-5 rounded-full items-center justify-center'),
          backgroundColor: '#EDF4FE',
        }}>
        <FontAwesome name={currency === 'RUB' ? 'ruble' : 'usd'} size={13} color="#488CF9" />
      </View>
    </View>
  );
};

export default Currency;
