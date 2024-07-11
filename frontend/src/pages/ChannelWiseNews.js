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
                    <h2></h2>
                    <p>This is a summary of the content for card 2. It can be a brief description or any other Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit blanditiis a accusamus numquam eveniet perferendis quas facilis explicabo, totam voluptates quod quis sapiente non. Omnis modi rerum quidem iste minima. relevant information. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo rerum molestias minus. Adipisci aliquid minus, molestiae corporis inventore impedit pariatur dolorum, laboriosam reprehenderit in facilis molestias quidem qui consectetur illo consequuntur. Officia, temporibus asperiores hic nesciunt dolores dignissimos delectus a!</p>
                    <div className="cardButtonDiv">
                        <button  > Visit Channel ▶▶</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
