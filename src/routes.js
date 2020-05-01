import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Investimentos from './pages/Investimentos';
import Maturidade from './pages/Maturidade';
import Gastos from './pages/Gastos';
import Mapa from './pages/Mapa';
import Poupanca from './pages/Poupanca'
import Game from './pages/Game'

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>

            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Mapa" component={Mapa} />
                <Stack.Screen name="Investimentos" component={Investimentos} />
                <Stack.Screen name="Maturidade" component={Maturidade} />
                <Stack.Screen name="Gastos" component={Gastos} />
                <Stack.Screen name="Poupanca" component={Poupanca} />
                <Stack.Screen name="Game" component={Game} />
            </Stack.Navigator>

        </NavigationContainer>
    )
}

