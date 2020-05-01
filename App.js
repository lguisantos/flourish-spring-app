import * as React from 'react';
import { Button, View, AppRegistry } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Home from './src/pages/Home';
import Game from './src/pages/Game';
import Gastos from './src/pages/Gastos';
import Mapa from './src/pages/Mapa';
import Poupanca from './src/pages/Poupanca';
import Investimentos from './src/pages/Investimentos';
import Maturidade from './src/pages/Maturidade';

import Routes from './src/routes';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Game" component={Game} />
        <Drawer.Screen name="Gastos" component={Gastos} />
        <Drawer.Screen name="Mapa" component={Mapa} />
        <Drawer.Screen name="Poupanca" component={Poupanca} />
        <Drawer.Screen name="Investimentos" component={Investimentos} />
        <Drawer.Screen name="Maturidade" component={Maturidade} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}
