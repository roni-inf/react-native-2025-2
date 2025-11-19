import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Sobre from "../screens/Sobre";
import Contato from "../screens/Contato";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function AppRouter() {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveBackgroundColor: "aqua",
        drawerInactiveBackgroundColor: "gray",
        drawerActiveTintColor: "blue",
        drawerInactiveTintColor: "red",
        drawerStyle: {
          backgroundColor: "#e9e9e9",
          width: 300,
        },
        drawerItemStyle: {
          marginVertical: 12,
          borderRadius:30
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  );
}
