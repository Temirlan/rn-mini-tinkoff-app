import { View, Text } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';

import Padding from '../../ui/Padding';
import { menu } from './menu';
import NavItem from './NavItem';
import { TypeRootStackParamList } from '../../../navigation/types';

interface Props {
  navigate: (route: keyof TypeRootStackParamList) => void;
  currentRoute?: string;
}

const Footer: FC<Props> = ({ navigate, currentRoute }) => {
  return (
    <Padding
      style={{
        ...tw('flex-row justify-between items-center w-full bg-gray-50 px-0 pb-5 pt-2'),
        borderTopColor: '#E1E1E1',
        borderTopWidth: 1,
      }}>
      {menu.map((item) => (
        <NavItem currentRoute={currentRoute} navigate={navigate} key={item.title} item={item} />
      ))}
    </Padding>
  );
};

export default Footer;
