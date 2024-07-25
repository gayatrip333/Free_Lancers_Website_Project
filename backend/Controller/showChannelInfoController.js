const channelInfo=require("../Schema/NewsChannelInformation");
exports.showChannelInformation=async(req,res)=>{
    try{
            const channelData=await channelInfo.find({status:true});
            res.status(201).send(channelData); 
    }catch(e){
        res.status(400).send(e); 
    }
}