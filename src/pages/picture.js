import React from 'react';

const Picture = (props) =>
{

  return(
    <div class="image">
      <img style={{width:"40%", height:"80vh", "margin-right":"40px"}} src={props.data}/>
    </div>
  )
}

export default Picture;
