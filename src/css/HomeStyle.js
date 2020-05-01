import { StyleSheet, Dimensions } from 'react-native';
import Constant from 'expo-constants';


const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 0,
        padding: Constant.statusBarHeight,
        justifyContent: 'space-between',
        height: height
    },

    header: {
        flexDirection: "row",
        height: 80,
        backgroundColor: '#daf8cf',
        width: width,
        justifyContent: 'center',
        alignItems: 'center'
    },

    titleHeader: {
        marginRight: 150,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#449aa4'
    },

    arrow: {
        marginRight: 130,
        fontSize: 30,
        color: '#449aa4'
    },

    footer: {
        backgroundColor: '#5ec65b',
        width: width,
        height: 80,
        justifyContent: 'space-around',
    },

    money: {
        flexDirection: 'row',
        backgroundColor: '#5ec65b',
        width: width * 0.70,
        height: 50,
        justifyContent: 'center',
        borderBottomStartRadius: 15
    },

    containerMoney: {
        flexDirection: 'row-reverse',
        width: width,
        marginBottom: 500
    },

    containerImgMoney: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    textMenu: {

    },

    containerMenuMoney: {
        width: 90,
        height: 40,
        backgroundColor:'#fff',
        borderRadius: 30,
        justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },

    containerMenuNota:{
        width: 160,
        height: 35,
        backgroundColor:'#fff',
        borderRadius: 30,
        justifyContent: 'center',
        justifyContent: 'space-between',
        marginRight: 25,
        alignItems: 'center',
        flexDirection: 'row',
    },

    ImgMoney: {
        width: 35,
        height: 35,
        marginLeft: 5
    },

    ImgNota: {
        width: 70,
        height: 30,
        marginLeft: 10
    },

    menuMoney: {

    },

    menuFooter: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 40
    },
    valor:{
        marginRight: 5,
        fontSize: 20,
        fontWeight: 'bold'
    }, 
    FlatList:{
       width: width,
       backgroundColor: '#000',
       height: height
    }
});

export default style;