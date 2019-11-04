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
    SafeAreaView,Alert,Linking,ProgressBarAndroid
} from 'react-native'
import {lan} from '../../config/con_style'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,Input} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class Zc extends Component {
    constructor(props){
        super(props)
        this.state={

        }

    }
  New_acc=()=>{
    if(this.state.one==undefined){
        Alert.alert('请输入账号','',[{'text':'知道了',onPress:()=>{}}])
      }else if(this.state.one2==undefined){
       Alert.alert('请输入密码','',[{'text':'知道了',onPress:()=>{}}])
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
             <Input label='请输入账号' placeholderTextColor='white' 
            //   inputStyle={{color:'white'}}
              onChangeText={(one)=>{
                  this.setState({one})
              }}
             />
             <Input label='输入密码' placeholderTextColor='white' 
            //   inputStyle={{color:'white'}} 
              secureTextEntry={true}
              containerStyle={{marginTop:30}}
              onChangeText={(one2)=>{
                 this.setState({one2})
              }}
             />
             <Button title='注册' buttonStyle={{backgroundColor:lan.tm_color,marginTop:30,width:lan.w*.9}}
               onPress={()=>{
          this.New_acc()
               }}
             />

              <TouchableOpacity onPress={()=>{
                  this.props.navigation.goBack()
              }}>
                  <Text style={{marginTop:30,color:lan.tm_color,}}>登录账号</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={()=>{
                  Linking.openURL('https://shimo.im/docs/vV9HqKWqdDcq38dW')
              }}>
                  <Text style={{marginTop:lan.h*.25,color:'gold',}}>登录代表您已同意《"篮球达人"隐私政策》</Text>
              </TouchableOpacity> */}

             </View>
            
         </KeyboardAwareScrollView>
        </SafeAreaView>
        )
    }

}
export default Zc

