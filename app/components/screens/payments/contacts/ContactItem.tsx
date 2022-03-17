import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { IContact } from './types';
import Avatar from '../../../ui/Avatar';
import useAccounts from '../../home/accounts/useAccounts';
import { handleTransfer } from '../handleTransfer';
import DialogPrompt from '../../../ui/DialogPrompt';

const ContactItem: FC<{ contact: IContact }> = ({ contact }) => {
  const { accounts } = useAccounts();

  return (
    <DialogPrompt
      onOk={(sum) => handleTransfer(accounts[0], contact.cardNumber, sum)}
      title="Sum transfer"
      desc="Enter the transfer amount:">
      <Pressable style={tw('ml-4 mr-1 items-center')}>
        <Avatar name={contact.displayName} size="large" />
        <Text style={tw('mt-1 text-xs')}>{contact.displayName}</Text>
      </Pressable>
    </DialogPrompt>
  );
};

export default ContactItem;
