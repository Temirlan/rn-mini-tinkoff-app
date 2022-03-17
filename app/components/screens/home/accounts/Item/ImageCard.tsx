import { View, Text, ImageBackground, ImageSourcePropType } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { IAccount } from '../types';

interface Props {
  account: IAccount;
}

const ImageCard: FC<Props> = ({ account: { name, cardNumber } }) => {
  const imageBlack: ImageSourcePropType = require('../../../../../../assets/Tinkoff-black-metal.png');
  const imageAirlines: ImageSourcePropType = require('../../../../../../assets/allblack.png');

  return (
    <ImageBackground
      source={name === 'Tinkoff All Airlines' ? imageAirlines : imageBlack}
      style={{ ...tw('justify-end w-14 h-10'), padding: 4.5 }}>
      <Text style={{ ...tw('text-white font-medium'), fontSize: 11 }}>{cardNumber.slice(-4)}</Text>
    </ImageBackground>
  );
};

export default ImageCard;
