import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../../firebase';
import useAuth from '../../../../hooks/useAuth';
import { IAccount } from './types';

const useAccounts = () => {
  const { user } = useAuth();
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'accounts'), where('userId', '==', user?.uid)),
        (snapshot) => {
          setAccounts(
            snapshot.docs.map((doc) => {
              const story = doc.data() as IAccount;
              story._id = doc.id;
              return story;
            }),
          );

          setIsLoading(false);
        },
      ),
    [],
  );

  return {
    accounts,
    isLoading,
  };
};

export default useAccounts;
