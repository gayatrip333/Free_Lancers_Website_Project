import React from 'react'
import SignUpPageBackgroundImage from '../assets/SignUpPageBackgroundImage.jpeg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/ChannelWiseNews.css'
export default function ChannelWiseNews() {
    const [newsDetails, setNewsDetails] = useState([]);


    useEffect(() => {
        const fetchClubDetails = async () => {
          try {
            const response = await fetch('http://localhost:3001/api/channelInformation/showChannelInformation'); // Make sure the URL is correct
            const channelbData = await response.json();
            setNewsDetails(channelbData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchClubDetails();
      },[]); 
    

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


                <div className="card_holding_div">
        {newsDetails.map((club, index) => (
          <div className="card_inner_div" key={index}>
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={club.logo} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title"><b>{club.clubname}</b></h5>
                    <hr />
                    <p className="card-text" id="card-textIdpara"><b>Club Email :</b> {club.email}</p>
                    <p className="card-text"><small className="text-body-secondary1"><b>Establishment :</b> {new Date(club.date).toLocaleDateString('en-GB')}</small></p>
                    <p className="card-text"><small className="text-body-secondary1"><b>President :</b> {club.president}</small></p>
                  
                    
                    </div>
                </div>
              </div>
            </div> 
          </div>
        ))}
        </div>



                {/* <div class="card-content">
                    <h2>Channel Title</h2>
                    <p>Channel Email</p>
                    <div className="cardButtonDiv">
                        <button  > Visit Channel ▶▶</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}
