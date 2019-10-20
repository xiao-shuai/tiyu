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
import {Button,Divider,ButtonGroup} from 'react-native-elements'
import Ant from 'react-native-vector-icons/AntDesign'

class Mybishai extends Component {
    constructor(props){
        super(props)
        this.state={
            selectedIndex: 0,
            loading:true
        }
        this.updateIndex = this.updateIndex.bind(this)
    }
    updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      componentDidMount(){
          fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/math')
          .then(r=>r.json())
          .then(res=>{
           this.setState({loading:false})
          }).catch()
      }
    render(){
        const buttons = ['我的报名', '我的比赛']
        const { selectedIndex } = this.state
        if(this.state.loading){
            return(
            <SafeAreaView style={{flex:1}}>
            <ActivityIndicator style={{marginTop:lan.h*.2}} size='large'/>
            </SafeAreaView>
            )
        }
        return(
        <SafeAreaView style={{flex:1,alignItems:"center"}}>
            <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      selectedButtonStyle={{backgroundColor:lan.tm_color}}
      containerStyle={{height: lan.h*.05}}
    />
    <ScrollView contentContainerStyle={{
                width:lan.w,padding:20,
           }}>
               {
                   selectedIndex==0?
                   <View style={{padding:20,width:'100%',alignItems:'center'}}>
         
                        <Image source={require('../../img/Nodata.png')} style={{
                       width:lan.w*.3,height:lan.w*.3,marginTop:lan.h*.2
                     }}/>
                     <Text style={{marginTop:20,color:lan.tm_hui}}>暂时无数据哦</Text>
                   </View>
                //    <View style={{
                //     width:'100%',
                //    shadowColor:'#A9ADB0',
                //    shadowOpacity:.9,
                //    shadowRadius:8,
                //    backgroundColor:'white',
                //    borderRadius:8
    
                //    }}>
                //        <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724336664&di=9c2c73f92f12079e5f459d37928ce447&imgtype=0&src=http%3A%2F%2Fimage1.wulinsoso.com%2Fvector%2Flanrentuku%2F2014%2F01%2F08%2F0003088225.jpg'}} style={{
                //            width:'100%',height:lan.h*.2
                //        }}/>
    
                //        <View style={{flexDirection:'row',
                //        justifyContent:'space-between',padding:10
                //        }}>
                //            <Text style={{fontSize:16}}>
                //            成都理工大学篮球挑战赛
                //            </Text>
                //            <Text style={{color:'gold'}}>
                //            2016年6月15日 15:00
                //            </Text>
                //        </View>
                //        <View style={{flexDirection:'row',
                //        justifyContent:'space-between',padding:10
                //        }}>
                //            <View style={{width:'65%'}}>
                //              <Text style={{color:'#999999FF'}}>成都市二仙桥成都理工大学校园内</Text>
                //              <Text style={{marginTop:5,color:'#999999FF'}}>赛制：5 V 5</Text>
                //            </View>
                //            <Button title={'立即报名'} buttonStyle={{backgroundColor:'gold'}}/>
                //        </View>
                //    </View>
                   :
                   <View style={{padding:20,width:'100%',alignItems:'center'}}>
                        <Image source={require('../../img/Nodata.png')} style={{
                       width:lan.w*.3,height:lan.w*.3,marginTop:lan.h*.2
                     }}/>
                     <Text style={{marginTop:20,color:lan.tm_hui}}>暂无数据哦</Text>
                   </View>
                //    <View style={{
                //     width:'100%',
                //    shadowColor:'#A9ADB0',
                //    shadowOpacity:.9,
                //    shadowRadius:8,
                //    backgroundColor:'white',
                //    borderRadius:8
    
                //    }}>
                //        <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724336664&di=9c2c73f92f12079e5f459d37928ce447&imgtype=0&src=http%3A%2F%2Fimage1.wulinsoso.com%2Fvector%2Flanrentuku%2F2014%2F01%2F08%2F0003088225.jpg'}} style={{
                //            width:'100%',height:lan.h*.2
                //        }}/>
    
                //        <View style={{flexDirection:'row',
                //        justifyContent:'space-between',padding:10
                //        }}>
                //            <Text style={{fontSize:16}}>
                //            成都理工大学篮球挑战赛
                //            </Text>
                //            <Text style={{color:'gold'}}>
                //            2016年6月15日 15:00
                //            </Text>
                //        </View>
                //        <View style={{flexDirection:'row',
                //        justifyContent:'space-between',padding:10
                //        }}>
                //            <View style={{width:'65%'}}>
                //              <Text style={{color:'#999999FF'}}>成都市二仙桥成都理工大学校园内</Text>
                //              <Text style={{marginTop:5,color:'#999999FF'}}>赛制：5 V 5</Text>
                //            </View>
                //            <Button title={'立即报名3'} buttonStyle={{backgroundColor:'gold'}}/>
                //        </View>
                //    </View>
    
    
               }

           </ScrollView>

            
        </SafeAreaView>
        )
    }
}
export default Mybishai
const styles=StyleSheet.create({
    
})
