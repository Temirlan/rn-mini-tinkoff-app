import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import tw from 'tailwind-rn';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase';

const Field = () => {
  const { user } = useAuth();
  const [message, setMessage] = useState('');

  const sendMessageHandler = async () => {
    try {
      await addDoc(collection(db, 'messages'), {
        timestamp: serverTimestamp(),
        userId: user?.uid,
        text: message,
      });
    } catch (error: any) {
      Alert.alert('Err add new msg: ', error.message);
    } finally {
      setMessage('');
    }
  };

  return (
    <View style={tw('mt-3 flex-row items-center justify-between py-1')}>
      <TextInput
        showSoftInputOnFocus={false}
        placeholder="Enter your message"
        onChangeText={setMessage}
        value={message}
        autoCapitalize="none"
        style={tw('rounded-2xl bg-gray-100 p-3 w-5/6 h-10')}
      />
      <Pressable onPress={sendMessageHandler}>
        <MaterialCommunityIcons name="send-circle-outline" size={42} style={tw('text-blue-300')} />
      </Pressable>
    </View>
  );
};

export default Field;
