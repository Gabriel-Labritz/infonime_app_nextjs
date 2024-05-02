import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
