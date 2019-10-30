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
import {Button,Divider,Input} from 'react-native-elements'
import Ant from 'react-native-vector-icons/AntDesign'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
class MyFeed extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
Feedback=()=>{
   if(this.state.fed==undefined){
       Alert.alert('请输入内容','',[{'text':'知道了',onPress:()=>{}}])
   }else{
       fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/feed',{method:'POST'})
       .then(res=>res.json())
       .then(res=>{

       })
       .catch(err=>{})
      Alert.alert('我们将尽快处理 谢谢你的反馈','',[{'text':'确定',onPress:()=>{}}])
   }
}
    render(){
        return(
        <SafeAreaView style={{flex:1}}>
            <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center',backgroundColor:lan.tm_bg,flex:1}}>
            <View style={{padding:10,backgroundColor:'white',width:'92%',marginTop:20}}>
                <Input containerStyle={{height:lan.h*.2}} multiline={true} 
                inputContainerStyle={{
                    borderBottomWidth:0
                }} inputStyle={{height:lan.h*.2}} 
                placeholder='此处输入你要反馈的内容哦'
                onChangeText={(fed)=>{
                   this.setState({fed})
                }}
                />
    
            </View>
            <Button title='提价' buttonStyle={{backgroundColor:lan.tm_color,marginTop:20,width:lan.w*.92}} onPress={()=>{
                this.Feedback()
            }} />
            </KeyboardAwareScrollView>
        </SafeAreaView>
        )
    }
}
export default MyFeed
const styles=StyleSheet.create({
    
})
