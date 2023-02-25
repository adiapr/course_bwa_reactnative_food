import React from 'react';
import { Signin, SplashScreen } from './pages';
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      <Signin />
    </NavigationContainer>
  );
}


export default App;
