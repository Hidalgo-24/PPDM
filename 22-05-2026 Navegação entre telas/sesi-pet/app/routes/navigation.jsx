import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

// páginas
import Login from '../pages/login';
import Atendimentos from '../pages/atendimentos';
import Profissionais from '../pages/profissionais';
import Registro from '../pages/registro';

// navegadores
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Draw = createDrawerNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,

        headerStyle: {
          backgroundColor: "#FF914D",
        },

        headerTintColor: "#FFFFFF",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },

        tabBarActiveTintColor: "#FF914D",
        tabBarInactiveTintColor: "#777",

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: "#FFFFFF",
          borderTopWidth: 1,
          borderTopColor: "#EEEEEE",
          elevation: 8,
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowRadius: 8,
          shadowOffset: {
            width: 0,
            height: -3,
          },
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },

        tabBarIcon: ({ color, size, focused }) => {
          let iconName = "ellipse-outline";

          if (route.name === "Atendimentos") {
            iconName = focused ? "calendar" : "calendar-outline";
          }

          if (route.name === "Profissionais") {
            iconName = focused ? "people" : "people-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Draw.Screen name='Atendimentos' component={Atendimentos} />
      <Draw.Screen name='Profissionais' component={Profissionais} />
    </Tab.Navigator>
  );
}

function MenuSuperior() {
  return (
    <Draw.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,

        headerStyle: {
          backgroundColor: "#FF914D",
        },

        headerTintColor: "#FFFFFF",

        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
        },

        drawerActiveTintColor: "#FF914D",
        drawerInactiveTintColor: "#777",

        drawerActiveBackgroundColor: "#FFF0E6",

        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: "600",
        },

        drawerStyle: {
          backgroundColor: "#FFFFFF",
          width: 260,
        },

        drawerItemStyle: {
          borderRadius: 12,
          marginHorizontal: 10,
          marginVertical: 4,
        },

        drawerIcon: ({ color, size, focused }) => {
          let iconName = "ellipse-outline";

          if (route.name === "Início") {
            iconName = focused ? 'paw' : 'paw-outline';
          }

          if (route.name === "Atendimentos") {
            iconName = focused ? "calendar" : "calendar-outline";
          }

          if (route.name === "Profissionais") {
            iconName = focused ? "people" : "people-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Draw.Screen name='Início' component={Tabs} />
      <Draw.Screen name='Atendimentos' component={Atendimentos} />
      <Draw.Screen name='Profissionais' component={Profissionais} />
    </Draw.Navigator>
  );
}

export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Registro'
        component={Registro}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Principal'
        component={MenuSuperior}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}