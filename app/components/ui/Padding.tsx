import { View } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';

interface Props {
  style?: {
    [key: string]: string;
  };
}

const Padding: FC<Props> = ({ children, style }) => {
  return <View style={{ ...tw('px-4'), ...style }}>{children}</View>;
};

export default Padding;
