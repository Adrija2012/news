import React, {useEffect, useState} from 'react'
import CardOne from './CardOne'
import Header from './Header'
export default function Cards() {
 const[news, setNews] = useState([])
    function loadNews(){
fetch("https://newsapi.org/v2/everything?q=movies&apiKey=c145f06e5cb84481a077d36adaa82a63")
.then((data)=>data.json()).then((coolNewsData)=> setNews(coolNewsData.articles) )
    }
    useEffect(()=> loadNews(), [])

    function searchNews(whatNews){
    fetch(`https://newsapi.org/v2/everything?q=${whatNews}&apiKey=c145f06e5cb84481a077d36adaa82a63`)
        .then((data)=>data.json()).then((coolNewsData)=> setNews(coolNewsData.articles) )
    }
    function languageChange(whatLanguage){
      fetch(`https://newsapi.org/v2/everything?q=music&language=${whatLanguage}&apiKey=c145f06e5cb84481a077d36adaa82a63`).then((languageData)=>languageData.json()).then((finalLanguage)=> setNews(finalLanguage.articles))
    }
  return (
   <div>
<Header getNews= {searchNews} languageDeterminer= {languageChange}/>
    <div className='row'>
   {
    news.map((item)=> <CardOne image= {item.urlToImage} title= {item.title} description= {item.description} url= {item.url} date= {item.publishedAt}/>)
   }
    </div>
    </div>
  )
} 
