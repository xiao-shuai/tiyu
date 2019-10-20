import { observable, action } from "mobx";
class Data{
    @observable text;
    @observable login;
    @observable lqq;
    @observable math;
    constructor(){
    this.text='wowoww777'
    this.login=false
    this.lqq=[
        {
         img:'http://cdn.duitang.com/uploads/item/201508/02/20150802155755_YCynL.thumb.700_0.jpeg',
         name:'李梦', 
         area:'Beijing - changping',
         gz:'关注',
         xi_color:'#A3A7AA',
         shou_color:'#A3A7AA',
         text:'1891年12月21日由詹姆斯·奈史密斯创造奥运会核心比赛项目是以手为中心的身体对抗性体育运动',
         con_img:'http://img8.zol.com.cn/bbs/upload/23488/23487397.jpg',
         },
         {
           gz:'关注',
            img:'http://cdn.duitang.com/uploads/item/201410/06/20141006213125_PtNn8.thumb.700_0.jpeg',
            name:'Logan', 
            xi_color:'#A3A7AA',
            shou_color:'#A3A7AA',
            area:'Wuhan - jianghan',
            text:'1891年12月21日由詹姆斯·奈史密斯创造奥运会核心比赛项目是以手为中心的身体对抗性体育运动',
            con_img:'http://photocdn.sohu.com/20140225/Img395601532.JPG',  
          },
          {
            gz:'关注',
             img:'https://img2.woyaogexing.com/2019/08/05/d6a5501526b84d0999b40517d983ac47!400x400.jpeg',
             name:'Abner', 
             xi_color:'#A3A7AA',
             shou_color:'#A3A7AA',
             area:'Wuhan - jianghan',
             text:'　　男女4乘100米混合泳接力是东京奥运会正式项目，而在确定12个奥运参赛席位的光州世锦赛上，中国队预赛犯规无成绩，只能抓紧时间去争取余下四个名额，本站世界杯中国队列出徐嘉余、闫子贝、张雨霏和朱梦惠的阵容，在杨浚瑄出战二青会所以只能放弃的前提下，这就是绝对主力阵容',
             con_img:'http://hbimg.b0.upaiyun.com/16bd4d2eb6d4083d4e05f8e813e44d02fb358bcd6d915-bOW9GR_fw658',  
           },
    ],
  
    this.math=[
     {
      img:'https://c-ssl.duitang.com/uploads/item/201712/18/20171218124622_duQtY.thumb.700_0.jpeg',
      xuexiao:'成都理工大学篮球挑战赛',
      diqu:'成都市二仙桥成都理工大学校园内',
      bm:'立即报名'
     },
     {
      img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1564724336664&di=9c2c73f92f12079e5f459d37928ce447&imgtype=0&src=http%3A%2F%2Fimage1.wulinsoso.com%2Fvector%2Flanrentuku%2F2014%2F01%2F08%2F0003088225.jpg',
      xuexiao:'城东翡翠城业主挑战赛',
      diqu:'成都市成仁立交附近翡翠城一个内场',
      bm:'立即报名'
     },
     {
      img:'http://photocdn.sohu.com/20140727/Img402784141.jpg',
      xuexiao:'武汉市江夏区篮球挑战赛',
      diqu:'武汉大学体育场',
      bm:'立即报名'
     },

    ]
    }
    
  
   save_order=(e)=>{
     this.order.push(e)  
   }
   save_login=(e)=>{
    this.login=e
   }
   remove_lqq=(e)=>{
     this.lqq.splice(e,1)
   }
   xi_lqq=(i)=>{
      this.lqq[i].xi_color=this.lqq[i].xi_color=='red'?'#A3A7AA':'red'
   }
   shou_lqq=(i)=>{
    this.lqq[i].shou_color=this.lqq[i].shou_color=='red'?'#A3A7AA':'red'
 }
   gz=(i)=>{
  //  let a= this.lqq[i].gz
  //    a=a=='关注'?'已关注':'关注'
  this.lqq[i].gz=this.lqq[i].gz=='关注'?'已关注':'关注'
 }
 gzbm=(i)=>{
  this.math[i].bm=this.math[i].bm=='立即报名'?'取消报名':'立即报名'
 }

}
const mbx=new Data()
export {mbx}
