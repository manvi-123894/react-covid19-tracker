import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {FaArrowCircleLeft, FaArrowRight} from "react-icons/fa"
import Loading from "./Loading"
import "./News.css"


const News = ({countries}) => {

 const [loading,setLoading] = useState(true); 
 const [news, setNews] = useState([]);
 

 const fetchNews = async (url) => {
    const response = await fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "x-rapidapi-key": "dfbaccc57bmshc11da43182dc640p13d380jsncf0b436ae7d7",
        "x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
        "useQueryString": true
      }
    });
    const data = await response.json();
    
    const newsArr = data.news.map( (item,index ) => {
        const url =  item.images ?  item.images[0].url : ""

      return {
        title : item.title,
        excerpt : item.excerpt,
        originalUrl : item.originalUrl,
        image : url
      }
    })
    setLoading(false);
    setNews(newsArr);
  }

  useEffect(()=>{
    // fetchNews("https://coronavirus-smartable.p.rapidapi.com/news/v1/global/");
  },[]);



 return (
  <div className="news">
    {
      loading ? <Loading /> :
       (
          <div className="news-container">
            {
                news.map((item,index) => {
                  const {title,image,originalUrl,excerpt} = item;
                  return (
                    <div key={index} className="single-news">
                        <div className="img">
                            <img src={item.image} alt="img" />
                        </div>
                        <div className="single-news-container">
                          <h3 className="news-title"> {title} </h3>
                          <p className="news-excerpt"> {excerpt} </p>
                          <div className="full-article">
                            <a target="_blank" href={originalUrl}> Read Full Article <FaArrowRight /> </a>
                          </div> 
                        </div>
                    </div>
                  ); 
              })
            }

            <div className="back-home">
              <Link to="/" className="link">
                Back <FaArrowCircleLeft className="link-icon" />
              </Link> 
            </div>
          </div>
       )
    }
  </div>
  );
}
   
export default News;