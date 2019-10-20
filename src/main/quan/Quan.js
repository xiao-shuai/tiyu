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
    SafeAreaView,Alert,Linking,Modal
} from 'react-native'
import {lan} from '../../config/con_style'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Button} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {inject,observer} from 'mobx-react'
import ImageViewer from 'react-native-image-zoom-viewer';
// import console = require('console');
@inject(["mbx"])
@observer // 监听当前组件
class Quan extends Component {
    static navigationOptions = {
        title: '篮球圈',
        headerBackTitle:null,
      };
    constructor(props){
        super(props)
        this.state={
          vis:false,
          xi:false,
          shou:false,
        //   color:''
        }

    }
    componentDidMount(){
      
    }
   navigate_login=()=>{
    Alert.alert('You are not logged in, please log in!','',
    [{'text':'cancel',onPress:()=>{}},{'text':'ok',onPress:()=>{
        this.props.navigation.navigate('Login')
    }}])
   }  
   pb=(k)=>{
       this.props.mbx.login? 
       Alert.alert('你确定屏蔽该用户吗？','屏蔽后此用户的信息将不会出现在你的列表哦',
    [{'text':'取消',onPress:()=>{}},{'text':'确定',onPress:()=>{
        this.props.mbx.remove_lqq(k)
    }}])
        :
        this.navigate_login()

   }
   jubao=()=>{
    this.props.mbx.login? 
       Alert.alert('确定举报此信息? ','我们处理信息后将在1-3个工作日反馈给你',[{'text':'取消',onPress:()=>{}},{'text':'确定',onPress:()=>{
           
       }}])
       :
       this.navigate_login()
   }
    render(){
        const login=this.props.mbx.login
        const lqq=this.props.mbx.lqq
        const images=[
            {
                url:this.state.img_url
            }
        ]
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <View style={styles.top_v}>
            <Text></Text>
            <Text style={{fontSize:18,fontWeight:'500',color:'white'}}>篮球圈</Text>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Fa')
            }}>
                <Text style={{fontSize:25,color:'white'}}>+</Text>
            </TouchableOpacity>
           </View>
            <ScrollView contentContainerStyle={{width:lan.w}}>
                {
                 lqq.map((i,k)=>{
                
                  return(
                    <View style={{padding:20,width:'100%'}} key={k}>
                    <View style={{flexDirection:'row',
                      justifyContent:'space-between',
                    }}>
                     <View style={{flexDirection:'row',alignItems:'center'}}> 
                     
                   <Image source={{uri:i.img}}
                          style={{width:50,height:50,borderRadius:25}}
                   />
                   <View style={{marginLeft:10}}>
                       <Text style={{fontSize:16}}>{i.name}</Text>
                       <Text style={{color:'#A3A7AA',marginTop:5}}>{i.area}</Text>
                   </View>
                   </View>
                     <Button title={i.gz} buttonStyle={[styles.gz_btn,{backgroundColor:this.props.mbx.lqq[k].gz=='关注'?'gold':'#242425'}]} onPress={()=>{
                             login?
                             this.props.mbx.gz(k)
                             :this.navigate_login()
                            // console.log('111',this.props.mbx.lqq[k].gz)
                            
                              
                     }}/>
                    </View>
                    {/*  */}
                    <Text style={{fontSize:16,marginTop:20,color:'#666666FF',lineHeight:20}}>{i.text}</Text>
                    <TouchableOpacity onPress={()=>{
                       this.setState({vis:true,img_url:i.con_img})
                    }}>
                    <Image source={{uri:i.con_img}} 
                       style={{width:'100%',height:lan.h*.2,marginTop:10,borderRadius:10}}
                    />
                    </TouchableOpacity>
                  
                  <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{color:'#999999FF'}}>2019/06/25 12:55</Text>
                      <TouchableOpacity onPress={()=>{
                          login?
                          this.props.mbx.xi_lqq(k)
                          :this.navigate_login()
                      }}>
                      <AntDesign name='hearto' style={{fontSize:18,color:i.xi_color}}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                          login?
                          this.props.mbx.shou_lqq(k)
                          :this.navigate_login()
                      }}>
                      <AntDesign name='staro' style={{fontSize:20,color:i.shou_color}}/>
                      </TouchableOpacity>
                      <TouchableOpacity onPress={()=>{
                        this.pb(k)
                      }}>
                    <Text style={{fontSize:16,color:'#A3A7AA'}}>屏蔽</Text>
                       </TouchableOpacity>
                     <TouchableOpacity onPress={()=>{
                         this.jubao()
                     }}>
                     <Text style={{fontSize:16,color:'#A3A7AA'}}>举报</Text>
                     </TouchableOpacity>
          
                  </View>
                     </View>
                  )
                 })
                }
           
           {/*  */}

           </ScrollView>
           <Modal visible={this.state.vis} transparent={true}>
             <ImageViewer imageUrls={images} onClick={()=>{
                 this.setState({vis:false})
             }}/>
           </Modal>
           
        </SafeAreaView>
        )
    }

}
export default Quan
const styles=StyleSheet.create({
    gz_btn:{
        backgroundColor:'gold',
        width:lan.w*.22,borderRadius:20
    },
    top_v:{
        width:'100%',height:lan.h*.1,
        backgroundColor:'#0B1E2A',
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,alignItems:'center'
    }
})

