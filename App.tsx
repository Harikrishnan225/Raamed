import React from 'react';
import {StatusBar, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Component/Login/Login';
import MainPage from './Component/MainPage/MainPage';
import Forgotpassword from './Component/ForgotPassword/Forgotpassworg';
import AccountCreation from './Component/AccountCreation/AccountCreation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#0080FF" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
          {/* loginscreen */}
          <Stack.Screen name="Login" component={Login} />
          {/* forgotpassword */}
          <Stack.Screen name="ForgotPassword" component={Forgotpassword} />
          {/* accountcreation */}
          <Stack.Screen name="AccountCreation" component={AccountCreation} />
          {/* mainpage */}
          <Stack.Screen name="Main" component={MainPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
