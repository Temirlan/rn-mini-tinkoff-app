import { AuthProvider } from './app/providers/AuthProvider';
import Navigation from './app/navigation/Navigation';
import { DataProvider } from './app/providers/DataProvider';
import StoryContainer from './app/components/screens/home/stories/StoryContainer';

import 'intl';

import 'intl/locale-data/jsonp/en';
import 'intl/locale-data/jsonp/ru';

export default function App() {
  return (
    <AuthProvider>
      <DataProvider>
        <StoryContainer />
        <Navigation />
      </DataProvider>
    </AuthProvider>
  );
}
