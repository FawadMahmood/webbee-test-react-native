import React, { PropsWithChildren } from 'react';
import {
  NavigationComponentProps,
  NavigationFunctionComponent,
} from 'react-native-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


import { ServicesProvider } from '../services';
import { persistor, store } from '../store';
import { StoresProvider } from '../stores';

export const SSProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <StoresProvider>
      <ServicesProvider>{children}</ServicesProvider>
    </StoresProvider>
  );
};

// RNN component wrapper (provider)
export const withSS =
  (C: NavigationFunctionComponent) => (props: NavigationComponentProps) =>
  (
    <SSProvider>
      <C {...props} />
    </SSProvider>
  );

export const withReduxProvider = (C: React.FC) => (props: any) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <C {...props} />
      </PersistGate>
    </Provider>
  );
};