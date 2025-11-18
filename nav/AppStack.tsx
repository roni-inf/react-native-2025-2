import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Contato from "./src/screens/Contato";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Tela Início",
            headerStyle: {
              backgroundColor: "yellow",
            },
            headerTintColor: "red",
            headerTitleStyle: {
              fontSize: 22,
              fontWeight: "bold",
            },
            animation: "slide_from_right",
            contentStyle: { backgroundColor: "#fff" },
          }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Contato" component={Contato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
