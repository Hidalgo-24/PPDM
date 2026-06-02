import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';

//import das telas
import Login from '../pages/login';
import Cadastro from '../pages/cadastro';


//import dos navegadores
const Stack = createStackNavigator();
const Draw = createDrawerNavigator();


function MenuSuperior() {
    return (
        <Draw.Navigator
            screenOptions={({ route }) => ({
                headerShown: true,
                drawerActiveTintColor: '#FF914D',
                drawerInactiveTintColor: '#777',
                drawerIcon: ({ color, size, focused }) => {
                    let nomeIcone = 'menu-outline';

                    if (route.name === 'Início') {
                        nomeIcone = focused ? 'audit' : 'audit-outline';
                    }

                    if (route.name === 'Cadastro') {
                        nomeIcone = focused ? 'file-add' : 'file-add-outline'
                    }
                    if (route.name === 'Relatório') {
                        nomeIcone = focused ? 'receipt' : 'receipt-outline'
                    }
                    return <Ionicons name={nomeIcone} size={size} color={color} />
                }
            })}
        >
            {/* <Draw.Screen name='Sesi - Pet' component={AbasInferiores} options={{headerTitleAlign: 'center'}} />
            <Draw.Screen name='Atendimentos' component={Atendimentos} />
            <Draw.Screen name='Profissionais' component={Profissionais} /> */}
        </Draw.Navigator>
    )
}

export default function Rotas() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
            <Stack.Screen name='Cadastro' component={Cadastro} options={{ title: 'Cadsatro de usuário' }} />
            <Stack.Screen name='Principal' component={MenuSuperior} options={{ headerShown: false , title: ''}} />
        </Stack.Navigator>
    )
}
