import React from 'react'
import '../style/BrowseNewsPage.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function BrowseNewsPage() {

  const [articles, setArticles] = useState([]);
  const apiKey = 'd39fa5245db94048a0520c17a5661098'; // Replace with your actual API key
  const navigate=useNavigate();
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className='bodyBroseNewsPage'>
      <div className="NavigatingButtonsBrowseNewsPage">
        <div className="innerNavigatingButtonsBrowseNewsPage">
          <div className="innerNavigatingButtonsBrowseNewsPagebuttonDiv">
            <button onClick={()=>navigate("/browsenewspage")}>See Global News</button>
            <button onClick={()=>navigate("/channelwisenewspage")}>See Channel Wise</button>
          </div>
        </div>
      </div>
      <div className="App">
        <div className="news-container">
          {articles.map((article, index) => (
            <div key={index} className="news-article">
              <div class="card">
              <img src={article.urlToImage} alt="image not available" />
                <div class="card-content">
                  <h2>{article.title}</h2>
                  <p>{article.description}</p>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
