import React,{Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    StyleSheet,
    ActivityIndicator,
    TextInput,AsyncStorage,
    SafeAreaView,Alert,Linking,ProgressBarAndroid,
} from 'react-native'
import {lan} from '../../config/con_style'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,Input} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class Ys_zc extends Component {
    constructor(props){
        super(props)
        this.state={

        }

    }

   
    render(){
        return(
        <SafeAreaView style={{flex:1,alignItems:'center',backgroundColor:'white'}}>
         <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>
            
         </KeyboardAwareScrollView>
        </SafeAreaView>
        )
    }

}
export default Ys_zc

