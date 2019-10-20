import React,{Component} from 'react'
import { 
     createAppContainer, 
    } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../main/main/Home'
import Login from  '../main/login/Login'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons';
import {lan} from '../config/con_style'
import Match from '../main/match/Match'
import Quan from '../main/quan/Quan'
import My from '../main/my/My'
import Fa from '../main/quan/Fa'
import BiSai from '../main/match/BiSai'
import Mybishai from '../main/my/Mybishai'
import MyFeed from '../main/my/MyFeed'
import Mylqq from '../main/my/Mylqq'
import Zc from '../main/login/Zc'
  const TAB=createBottomTabNavigator(
    {
        Home: Home,
        Quan:Quan,
        Match:Match,
       My:My
      },
      {
        defaultNavigationOptions: ({ navigation }) => ({
          tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
           
            let iconName;
            if (routeName === 'Home') {
              iconName = 'home';
              // Sometimes we want to add badges to some icons. 
              // You can check the implementation below.
            //   IconComponent = HomeIconWithBadge; 
            } else if (routeName === 'My') {
                 iconName = `user`;
            } else if (routeName==='Match'){
                iconName=`Trophy`
            }else if (routeName==`Quan`){
                iconName=`earth`
            }
    
            // You can return any component that you like here!
            return <AntDesign name={iconName} style={{fontSize:25,color:focused?lan.tm_color:lan.tm_hui}}/>;
          },
        }),
        tabBarOptions: {
          activeTintColor: lan.tm_color,
          inactiveTintColor: 'gray',
        },
      }
  )

    const PAGE=createStackNavigator({

        Main:{
            screen:TAB,
            navigationOptions:()=>({
                header:null,
                headerBackTitle:null,
            })
          },
          Home:{
            screen:Home,
            navigationOptions:()=>({
                header:null,
                headerBackTitle:null,
            })
          },
          Quan:{
            screen:Quan,
            navigationOptions:()=>({
                header:null,
                headerBackTitle:null,
            })
          },
          Fa:{
            screen:Fa,
            navigationOptions:()=>({
                // header:null,
                title:'发布篮球圈',
                headerBackTitle:null,
                headerStyle:{backgroundColor:'#18191A'},
                headerTintColor:'white' 
            })
          },
          BiSai:{
            screen:BiSai,
            navigationOptions:()=>({
                // header:null,
                title:'发布比赛',
                headerBackTitle:null,
                headerStyle:{backgroundColor:'#18191A'},
                headerTintColor:'white' 
            })
          },
          Mylqq:{
            screen:Mylqq,
            navigationOptions:()=>({
                // header:null,
                title:'篮球圈',
                headerBackTitle:null,
                headerStyle:{backgroundColor:'#18191A'},
                headerTintColor:'white' 
            })
          },
          MyFeed:{
            screen:MyFeed,
            navigationOptions:()=>({
                // header:null,
                title:'反馈',
                headerBackTitle:null,
                headerStyle:{backgroundColor:'#18191A'},
                headerTintColor:'white' 
            })
          },
          Mybishai:{
            screen:Mybishai,
            navigationOptions:()=>({
                // header:null,
                title:'我的比赛',
                headerBackTitle:null,
                headerStyle:{backgroundColor:'#18191A'},
                headerTintColor:'white' 
            })
          },
          Login:{
            screen:Login,
            navigationOptions:()=>({
                // header:null,
                title:'登录',
                headerBackTitle:null,
                headerStyle:{backgroundColor:'#18191A'},
                headerTintColor:'white' 
            })
          },
          Zc:{
            screen:Zc,
            navigationOptions:()=>({
                // header:null,
                title:'注册',
                headerBackTitle:null,
                headerStyle:{backgroundColor:'#18191A'},
                headerTintColor:'white' 
            })
          },
          
         
         
          
        //   Login:{
        //     screen:Login, 
        //     navigationOptions:()=>({
        //         // title:'查询服务'
        //         header:null,
        //         headerBackTitle:null,
        //     })
        //   },
         
          
         
          
          
          
      
     })   
     export default createAppContainer(PAGE)