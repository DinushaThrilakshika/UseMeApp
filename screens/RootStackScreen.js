import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import CustomerRegistrationScreen from './CustomerRegistrationScreen';
import ShopRegistrationScreen from './ShopRegistrationScreen';
import DeliveryPersonregistrationScreen from './DeliveryPersonregistrationScreen';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="CustomerRegistrationScreen" component={CustomerRegistrationScreen}/>
        <RootStack.Screen name="ShopRegistrationScreen" component={ShopRegistrationScreen}/>
        <RootStack.Screen name="DeliveryPersonregistrationScreen" component={DeliveryPersonregistrationScreen}/>
    </RootStack.Navigator>
);

export default RootStackScreen;