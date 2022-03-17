import { Text } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';
import Padding from './Padding';

interface Props {
  text: string;
  isCenter?: boolean;
}

const Heading: FC<Props> = ({ text, isCenter = false }) => {
  return (
    <Padding>
      <Text style={[tw('text-2xl font-bold text-gray-800'), isCenter && tw('text-center')]}>
        {text}
      </Text>
    </Padding>
  );
};

export default Heading;
