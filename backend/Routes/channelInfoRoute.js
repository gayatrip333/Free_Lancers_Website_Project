const express=require("express");
const router=express.Router();
const {showChannelInformation}=require("../Controller/showChannelInfoController");
router.get("/showChannelInformation",showChannelInformation);
module.exports=router;