import { View, Text } from "react-native";
import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import Post from "../screens/Post";
import Login from "../screens/Login";
import { AuthContext } from "../context/AuthContext";

export type RootTabParamList = {
  Post: undefined;
  Feed: undefined;
  Login: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export default function AppRouter() {
  const { token } = useContext(AuthContext);
  return (
    <Tab.Navigator>
      {!token ? (    //se não tem o token
        <Tab.Screen name="Login" component={Login} />
      ) : (
        <>
          <Tab.Screen name="Feed" component={Feed} />
          <Tab.Screen name="Post" component={Post} />
        </>
      )}
    </Tab.Navigator>
  );
}
