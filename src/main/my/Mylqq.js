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
import AntDesign from 'react-native-vector-icons/AntDesign'

class Mylqq extends Component {
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
        fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/mylqq')
          .then(r=>r.json())
          .then(res=>{
           this.setState({loading:false})
          }).catch()
      }
    render(){
        const buttons = ['我的关注', '我的收藏']
        const { selectedIndex } = this.state
        if(this.state.loading){
          return(
          <SafeAreaView style={{flex:1}}>
          <ActivityIndicator style={{marginTop:lan.h*.2}} size='large'/>
          </SafeAreaView>
          )
      }
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
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
                     <Text style={{marginTop:20,color:lan.tm_hui}}>暂无数据哦</Text>
                   {/* <View style={{flexDirection:'row',
                   justifyContent:'space-between',
                   }}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>   
                  <Image source={{uri:'http://img5.duitang.com/uploads/item/201411/29/20141129010249_dh32E.thumb.700_0.jpeg'}}
                         style={{width:50,height:50,borderRadius:25}}
                  />
                  <View style={{marginLeft:10}}>
                      <Text style={{fontSize:16}}>iyallllhdgdg</Text>
                      <Text style={{color:'#A3A7AA',marginTop:5}}>四川-成都</Text>
                  </View>
                  </View>
                    <Button title={'关注'} buttonStyle={{backgroundColor:'gold',width:lan.w*.22,borderRadius:20}}/>
                   </View>
                  
                   <Text style={{fontSize:16,marginTop:20,color:'#666666FF',lineHeight:20}}>1891年12月21日由詹姆斯·奈史密斯创造奥运会核心比赛项目是以手为中心的身体对抗性体育运动</Text>
                   <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724336664&di=9c2c73f92f12079e5f459d37928ce447&imgtype=0&src=http%3A%2F%2Fimage1.wulinsoso.com%2Fvector%2Flanrentuku%2F2014%2F01%2F08%2F0003088225.jpg'}} 
                      style={{width:'100%',height:lan.h*.2,marginTop:10,borderRadius:10}}
                   />
                 
                 <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
                     <Text style={{color:'#999999FF'}}>2019/06/25 12:55</Text>
                     <TouchableOpacity>
                     <AntDesign name='hearto' style={{fontSize:18,color:'#A3A7AA'}}/>
                     </TouchableOpacity>
                     <TouchableOpacity>
                     <AntDesign name='staro' style={{fontSize:20,color:'#A3A7AA'}}/>
                     </TouchableOpacity>
                     <TouchableOpacity>
                   <Text style={{fontSize:16,color:'#A3A7AA'}}>屏蔽</Text>
                      </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{fontSize:16,color:'#A3A7AA'}}>举报</Text>
                    </TouchableOpacity>
         
                 </View> */}
                    </View>
                   :
                   <View style={{padding:20,width:'100%',alignItems:'center'}}>
                     <Image source={require('../../img/Nodata.png')} style={{
                       width:lan.w*.3,height:lan.w*.3,marginTop:lan.h*.2
                     }}/>
                     <Text style={{marginTop:20,color:lan.tm_hui}}>暂无数据哦</Text>
                   {/* <View style={{flexDirection:'row',
                   justifyContent:'space-between',
                   }}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>   
                  <Image source={{uri:'http://img5.duitang.com/uploads/item/201411/29/20141129010249_dh32E.thumb.700_0.jpeg'}}
                         style={{width:50,height:50,borderRadius:25}}
                  />
                  <View style={{marginLeft:10}}>
                      <Text style={{fontSize:16}}>iyallllhdgdg</Text>
                      <Text style={{color:'#A3A7AA',marginTop:5}}>四川-成都</Text>
                  </View>
                  </View>
                    <Button title={'关注'} buttonStyle={{backgroundColor:'gold',width:lan.w*.22,borderRadius:20}}/>
                   </View>
                  
                   <Text style={{fontSize:16,marginTop:20,color:'#666666FF',lineHeight:20}}>1891年12月21日由詹姆斯·奈史密斯创造奥运会核心比赛项目是以手为中心的身体对抗性体育运动</Text>
                   <Image source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724336664&di=9c2c73f92f12079e5f459d37928ce447&imgtype=0&src=http%3A%2F%2Fimage1.wulinsoso.com%2Fvector%2Flanrentuku%2F2014%2F01%2F08%2F0003088225.jpg'}} 
                      style={{width:'100%',height:lan.h*.2,marginTop:10,borderRadius:10}}
                   />
                 
                 <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between'}}>
                     <Text style={{color:'#999999FF'}}>2019/06/25 12:55</Text>
                     <TouchableOpacity>
                     <AntDesign name='hearto' style={{fontSize:18,color:'#A3A7AA'}}/>
                     </TouchableOpacity>
                     <TouchableOpacity>
                     <AntDesign name='staro' style={{fontSize:20,color:'#A3A7AA'}}/>
                     </TouchableOpacity>
                     <TouchableOpacity>
                   <Text style={{fontSize:16,color:'#A3A7AA'}}>屏蔽</Text>
                      </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{fontSize:16,color:'#A3A7AA'}}>举报3</Text>
                    </TouchableOpacity>
         
                 </View> */}
                    </View>
    
    
               }

           </ScrollView>
  
        </SafeAreaView>
        )
    }
}
export default Mylqq
const styles=StyleSheet.create({
    
})
