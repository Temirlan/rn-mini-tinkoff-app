import { onAuthStateChanged, User } from 'firebase/auth';
import { createContext, FC, useEffect, useMemo, useState } from 'react';
import { addDoc, collection } from '@firebase/firestore';
import { Alert } from 'react-native';
import { db, logout, register } from '../firebase';
import { login, auth } from './../firebase';

interface IContext {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      const { user } = await register(email, password);

      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No name',
      });
    } catch (error: any) {
      Alert.alert('Error reg:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert('Error login:', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);

    try {
      await logout();
    } catch (error: any) {
      Alert.alert('Error logout:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        setUser(user);
        setIsLoadingInitial(false);
      }),
    [],
  );

  const value = useMemo(
    () => ({
      user,
      isLoading,
      register: registerHandler,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [user, isLoading],
  );

  return <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>;
};
