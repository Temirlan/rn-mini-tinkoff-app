import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Padding from '../../ui/Padding';
import tw from 'tailwind-rn';
import Avatar from '../../ui/Avatar';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import useProfile from '../profile/useProfile';
import Loader from '../../ui/Loader';

const Header = () => {
  const { navigate } = useNavigation();
  const { isLoading, name } = useProfile();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Padding style={tw('flex-row items-center')}>
      <Avatar name={name} />
      <TouchableOpacity style={tw('flex-row items-end')} onPress={() => navigate('Profile')}>
        <Text style={tw('text-gray-800 text-2xl font-bold')}>{name}</Text>
        <Entypo name="chevron-small-right" size={28} style={tw('text-gray-800')} />
      </TouchableOpacity>
    </Padding>
  );
};

export default Header;
