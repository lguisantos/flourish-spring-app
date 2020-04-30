import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// Módulos
import Maturidade from './Maturidade';
import Gastos from './Gastos';
import Home from './Home';
import Investimentos from './Investimentos';
import Mapa from './Mapa'
const Drawer = createDrawerNavigator();

export default function ModuleDrawer() {
    return (
            <Drawer.Navigator openByDefault>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Maturidade" component={Maturidade} />
                <Drawer.Screen name="Gastos" component={Gastos} />
                <Drawer.Screen name="Investimentos" component={Investimentos} />
                <Drawer.Screen name="Mapa" component={Mapa} />
            </Drawer.Navigator>
    );
}

