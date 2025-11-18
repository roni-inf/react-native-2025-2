import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Contato from "./src/screens/Contato";
import { Feather } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "red",
          tabBarActiveTintColor: "green",
          tabBarActiveBackgroundColor: "gray",
          tabBarInactiveBackgroundColor: "yellow",
        }}
      >
        <Tab.Screen
          component={Home}
          name="Home"
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="home" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          component={Sobre}
          name="Sobre"
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="file-text" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          component={Contato}
          name="Contato"
          options={{
            tabBarIcon: ({ color, size }) => {
              return <Feather name="phone-call" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
