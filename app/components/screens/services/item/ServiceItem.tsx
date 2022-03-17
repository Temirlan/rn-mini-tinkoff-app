import { View, Text } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { IService } from '../types';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import Percent from './Percent';
import { getRandomGradient } from './getRandomGradient';

interface Props {
  service: IService;
}

const ServiceItem: FC<Props> = ({ service }) => {
  return (
    <View style={tw('mb-4')}>
      <View style={tw('rounded-xl overflow-hidden w-14 h-14 mx-4')}>
        <LinearGradient
          colors={getRandomGradient()}
          style={tw('w-full h-full items-center justify-center')}>
          <Percent percent={service.percent} />
          <MaterialIcons name={service.iconName} size={30} color="#fff" />
        </LinearGradient>
      </View>
      <Text style={{ ...tw('text-xs text-center'), marginTop: 6 }}>{service.title}</Text>
    </View>
  );
};

export default ServiceItem;
