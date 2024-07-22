import React from 'react'
import SignUpPageBackgroundImage from '../assets/SignUpPageBackgroundImage.jpeg'
import { useNavigate } from 'react-router-dom'
import '../style/ChannelWiseNews.css'
export default function ChannelWiseNews() {
    const navigate=useNavigate();
    return (
        <div className='channelWiseBroseNewsPage'>
            <div className="NavigatingButtonsChannelWiseNewsPage">
                <div className="innerNavigatingButtonsChannelWiseNewsPage">
                    <div className="innerNavigatingButtonsChannelWiseNewsPagebuttonDiv">
                        <button onClick={() => navigate("/browsenewspage")}>See Global News</button>
                        <button onClick={() => navigate("/channelwisenewspage")}>See Channel Wise</button>
                    </div>
                </div>
            </div>
            <div class="card">
                <img src={SignUpPageBackgroundImage} alt="Image Description" />
                <div class="card-content">
                    <h2>Channel Title</h2>
                    <p>Channel Email</p>
                    <div className="cardButtonDiv">
                        <button  > Visit Channel ▶▶</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
