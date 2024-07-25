const mongoose=require('mongoose');
const schema=mongoose.Schema;
const ChannelInfo= new schema({   
name:{
    type:String
},
email:
{
    type:String
},
logo_url:
{
    type:String
},
address:
{
    type:String
},
status:{
    type:Boolean
}
})
const channelInfo=new mongoose.model("newschannelinformations",ChannelInfo);
module.exports=channelInfo;