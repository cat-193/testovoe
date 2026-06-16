import { createContext, useContext } from 'react';
import { IRootStore } from '../stores/RootStore';

export const StoreContext = createContext<IRootStore | null>(null);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return context;
};
