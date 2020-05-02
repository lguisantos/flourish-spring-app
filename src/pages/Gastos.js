import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Image, Text, Switch } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Slider } from 'react-native-elements'

// Estilos
import Style from '../css/GastosStyle'

// Imagens
import Porquinho from '../images/porquinho.png'
import Mapa from '../images/local.png';
import Trofeu from '../images/trofeu.png'
import Moeda from '../images/moeda.png';
import Nota from '../images/nota.png'

export default function ModuloGastos({ navigation }) {
    const menuState = 'menu'

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [value, setValue] = useState(0)

    const maximumValue = 200

    function navigationToMap() {
        navigation.navigate('Mapa');
    }

    function navigationToGame() {
        navigation.navigate('Game')
    }

    function navigationToPoupanca() {
        navigation.navigate('Poupanca')
    }

    return (

        // Container global
        <View style={Style.container}>

            {/* Top */}
            <View style={Style.header}>
                <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                    <Feather name={menuState}
                        color="#000"
                        style={Style.arrow} />
                </TouchableOpacity>
                <Text style={Style.titleHeader}>
                    Gastos
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

            <View style={Style.body}>
                <View>
                    <Text >Salario</Text>
                    <Text>Gastos</Text>
                </View>

                <View>
                    <View style={Style.gastosControle}>
                        <Text style={{marginRight: 10, marginLeft: 50}}>
                            Ligar controle de gastos
                        </Text>
                        <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#daf8cf" : "#f4f3f4"}
                            onValueChange={toggleSwitch}
                            value={isEnabled} />
                    </View>

                    <View style={Style.gastosControleSlider}>
                        <Slider style={Style.slider}
                            minimumValue={0}
                            maximumValue={maximumValue}
                            maximumTrackTintColor='#767577'
                            minimumTrackTintColor='#81b0ff'
                            thumbTintColor='#daf8cf' 
                            disabled={isEnabled ? false : true}/>

                            <View style={Style.slideConteinerText}>
                                <Text >Lucas</Text>
                            </View>
                    </View>

                </View>

            </View>

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

