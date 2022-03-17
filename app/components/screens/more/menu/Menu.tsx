import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn';
import { menu } from './list';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <View>
      {menu.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </View>
  );
};

export default Menu;
