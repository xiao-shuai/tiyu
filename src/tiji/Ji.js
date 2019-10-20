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
import DatePicker from 'react-native-datepicker'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
class BiSai2 extends Component {
    constructor(props){
        super(props)
        this.state={
          date:'',
          a:[
            {
             cl:'#E7E7E7FF',   
             tit:'1 V 1'
            },
            {
                cl:'#E7E7E7FF',   
                tit:'3 V 3'
               },
               {
                cl:'#E7E7E7FF',   
                tit:'5 V 5'
               },
               {
                cl:'#E7E7E7FF',   
                tit:'7 V 7'
               },
        ]
        }
    }
    agetdate=()=>{
        const date = new Date();
        const year = date.getFullYear().toString();
        const month = (date.getMonth()+1).toString();
        const day = date.getDate().toString();
        const final=year+'-'+month+'-'+day
        this.setState({date:final,showdate:final})
       }
   componentDidMount(){
       this.agetdate()
   } 
   fbbs=()=>{
      if(this.state.bsmc==undefined){
        Alert.alert('Please enter competition name','',[{'text':'ok',onPress:()=>{}}])
      } else if(this.state.bsdz==undefined){
        Alert.alert('Please enter the competition address','',[{'text':'ok',onPress:()=>{}}])
      }else {
        Alert.alert('Release success','',[{'text':'ok',onPress:()=>{}}])
        fetch('https://www.fastmock.site/mock/bf8e3c1a546ac8d4d184d3b0670cf90c/lanqiudaren/math')
        .then(res=>res.json())
        .then()
        .catch()
      }
   }     
    render(){
        
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
         <View style={{flex:1,width:'100%',backgroundColor:lan.tm_bg,padding:20}}>
           <KeyboardAwareScrollView>
               <View style={{padding:15,backgroundColor:'white'}}>
                   <TextInput style={{width:'100%',fontSize:16}} 
                   placeholder='The name of the game'
                    placeholderTextColor='#CCCCCCFF'
                    onChangeText={(bsmc)=>{
                       this.setState({bsmc})
                    }}
                    />
               </View>

               <View style={{padding:15,backgroundColor:'white',marginTop:20}}>
                   <TextInput style={{width:'100%',fontSize:16}} 
                   placeholder='Match the address'
                    placeholderTextColor='#CCCCCCFF'
                    onChangeText={(bsdz)=>{
                       this.setState({bsdz})
                    }}
                    />
               </View>
               <View style={{padding:15,backgroundColor:'white',
               marginTop:20,flexDirection:'row',
               }}>
                   <TextInput style={{width:lan.w*.3,fontSize:16}} 
                   placeholder='The game time'
                   editable={false}
                    placeholderTextColor='#CCCCCCFF'
                    onChangeText={(bstime)=>{
                       this.setState({bstime})
                    }}
                    />
                    <DatePicker
        style={{width: 200}}
        date={this.state.date}
        mode="date"
        showIcon={false}
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate= {this.state.showdate}
        maxDate="2020-06-01"
        confirmBtnText="确定"
        cancelBtnText="取消"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
               </View>
               <View style={{padding:15,backgroundColor:'white',marginTop:20}}>
                   <Text style={{fontSize:16}}>format</Text>

                   <View style={{flexDirection:'row',justifyContent:'space-between'}}>

                  {
                      this.state.a.map((i,k)=>{
                   return(
                       <TouchableOpacity onPress={()=>{
                            this.setState({k2:k},()=>{
                                if(k==this.state.k2){
                                    this.setState({})
                                }
                            })
                       }}>
                       <View style={{backgroundColor:k==this.state.k2&&i.cl=='#E7E7E7FF'?'gold':'#E7E7E7FF',
                        alignItems:'center',
                       justifyContent:'center',
                       padding:10,marginTop:10
                      
                       }}>
                            <Text>{i.tit}</Text>
                       </View>
                       </TouchableOpacity>
                   )
                      })
                  }
                  </View>
               </View>
            <Button title='release' buttonStyle={{marginTop:20,backgroundColor:'#FFC303FF'}} onPress={()=>{
              this.fbbs()
            }}/>
           </KeyboardAwareScrollView>
         </View>
        </SafeAreaView>
        )
    }
}
export default BiSai2