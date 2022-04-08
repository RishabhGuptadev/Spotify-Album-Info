import React, { useState } from 'react'
import styled from 'styled-components'
export default function TitleBar({title}) {
    
  return (
      <div>
      <Wrapper>

      <p>{title} </p>
      <hr/>
      </Wrapper>  
      </div> 
    
  )
}

const Wrapper = styled.div`
margin : 10px 0px 0px 20px;
width: 80vw;
p {
    float:left; 
    color: #BABAC3;
} 
hr { 
    position: relative;
    top: 27px;
    left : 10px;
}
@media only screen and (max-width: 1000px) { 
    width:80%;
    font-weight: 800;
    margin : 10% 0px 0px 14%;
    hr { 
        position: relative;
        top: 27px;
        margin-right: 320px;
        width: 10px;
    }
}
` 

