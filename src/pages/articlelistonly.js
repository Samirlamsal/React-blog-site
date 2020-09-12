import React from 'react'
import {Link} from 'react-router-dom'

const Articlelistonly = ({articles}) =>
{
  return(


      articles.map((article, key)=>(
      <div>
      <Link key={key} to={`/blog/${article.name}`}>{article.title}</Link>
      </div>
    )
  ))
}




export default Articlelistonly;
