import React from 'react';
import { Signin, SplashScreen } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';


const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      {/* <Signin /> */}
     {/* Masukin router   */}
     <Router />
    </NavigationContainer>
  );
}


export default App;
