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
import {Button,Input} from 'react-native-elements'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ImagePicker from 'react-native-image-picker';


class Fa extends Component{
    constructor(props){
        super(props)
        this.state={
            iscover:false
        }
        this.option={

            title: '选择图片',
            
            cancelButtonTitle: '取消',
            
            takePhotoButtonTitle:'拍照',
            
            chooseFromLibraryButtonTitle:'图库',
            
            allowsEditing:true,
            
            quality: 0.8,
            
            noData: false,
            
            storageOptions: {
            
            skipBackup: true,
            
            path: 'images'
            
            }
            
            }
    }
    choosePicker = () => {
        ImagePicker.showImagePicker(this.option, (response) => {
          console.log('Response = ', response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            console.log('source--!!')
            let source = response.uri;
            // this.props.oneStore.change_tx(source)
            this.setState({
              iscover: true,
              fm:source,
            })
          }
        });
      }
     fa=()=>{
        if(this.state.content==undefined){
            Alert.alert('请输入信息','',[{'text':'知道了',onPress:()=>{}}])
        }else if(this.state.iscover==false){
            Alert.alert('请选择图片','',[{'text':'知道了',onPress:()=>{}}])
        }else{
            Alert.alert('发布成功','',[{'text':'知道了',onPress:()=>{}}])
            fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/fabu',{method:'POST'})
            .then(res=>res.json())
            .then(res=>{})
            .catch(err=>{})
        }
     } 
    render(){
        return(
        <SafeAreaView style={{flex:1}}> 
            <View style={{flex:1,backgroundColor:'#EDF0F2',width:'100%',padding:20}}>
              <View style={{width:'100%',height:lan.h*.25,
              backgroundColor:'white'
              }}>

              <Input inputStyle={{width:lan.w*.95,height:lan.h*.24,
            //   backgroundColor:'gold',
              padding:5,
              }} multiline={true}
              inputContainerStyle={{borderBottomWidth:0,marginTop:5 }}
              onChangeText={(content)=>{
                  this.setState({content})
              }}
              placeholder='请在此输入信息'
              />

                </View> 
                <TouchableOpacity onPress={()=>{
                    this.choosePicker()
                }}>
                    
                <View style={{width:'100%'}}>
                    {
                        this.state.iscover?
                        <Image style={{
                            width:lan.w*.3,
                            height:lan.w*.3,
                            marginTop:10   
                        }} source={{uri:this.state.fm}}/>
                        :
                        <Image source={require('../../img/sc.png')} style={{
                            width:lan.w*.3,
                            height:lan.w*.3,
                            marginTop:10   
                        }}/>
                    }
               
               <Text style={{color:'#A9ADB0',left:10,marginTop:10}}>上传封面图</Text>
                </View>
                </TouchableOpacity> 

                <Button buttonStyle={{width:'100%',marginTop:20,backgroundColor:lan.tm_color}} title='发布'
                 onPress={()=>{
                     this.fa()
                 }}
                />
              
            </View>
        </SafeAreaView>
        )
    }
}
 export default Fa