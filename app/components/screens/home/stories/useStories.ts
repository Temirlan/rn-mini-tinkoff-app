import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../../../firebase';
import { IStory } from './types';

const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'stories')), (snapshot) => {
        setStories(
          snapshot.docs.map((doc) => {
            const story = doc.data() as IStory;
            story._id = doc.id;
            return story;
          }),
        );

        setIsLoading(false);
      }),
    [],
  );

  return {
    stories,
    isLoading,
  };
};

export default useStories;
