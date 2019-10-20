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
import {Button,Divider} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import Ant from 'react-native-vector-icons/AntDesign'
import {inject,observer} from 'mobx-react'
@inject(["mbx"])
@observer // 监听当前组件
class My2 extends Component {
    static navigationOptions = {
        title: '我的',
      };
    constructor(props){
        super(props)
        this.state={

        }

    }
  navigate_login=()=>{
      Alert.alert('You are not logged in, please log in.！','',
      [{'text':'cancel',onPress:()=>{}},{'text':'ok',onPress:()=>{
          this.props.navigation.navigate('Login')
      }}])
     }  
   componentDidMount(){
    const login=this.props.mbx.login
    login?null:this.navigate_login()
   }
   lgout=()=>{
     AsyncStorage.removeItem('log')
     this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Login' })], 0)
   }
    render(){
      const login=this.props.mbx.login
        return(
        <SafeAreaView style={{flex:1,}}>
          <View style={{width:'100%',height:lan.h*.25,
          backgroundColor:'#232527',
          alignItems:'center',
          justifyContent:'center'
          }}>
            <Text style={{fontSize:18,color:'white'}}>June 15, 2016 15:00</Text>
            <Text style={{fontSize:18,fontWeight:'500',color:'white',marginTop:10}}>Sichuan University Huaxi Campus Outfield</Text>
            <View style={{
                flexDirection:'row',
            justifyContent:'space-between',marginTop:10
            }}>
            <Ant name='enviromento' style={{fontSize:18,color:'white'}}/>
            <Text style={{color:'white',marginLeft:5}}>Outfield of Huaxi Campus, Sichuan University, Huaxi South Road, People's South Road, Chengdu</Text>
            </View>
           
          </View>

          {/*  */}
          {
            login?
            <View style={{padding:20,flexDirection:'row',alignItems:'center'}}>
           <Image source={{uri:'http://b-ssl.duitang.com/uploads/item/201603/27/20160327101040_fFSku.jpeg'}} style={{
            width:60,height:60,borderRadius:30
           }} />    
           <View style={{marginLeft:20}}>
             <Text style={{fontSize:18,color:'#232527'}}>
             sunshine
             </Text>
             <Text style={{color:'#979DA1',marginTop:6}}>
             Chengdu, Sichuan
             </Text>
           </View>

          </View>
          :
          undefined
          }
          

          <Divider style={{backgroundColor:'#F4F4F5FF',height:10}}/>
          <TouchableOpacity style={{padding:20,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{

            login?
            this.props.navigation.navigate('Mybishai')
            :this.navigate_login()
          }}>
              <Text style={{fontSize:18}}>My game</Text>
              <Ant name='right' style={{fontSize:18,color:'#4C5153'}}/>
          </TouchableOpacity>
          <Divider style={{backgroundColor:'#F4F4F5FF',height:10}}/>
          <TouchableOpacity style={{padding:20,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{
            login?
            this.props.navigation.navigate('Mylqq')
            :this.navigate_login()
          }}>
              <Text style={{fontSize:18}}>My basketball hoop</Text>
              <Ant name='right' style={{fontSize:18,color:'#4C5153'}}/>
          </TouchableOpacity>
          <Divider style={{backgroundColor:'#F4F4F5FF',height:10}}/>
          <TouchableOpacity style={{padding:20,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{
          login?
         this.props.navigation.navigate('MyFeed')
         :
         this.navigate_login()
          }}>
              <Text style={{fontSize:18}}>Feedback</Text>
              <Ant name='right' style={{fontSize:18,color:'#4C5153'}}/>
          </TouchableOpacity>
          <Divider style={{backgroundColor:'#F4F4F5FF',height:10}}/>
          {
            login?
            <TouchableOpacity style={{padding:20,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{
              this.lgout()
            }}>
              <Text style={{fontSize:18}}>sign out</Text>
              <Ant name='right' style={{fontSize:18,color:'#4C5153'}}/>
          </TouchableOpacity>
          :null
          }
          
          <Divider style={{backgroundColor:'#F4F4F5FF',height:10}}/>

        </SafeAreaView>
        )
    }

}
export default My2

