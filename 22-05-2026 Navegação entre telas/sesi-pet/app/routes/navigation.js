import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import IonIcons from '@expo/vector-icons';

//páginas

//navegadores
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Draw = createDrawerNavigator();

function Tabs(){
    return(
        <Tab.Navigator screenOpitions={(route) => ({
            headerShown: true,
            tabBarActiveTintColor: '#e82300',
            tabBarInactiveTintColor: '#4f4c4c',
            tabBarIcon: ({ color, size, focused }) => {
          let iconName = 'ellipse-outline';

          if (route.name === 'Atendimentos') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }

          if (route.name === 'Profissionais') {
            iconName = focused ? 'people' : 'people-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
                })}
            >

        </Tab.Navigator>
    )
}