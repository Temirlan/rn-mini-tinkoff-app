import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import React from 'react';

//@ts-ignore
import { StoryContainer as SC } from 'react-native-stories-view';
import useData from '../../../../hooks/useData';

const StoryContainer = () => {
  const { activeStories, setActiveStories } = useData();

  if (!activeStories) {
    return null;
  }

  return (
    <SC
      visible
      enableProgress
      images={activeStories}
      duration={20}
      onComplete={() => setActiveStories(null)}
      containerStyle={tw('w-full h-full')}
    />
  );
};

export default StoryContainer;
