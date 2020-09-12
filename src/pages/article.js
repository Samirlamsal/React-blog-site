import React from 'react';
import articles from './article-detail';
import Articlelistonly from './articlelistonly'

const Article = ({match}) =>{
  const name = match.params.name;
  const article = articles.find(article=>article.name===name);
  const otherarticles = articles.filter(article=> article.name !== name);

  return(
    <div class="content">
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key)=>(
        <p key={key}>{paragraph}</p>
      ))}
      <h1>Other Articles</h1>
      <Articlelistonly articles={otherarticles}/>
    </div>

  )
}

export default Article;
