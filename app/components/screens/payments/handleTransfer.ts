import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import prompt from 'react-native-prompt-android';
import { db } from '../../../firebase';
import { IAccount } from '../home/accounts/types';
import { Alert, NativeModules } from 'react-native';

export const handleTransfer = async (fromAccount: IAccount, cardNumber: string, sum: string) => {
  try {
    let accountToId = '';
    let currentToBalance = '';
    const queryShapshot = await getDocs(
      query(collection(db, 'accounts'), where('cardNumber', '==', cardNumber), limit(1)),
    );
    queryShapshot.docs.forEach((doc) => {
      accountToId = doc.id;
    });
    const docRefTo = doc(db, 'accounts', accountToId);
    const docSnapTo = await getDoc(docRefTo);
    if (docSnapTo.exists()) {
      currentToBalance = docSnapTo.data().balance;
    } else {
      Alert.alert('The card where you are sending money was not found');
      return;
    }
    await updateDoc(docRefTo, {
      balance: currentToBalance + Number(sum),
    });
    const docRefFrom = doc(db, 'accounts', fromAccount._id);
    await updateDoc(docRefFrom, {
      balance: fromAccount.balance - Number(sum),
    });
    return;
  } catch (error: any) {
    Alert.alert('Error transfer', error.message);
  }
};
