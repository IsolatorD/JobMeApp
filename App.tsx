import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { AuthProvider } from './src/context/auth';
import MainNavigator from './src/navigators/main';
import { store } from './src/store';


const App: React.FC = () => {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
    >
      <Provider
        store={store}
      >
        <AuthProvider>
          <MainNavigator />
        </AuthProvider>
      </Provider>
    </SafeAreaView>
  )
}

export default App;
