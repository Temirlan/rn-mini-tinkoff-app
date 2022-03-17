import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import tw from 'tailwind-rn';
import useStories from './useStories';
import Loader from '../../../ui/Loader';
import StoryItem from './StoryItem';
import useData from '../../../../hooks/useData';

const Stories = () => {
  const { stories, isLoading } = useStories();

  return (
    <View style={tw('my-7')}>
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map((story) => (
            <StoryItem key={story._id} story={story} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

export default Stories;
