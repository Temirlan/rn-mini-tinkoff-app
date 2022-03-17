import { Keyboard, View } from 'react-native';
import React, { FC, JSXElementConstructor, ReactElement, useEffect, useState } from 'react';
import Dialog from 'react-native-dialog';

interface Props {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  title: string;
  desc?: string;
  onOk: (text: string) => void;
  okText?: string;
  cancelText?: string;
}

const DialogPrompt: FC<Props> = ({
  children,
  title,
  desc,
  okText = 'OK',
  cancelText = 'Cancel',
  onOk,
}) => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (visible) {
      setValue('');
    }
  }, [visible]);

  return (
    <View>
      {React.cloneElement(children, { onPress: () => setVisible(true) })}

      <Dialog.Container visible={visible}>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{desc}</Dialog.Description>
        <Dialog.Input
          keyboardType="numeric"
          value={value}
          onChangeText={setValue}
          onSubmitEditing={() => {
            onOk(value);
            setVisible(false);
          }}
        />
        <Dialog.Button onPress={() => setVisible(false)} label={cancelText} />
        <Dialog.Button
          onPress={() => {
            onOk(value);
            setVisible(false);
          }}
          label={okText}
        />
      </Dialog.Container>
    </View>
  );
};

export default DialogPrompt;
