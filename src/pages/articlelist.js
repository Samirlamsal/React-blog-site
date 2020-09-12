import React from 'react';
import articles from './article-detail';
import {Link} from 'react-router-dom';

class Articlelist extends React.Component{
  render(){
    return(
      <div className="content">
      <h1>Article list</h1>
      {articles.map((article, key)=>(
        <div>
        <Link key={key} to={`/blog/${article.name}`}>{article.title}</Link>
        <p>{article.content[0].substring(0, 350)}....</p>
        </div>
      ))}


      </div>
    )
  }
}

export default Articlelist;
