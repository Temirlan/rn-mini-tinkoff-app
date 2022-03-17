import { useContext } from 'react';
import { DataContext } from '../providers/DataProvider';

export default function useData() {
  return useContext(DataContext);
}
