import React from 'react';
import {LogBox} from 'react-native';
import UploadContent from './src/screens/UploadContent';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import store, {persistor} from './src/redux/store';
import {OnlineStatusProvider} from './src/utils';

// ignore warnings
LogBox.ignoreAllLogs();

const App = () => {
  return (
    <OnlineStatusProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <UploadContent />
        </PersistGate>
      </Provider>
    </OnlineStatusProvider>
  );
};

export default App;
