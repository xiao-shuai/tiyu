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
class Login extends Component {
    constructor(props){
        super(props)
        this.state={

        }

    }

   log=()=>{
       if(this.state.acc==undefined){
         Alert.alert('请输入正确的账号','',[{'text':'知道了',onPress:()=>{}}])
       }else if(this.state.pass ==undefined){
        Alert.alert('请输入正确的密码','',[{'text':'知道了',onPress:()=>{}}])
       }else{
           fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/login',{method:'POST'})
           .then(res=>res.json())
           .then(res=>{})
           .catch(e=>{})
           AsyncStorage.setItem('log','yes')
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Main' })], 0)
       }
   }
    render(){
        return(
        <SafeAreaView style={{flex:1,alignItems:'center',backgroundColor:'white'}}>
         <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>
             <View style={{width:lan.w,padding:20,marginTop:100,alignItems:'center'}}>
             <Input label='输入账号' placeholderTextColor='white' 
             labelStyle={{color:lan.tm_color}}
            //   inputStyle={{color:'white'}}
              onChangeText={(acc)=>{
              this.setState({acc})
              }}
             />
             <Input label='输入密码' placeholderTextColor='white' 
            //   inputStyle={{color:'white'}} 
              labelStyle={{color:lan.tm_color}}
              secureTextEntry={true}
              containerStyle={{marginTop:30}}
               onChangeText={(pass)=>{
              this.setState({pass})
               }}
             />
             <Button title='登录' buttonStyle={{backgroundColor:lan.tm_color,marginTop:30,width:lan.w*.9}}
                onPress={()=>{
 this.log()
                }}
             />

              <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('Zc')
              }}>
                  <Text style={{marginTop:30,color:lan.tm_color,}}>注册账号</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{
                  Linking.openURL('https://shimo.im/docs/vV9HqKWqdDcq38dW')
              }}>
                  <Text style={{color:lan.tm_color,top:lan.h*.25}}>登录代表您已同意《"篮球资讯赛事"隐私政策》</Text>
              </TouchableOpacity>

             </View>
            
         </KeyboardAwareScrollView>
        </SafeAreaView>
        )
    }

}
export default Login

