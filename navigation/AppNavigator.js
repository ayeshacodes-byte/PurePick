import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import AllergenCheckScreen from "../screens/AllergenCheckScreen";
import BoycottCheckScreen from "../screens/BoycottCheckScreen";
import AboutUsScreen from "../screens/AboutUsScreen"; 
import OurMissionScreen from "../screens/OurMissionScreen";
import WhatWeOfferScreen from "../screens/WhatWeOfferScreen";
import WhyPurePickScreen from "../screens/WhyPurePickScreen";



const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AllergenCheck" component={AllergenCheckScreen} />
        <Stack.Screen name="BoycottCheck" component={BoycottCheckScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} /> 
        <Stack.Screen name="OurMission" component={OurMissionScreen} />
        <Stack.Screen name="WhatWeOffer" component={WhatWeOfferScreen} />
        <Stack.Screen name="WhyPurePick" component={WhyPurePickScreen} />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
