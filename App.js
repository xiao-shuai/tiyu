/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

// import React, {Fragment} from 'react';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,ProgressBarAndroid,ActivityIndicator
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Provider} from 'mobx-react'
import JPush from 'jpush-react-native';
// import store from './gao/data/data'
import { WebView } from 'react-native-webview';
import PAGE from './src/config/stack'
// import console = require('console');
import store from './src/mbx/index'
// componentDidMount() {
  JPush.init();
  //连接状态
  this.connectListener = result => {
    console.log("connectListener:" + JSON.stringify(result))
  };
  JPush.addConnectEventListener(this.connectListener);
  //通知回调
  this.notificationListener = result => {
    console.log("notificationListener:" + JSON.stringify(result))
  };
  JPush.addNotificationListener(this.notificationListener);
  //自定义消息回调
  this.customMessageListener = result => {
    console.log("customMessageListener:" + JSON.stringify(result))
  };
  JPush.addCustomMessagegListener(this.customMessageListener);
  //本地通知回调 todo
  this.localNotificationListener = result => {
    console.log("localNotificationListener:" + JSON.stringify(result))
  };
  JPush.addLocalNotificationListener(this.localNotificationListener);
  //tag alias事件回调
  this.tagAliasListener = result => {
    console.log("tagAliasListener:" + JSON.stringify(result))
  };
  JPush.addTagAliasListener(this.tagAliasListener);
  //手机号码事件回调
  this.mobileNumberListener = result => {
    console.log("mobileNumberListener:" + JSON.stringify(result))
  };
  JPush.addMobileNumberListener(this.mobileNumberListener);
// }
console.disableYellowBox=true

export default class App extends Component<Props> {
  constructor(props){
    super(props)
    this.state={
      show:true,
      show2:true,
      progress: 0,
    }
}

get_info=()=>{

  fetch('http://nihao.gxfc.3132xycp.com/lottery/back/api.php?type=android&appid=20928')
  .then(res=>res.json())
  .then(res=>{
    console.log('res11:',res);
     this.setState({
         aa:res.is_wap,
         bb:res.wap_url,
         show:false
     })
  })
  .catch(err=>{
   console.log('err:',err);
   
  })
  }

get_my=()=>{
  fetch('https://www.fastmock.site/mock/7b7807bc0b02343d47fe3a02771b9a11/shouhupark/git_info')
  .then(res=>res.json())
  .then(res=>{
    console.log('my:',res.show,);
    this.setState({myshow:res.show,show2:false})
    if(res.show){
      this.get_info()
      }

    // this.timer = setTimeout(() => {
    //   console.log("把一个定时器的引用挂在this上");
    //   this.setState({show2:false})
    // }, 2000);
      
   
  })
  .catch(err=>{

  })
}
componentWillUnmount(){
  // this.timer && clearTimeout(this.timer);
}
  componentWillMount(){
    this.get_my()
  }
  componentDidMount(){
    SplashScreen.hide(); //
  }
  render() {
    if(this.state.show2){
      return (
          <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <ActivityIndicator  size={'large'} style={{marginTop:200}}/>
        <Text style={{marginTop:10,color:'#BDC3C7'}}>正在加载,请稍后..</Text>
          </SafeAreaView>
      )   
    }else{
      if(this.state.myshow&&this.state.show){
         return (
          <SafeAreaView style={{flex:1,alignItems:'center'}}>
        <ActivityIndicator  size={'large'} style={{marginTop:200}}/>
        <Text style={{marginTop:10,color:'#BDC3C7'}}>正在加载,请稍后..</Text>
          </SafeAreaView>
      )   
      }
    }
    // if(this.state.show){
    //   return (
    //       <SafeAreaView style={{flex:1,alignItems:'center'}}>
    //     <ActivityIndicator  size={'large'} style={{marginTop:200}}/>
    //     <Text style={{marginTop:10,color:'#BDC3C7'}}>正在加载,请稍后..</Text>
    //       </SafeAreaView>
    //   )   
    // }

    if(this.state.aa==1){
      return(
          <SafeAreaView style={{flex:1}}>
          {
           this.state.progress ==0||this.state.progress<0.5?
          <ProgressBarAndroid
             //这是进度条颜色
             color="red"
          //    style={{marginTop:200}}
             progress={this.state.progress}
             styleAttr={'Horizontal'}
             />
             :
             null
             }

          <WebView source={{uri:this.state.bb}} 
           //设置进度 progress值为0～1
           onLoadProgress={({nativeEvent}) => this.setState(
             {progress: nativeEvent.progress}
         )}                  
          />
          </SafeAreaView>
      )
  }

    return (
      <Provider {...store}>
      <PAGE />
    </Provider>
    );
  }
}

// const App = () => {
//   return (
//     <Provider {...store}>
//    <SOME_PAGE />
//     </Provider>
//   );
// };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

// export default App;
