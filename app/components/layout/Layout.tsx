import { View, Text, ScrollView } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';

interface Props {
  isScrollView?: boolean;
}

export const styleCenter = tw('h-full w-full bg-white pt-16');

const Layout: FC<Props> = ({ isScrollView, children }) => {
  return (
    <View style={styleCenter}>{isScrollView ? <ScrollView>{children}</ScrollView> : children}</View>
  );
};

export default Layout;
