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
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button} from 'react-native-elements'
import {inject,observer} from 'mobx-react'
@inject(["mbx"])
@observer // 监听当前组件
class Match extends Component {
    static navigationOptions = {
        title: '比赛',
      };
    constructor(props){
        super(props)
        this.state={

        }

    }
    navigate_login=()=>{
        Alert.alert('你还未登录请登录哦','',
        [{'text':'取消',onPress:()=>{}},{'text':'去登录',onPress:()=>{
            this.props.navigation.navigate('Login')
        }}])
     }  

    bm=(m)=>{
     this.props.mbx.gzbm(m)
     fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/getgz',{method:'POST'})
     .then(res=>res.json())
     .then(res=>{})
     .catch(e=>{})
    }
    render(){
        const data=this.props.mbx.math
        const login=this.props.mbx.login
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
                        <View style={styles.top_v}>
            <Text></Text>
            <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>比赛</Text>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('BiSai')
            }}>
                <Text style={{fontSize:25,color:'white'}}>+</Text>
            </TouchableOpacity>
           </View>
           

           <ScrollView contentContainerStyle={{
                width:lan.w,alignItems:'center',padding:20
           }}>
               {
                   data.map((i,m)=>{
                  return( 
                  <View style={{
                    width:'100%',
                   shadowColor:'#A9ADB0',
                   shadowOpacity:.9,
                   shadowRadius:8,
                   backgroundColor:'white',
                   borderRadius:8,
                   marginTop:m==0?0:20
    
                   }}>
                       <Image source={{uri:i.img}} style={{
                           width:'100%',height:lan.h*.2,borderRadius:8
                       }}/>
    
                       <View style={{
                        flexDirection:'row',
                       justifyContent:'space-between',
                       padding:5,
                       alignItems:'center',
                       marginTop:10
                       }}>
                           <Text style={{fontSize:15}}>
                           {i.xuexiao.substr(0,22)+'...'}
                           </Text>
                           <Text style={{color:'gold'}}>
                           2019/6/7
                           </Text>
                       </View>
                       <View style={{flexDirection:'row',
                       justifyContent:'space-between',padding:5,alignItems:'center'
                       }}>
                           <View style={{width:'65%'}}>
                             <Text style={{color:'#999999FF'}}>{i.diqu}</Text>
                             <Text style={{marginTop:5,color:'#999999FF'}}>赛制：5 V 5</Text>
                           </View>
                           <Button title={i.bm} buttonStyle={{backgroundColor:i.bm=='立即报名'?'gold':'#18191A',}} titleStyle={{fontSize:16}} 
                            onPress={()=>{
                                login?
                                this.bm(m)
                                :
                                this.navigate_login()
                            }}
                           />
                       </View>
                   </View>)
                   })
               
            }
              

           </ScrollView>

        </SafeAreaView>
        )
    }

}
export default Match
const styles=StyleSheet.create({
    top_v:{
        width:'100%',height:lan.h*.1,
        backgroundColor:'#0B1E2A',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,alignItems:'center'
    }
})

