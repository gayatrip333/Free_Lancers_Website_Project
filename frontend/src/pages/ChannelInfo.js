import React from 'react'
import SignUpPageBackgroundImage from '../assets/SignUpPageBackgroundImage.jpeg'
import '../style/ChannelInfo.css'
import { useNavigate } from 'react-router-dom'
export default function ChannelInfo() {
    const navigate=useNavigate();
  return (
    <div className='channelInfoOuterDiv'>
        <div className='optionHoldingDivChannelInfo'>
            <button onClick={()=>navigate("/uploadupdatenews")}>Upload News Updates</button>
            <button>Edit Profile Information</button>
        </div>
      <h1 className='channelInfoPageInnerDivElements'>News Channel 1</h1>
      <img src={SignUpPageBackgroundImage} alt="" className='channelInfoLogoImage' />
      <h5 className='channelInfoPageInnerDivElements'>Email us at : gayatripatil@gmail.com </h5>
      <p className='channelInfoPageInnerDivElements'>Addres of Office Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa fugit dolores corrupti natus dolor sequi vel! Impedit doloribus suscipit similique.</p>
    </div>
  )
}
