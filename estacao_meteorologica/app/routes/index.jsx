import { createStackNavigator } from '@react-navigation/stack';

// Import das telas
import Login from '../pages/login';
import Registro from '../pages/registro';
import Cadastro from '../pages/cadastro';

const Stack = createStackNavigator();

export default function Rotas() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Registro"
        component={Registro}
        options={{
          title: 'Cadastro de Usuário',
          headerTitleAlign: 'center'
        }}
      />

      <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          title: 'Cadastro de Medição',
          headerTitleAlign: 'center'
        }}
      />
    </Stack.Navigator>
  );
}