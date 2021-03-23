import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../Screens/Home/Home';
import PlaceDetails from '../Screens/PlaceDetails/PlaceDetails';

const screens = {
    Home: {
        screen: Home,
    },
    PlaceDetails: {
        screen: PlaceDetails,
    }
}

 const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);