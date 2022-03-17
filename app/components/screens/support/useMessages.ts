import dayjs from 'dayjs';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { IMessage } from './types';

const useMessages = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'messages'), orderBy('timestamp', 'asc')), (snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => {
            const story = doc.data() as IMessage;
            story._id = doc.id;

            if (doc.data()?.timestamp) {
              story.timestamp = dayjs.unix(doc.data()?.timestamp.seconds).format('HH:mm');
            }

            return story;
          }),
        );

        setIsLoading(false);
      }),
    [],
  );

  return {
    messages,
    isLoading,
  };
};

export default useMessages;
