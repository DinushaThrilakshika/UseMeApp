import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () =>(
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      //style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#251C23',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Notifications',
          tabBarColor: '#251C23',
          tabBarIcon: ({ color }) => (
            <Icon name="notifications-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#251C23',
          tabBarIcon: ({ color }) => (
            <Icon name="person-circle-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#251C23',
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
  
    <HomeStack.Navigator
        screenOptions={{
        headerStyle:{
        backgroundColor: '#251C23',
      },
        headerTintColor:'white',
        headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Search Here',
        headerLeft:()=>(
          <Icon.Button name='reorder-three-outline'
            size={25} 
            backgroundColor='#251C23' 
            onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        ),
        headerRight:()=>(
          <Icon.Button name='search-outline'
            size={25} 
            backgroundColor='#251C23' 
            onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }} />
      
    </HomeStack.Navigator>
  );
  const DetailsStackScreen = ({navigation}) => (
  
    <DetailsStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor: '#251C23',
      },
      headerTintColor:'white',
      headerTitleStyle:{
        fontWeight:'bold'
      }
    }}>
      <DetailsStack.Screen name="Notifications" component={DetailsScreen} 
      options={{
        headerLeft:()=>(
          <Icon.Button name='reorder-three-outline'
            size={25} 
            backgroundColor='#251C23' 
            onPress={() => navigation.openDrawer()}>
          </Icon.Button>
        )
      }} />
      
    </DetailsStack.Navigator>
  );
  