import { View, Text, TouchableHighlight } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';

interface Props {
  onPress: () => void;
  title: string;
  colors?: [string, string];
}

const Button: FC<Props> = ({ onPress, title, colors = ['bg-yellow-300', '#FBBF24'] }) => {
  return (
    <TouchableHighlight
      style={tw(`${colors[0]} text-gray-800 rounded-xl w-full my-4 py-3`)}
      onPress={onPress}
      underlayColor={colors[1]}>
      <Text style={tw('text-center')}>{title}</Text>
    </TouchableHighlight>
  );
};

export default Button;
