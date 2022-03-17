import { Text } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';
import Padding from './Padding';

interface Props {
  text: string;
}

const SubHeading: FC<Props> = ({ text }) => {
  return (
    <Padding>
      <Text style={[tw('text-xl font-bold text-gray-800')]}>{text}</Text>
    </Padding>
  );
};

export default SubHeading;
