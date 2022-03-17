import { View, Text, Pressable } from 'react-native';
import React, { FC } from 'react';
import tw from 'tailwind-rn';
import { IOtherItem } from '../types';
import Icon from './Icon';
import { BOX_SHADOW } from '../../../../../styles';
import useAccounts from '../../../home/accounts/useAccounts';
import { handleTransfer } from '../../handleTransfer';
import DialogPrompt from '../../../../ui/DialogPrompt';

const OTHER_CARD_CASH = '4444 4444 4444 4444';

const OtherItem: FC<{ item: IOtherItem }> = ({ item }) => {
  const { accounts } = useAccounts();

  return (
    <DialogPrompt
      onOk={(sum) => handleTransfer(accounts[0], OTHER_CARD_CASH, sum)}
      title="Sum transfer"
      desc="Enter the transfer amount:">
      <Pressable
        style={{
          ...tw('ml-4 rounded-xl p-2 w-24 h-24 bg-white'),
          ...BOX_SHADOW,
        }}>
        <Icon iconName={item.iconName} />
        <Text style={{ ...tw('text-xs'), marginTop: 6 }}>{item.title}</Text>
      </Pressable>
    </DialogPrompt>
  );
};

export default OtherItem;
