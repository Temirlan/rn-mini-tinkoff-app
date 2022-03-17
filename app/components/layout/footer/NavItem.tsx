import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { AntDesign } from '@expo/vector-icons';
import { IFooterItem } from './types';
import { TypeRootStackParamList } from '../../../navigation/types';

interface Props {
  item: IFooterItem;
  navigate: (route: keyof TypeRootStackParamList) => void;
  currentRoute?: string;
}

const NavItem: FC<Props> = ({ item, navigate, currentRoute }) => {
  const isActive = currentRoute === item.title;

  return (
    <Pressable onPress={() => navigate(item.title)} style={{ ...tw('items-center'), width: '20%' }}>
      <AntDesign
        name={item.iconName}
        style={tw(`text-xl ${isActive ? 'text-blue-500' : 'text-gray-500'}`)}
      />
      <Text
        style={{ ...tw(`text-xs ${isActive ? 'text-blue-500' : 'text-gray-500'}`), marginTop: 1 }}>
        {item.title}
      </Text>
    </Pressable>
  );
};

export default NavItem;
