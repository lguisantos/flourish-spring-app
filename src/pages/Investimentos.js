import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';

import Drawer from './Drawer';

// Estilos
import Style from '../css/HomeStyle'

// Imagens
import Porquinho from '../images/porquinho.png'
import Mapa from '../images/local.png';
import Trofeu from '../images/trofeu.png'
import Moeda from '../images/moeda.png';
import Nota from '../images/nota.png'

let menuState = 'menu'
export default function ModuloHome() {

    const navigation = useNavigation();

    function navigationToMap() {
        navigation.navigate('Mapa');
    }

    function navigationToGame() {
        navigation.navigate('Game')
    }

    function navigationToPoupanca() {
        navigation.navigate('Poupanca')
    }
    const [menu, setMenu] = useState(false)

    function menuButton() {
        setMenu(!menu);
        menuState = menu == false ? 'x' : 'menu' 
    }

    return (

        // Container global
        <View style={Style.container}>

            {/* Top */}
            <View style={Style.header}>
                <TouchableOpacity onPress={menuButton}>
                    <Feather name={menuState}
                        color="#000"
                        style={Style.arrow} />
                </TouchableOpacity>
                <Text style={Style.titleHeader}>
                    Investimentos
                </Text>
            </View>

            {/* Valor da Moeda lateral Direita */}
            <View style={Style.containerMoney}>
                <View style={Style.money}>
                    <View style={Style.containerImgMoney}>

                        <View style={Style.containerMenuNota}>
                            <Image source={Nota} style={Style.ImgNota} />
                            <Text style={Style.valor}>R$ 0</Text>
                        </View>

                        <View style={Style.containerMenuMoney}>
                            <Image source={Moeda} style={Style.ImgMoney} />
                            <Text style={Style.valor}>0</Text>
                        </View>

                    </View>
                </View>
            </View>

            <FlatList data={[1,2]}
                      style={Style.FlatList}
                      showsVerticalScrollIndicator={false}
                      keyExtractor={incident => String(incident)}
                      renderItem={() => (
                        
                              <Text>Teste</Text>
                      
                      )}>
            </FlatList>

            {/* Footer */}
            <View style={Style.footer}>
                <View style={Style.menuFooter}>
                    <TouchableOpacity onPress={navigationToMap}>
                        <Image source={Mapa} style={{ height: 69, width: 50 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigationToPoupanca}>
                        <Image source={Porquinho} style={{ height: 85, width: 90 }} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={navigationToGame}>
                        <Image source={Trofeu} style={{ height: 90, width: 90 }} />
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

