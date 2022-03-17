import { TextInput } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';

interface Props {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

const Field: FC<Props> = ({ onChange, placeholder, val, isSecure }) => {
  return (
    <TextInput
      showSoftInputOnFocus={false}
      placeholder={placeholder}
      onChangeText={onChange}
      value={val}
      secureTextEntry={isSecure}
      autoCapitalize="none"
      style={tw('rounded-xl bg-gray-100 mt-3 p-3 w-full')}
    />
  );
};

export default Field;
