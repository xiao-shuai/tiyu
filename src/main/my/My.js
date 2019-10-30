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
    SafeAreaView,Alert,Linking,ProgressBarAndroid,ImageBackground
} from 'react-native'
import {lan} from '../../config/con_style'
// import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button,Divider} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import Ant from 'react-native-vector-icons/AntDesign'
import {inject,observer} from 'mobx-react'
@inject(["mbx"])
@observer // 监听当前组件
class My extends Component {
    static navigationOptions = {
        title: '我的',
      };
    constructor(props){
        super(props)
        this.state={

        }

    }
  navigate_login=()=>{
      Alert.alert('你还没用登录哦 请登录！','',
      [{'text':'取消',onPress:()=>{}},{'text':'去登陆',onPress:()=>{
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
          <ImageBackground style={{
            width:'100%',height:lan.h*.25,
            backgroundColor:'#232527',
            alignItems:'center',
            justifyContent:'center'
          }} source={require('../../img/mybg.png')}>
            <Text style={{fontSize:18,color:'white'}}>2016年6月15日 15:00</Text>
            <Text style={{fontSize:18,fontWeight:'500',color:'white',marginTop:10}}>北京大学华西校区外场</Text>
            <View style={{
                flexDirection:'row',
            justifyContent:'space-between',marginTop:10
            }}>
            <Ant name='enviromento' style={{fontSize:18,color:'white'}}/>
            <Text style={{color:'white',marginLeft:5}}>北京市人民南路华西坝北京大学华西校区外场</Text>
            </View>

          </ImageBackground>
          

          {/*  */}
          {
            login?
            <View style={{padding:20,flexDirection:'row',alignItems:'center'}}>
           <Image source={{uri:'https://c-ssl.duitang.com/uploads/item/201910/15/20191015234447_ffqvu.thumb.300_300_c.jpg'}} style={{
            width:60,height:60,borderRadius:30
           }} />    
           <View style={{marginLeft:20}}>
             <Text style={{fontSize:18,color:'#232527'}}>
             lovesunshine
             </Text>
             <Text style={{color:'#979DA1',marginTop:6}}>
              北京-西城区
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
              <Text style={{fontSize:18}}>我的比赛</Text>
              <Ant name='right' style={{fontSize:18,color:'#4C5153'}}/>
          </TouchableOpacity>
          <Divider style={{backgroundColor:'#F4F4F5FF',height:10}}/>
          <TouchableOpacity style={{padding:20,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{
            login?
            this.props.navigation.navigate('Mylqq')
            :this.navigate_login()
          }}>
              <Text style={{fontSize:18}}>我的篮球圈</Text>
              <Ant name='right' style={{fontSize:18,color:'#4C5153'}}/>
          </TouchableOpacity>
          <Divider style={{backgroundColor:'#F4F4F5FF',height:10}}/>
          <TouchableOpacity style={{padding:20,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{
          login?
         this.props.navigation.navigate('MyFeed')
         :
         this.navigate_login()
          }}>
              <Text style={{fontSize:18}}>问题反馈</Text>
              <Ant name='right' style={{fontSize:18,color:'#4C5153'}}/>
          </TouchableOpacity>
          <Divider style={{backgroundColor:'#F4F4F5FF',height:10}}/>
          {
            login?
            <TouchableOpacity style={{padding:20,flexDirection:'row',justifyContent:'space-between'}} onPress={()=>{
              this.lgout()
            }}>
              <Text style={{fontSize:18}}>退出登录</Text>
              <Ant name='right' style={{fontSize:18,color:'#4C5153'}}/>
          </TouchableOpacity>
          :null
          }
          
          <Divider style={{backgroundColor:'#F4F4F5FF',height:10}}/>

        </SafeAreaView>
        )
    }

}
export default My

