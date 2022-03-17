import { View, Text, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn';

const Header = () => {
  return (
    <View style={tw('flex-row items-center py-1 mb-2 -mt-4')}>
      <Image
        source={require('../../../../assets/tinkoff-icon.png')}
        style={tw('mr-2 w-11 h-11 rounded-full')}
      />
      <View>
        <Text style={tw('text-sm text-gray-800 font-medium')}>Support</Text>
        <Text style={tw('text-xs text-gray-500')}>We are there 24/7</Text>
      </View>
    </View>
  );
};

export default Header;
