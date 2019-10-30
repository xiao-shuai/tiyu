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
import { NavigationActions } from 'react-navigation';
// import Echarts from 'native-echarts';
import {inject,observer} from 'mobx-react'
// import console = require('console');
@inject(["mbx"])
@observer // 监听当前组件
class Home extends Component {
    static navigationOptions = {
        title: '球星',
      };
    constructor(props){
        super(props)
        this.state={

        }
   
    }
   get_start=()=>{
       fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/qiu/xin')
       .then(res=>res.json())
       .then(res=>{})
       .catch()
   } 
  componentDidMount(){
      this.get_start()
      console.log('456:',this.props.mbx.text)
      AsyncStorage.getItem('log').then(res=>{
          console.log('11',res)
          if(res!==null){
              this.props.mbx.save_login(true)
          }
      }

      ).catch()  

  } 
    render(){
        console.log('442',this.props.mbx.login)
const option = {
    title: {
        text: 'KOBE综合能力值',
        x: 'center',
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        // x: 'under',
        // data:['某软件','某主食手机','某水果手机','降水量','蒸发量']
    },
    radar: [
        {
            // indicator: [
            //     {text: '品牌', max: 100},
            //     {text: '内容', max: 100},
            //     {text: '可用性', max: 100},
            //     {text: '功能', max: 100}
            // ],
            // center: ['25%','40%'],
            // radius: 80
        },
        {
            indicator: [
                {text: '扣篮', max: 100},
                {text: '投篮', max: 100},
                {text: '罚球', max: 100},
                {text: '抢断', max: 100},
                {text: '篮板', max: 100}
            ],
            radius: 80,
            center: ['50%','60%'],
        },
        // {
        //     indicator: (function (){
        //         var res = [];
        //         for (var i = 1; i <= 12; i++) {
        //             res.push({text:i+'月',max:100});
        //         }
        //         return res;
        //     })(),
        //     center: ['75%','40%'],
        //     radius: 80
        // }
    ],
    series: [
        // {
        //     type: 'radar',
        //      tooltip: {
        //         trigger: 'item'
        //     },
        //     itemStyle: {normal: {areaStyle: {type: 'default'}}},
        //     data: [
        //         {
        //             value: [60,73,85,40],
        //             name: '某软件'
        //         }
        //     ]
        // },
        {
            type: 'radar',
            radarIndex: 1,
            data: [
                {
                    value: [85, 90, 90, 95, 95],
                    name: '某主食手机'
                },
                
            ],
            color:['gold']
        },

    ]
};
        return(
           
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            {/* <ScrollView> */}

            
      <View style={styles.w}>
       <Image source={require('../../img/bg.png')} style={{
        width:'100%',height:'100%',
        // marginTop:'15%'    
       }} resizeMode='stretch'/>
       <View style={{flexDirection:'row',
       width:'100%',justifyContent:'space-between',
       top:-lan.h*.3,padding:20,alignItems:'center'
       }}>
           <View style={{alignItems:'center'}}>
           <Text style={styles.text}>今日比赛：2 场</Text>
           <Image source={require('../../img/jindu.png')} 
           style={{width:lan.w*.3,height:lan.w*.3,marginTop:10}}/>
             <Text style={styles.text}>完成率 </Text>
           </View>

         <View style={{width:lan.h*.16,height:lan.h*.16,
            borderRadius:lan.h*.08,borderWidth:1,borderColor:'gold',
            alignItems:'center',justifyContent:'center'
            }}>
          <Image source={require('../../img/kebi.jpeg')} style={{
              width:lan.h*.154,height:lan.h*.154,borderRadius:lan.h*.077
          }} resizeMode='cover'/>
       </View>
       </View>

       
       </View>
       <View style={{
           top:20,alignItems:'center',width:'100%'
       }}>
           <Image source={require('../../img/jiatu.png')} 
            style={{width:lan.w*.8,height:lan.w*.8}}

           />
           
           {/* <Echarts option={option} height={lan.h*.35} /> */}
       <View style={{flexDirection:'row',width:'100%',padding:20,justifyContent:'space-between'}}>
           <View style={{alignItems:'center'}}>
               <View style={{flexDirection:'row'}}>
                   <Text style={{color:'gold'}}>●</Text>
               <Text style={{color:'#0B1E2A',marginLeft:5}}>运球</Text>
               </View> 
               <Text style={styles.fen_font}>12</Text>
           </View>
           <View style={{alignItems:'center'}}>
               <View style={{flexDirection:'row'}}>
                   <Text style={{color:'gold'}}>●</Text>
               <Text style={{color:'#0B1E2A',marginLeft:5}}>3分球</Text>
               </View> 
               <Text style={styles.fen_font}>12</Text>
           </View>
           <View style={{alignItems:'center'}}>
               <View style={{flexDirection:'row'}}>
                   <Text style={{color:'gold'}}>●</Text>
               <Text style={{color:'#0B1E2A',marginLeft:5}}>2分球</Text>
               </View> 
               <Text style={styles.fen_font}>12 </Text>
           </View>
       </View>
       </View>
       
       {/* </ScrollView> */}
        </SafeAreaView>
        )
    }

}
export default Home
const styles=StyleSheet.create({
    fen_font:{
        fontWeight:'500',fontSize:16,marginTop:5
    },
    w:{
        width:'100%',
        height:lan.h*.3,
        backgroundColor:lan.tm_color
    },
    text:{
        color:'white',
        // marginTop:-lan.h*.2,
        fontSize:16,
        // marginLeft:20
    }
})

