import React from 'react';
import articles from './article-detail';
import {Link} from 'react-router-dom';

class Articlelist extends React.Component{
  render(){
    return(
      <>
      <div className="articlelist">
      {articles.map((article, key)=>(
        <div class="flexelement">
        <Link key={key} to={`/blog/${article.name}`}><h2>{article.title}</h2></Link>
        <p>{article.content[0].substring(0, 200)}....</p><h4>Author : {article.author}</h4>
        </div>
      ))}


      </div>
      </>
    )
  }
}

export default Articlelist;
