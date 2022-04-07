import React from 'react'
import styled from 'styled-components';
import girlMusic from "../assets/girl-music.jpg";
import Sun from "../assets/sun.svg";
import Moon from "../assets/moon.svg"
const TopBar = () => {
  return (
    <Wrapper>
    <div className='something'> 
    </div>
    <div className='topbar-title'> 
        <h1>Your favourite tunes</h1>
        <h2>All <span><img style = {{ position:"relative", top: "6px"}} src = {Sun}/></span> and all <span><img style = {{position:"relative", top: "6px"}} src= {Moon}/></span></h2>        
    </div>
    </Wrapper>
  )
}

export default TopBar;

const Wrapper = styled.div `
height: 23vh;
width : 80%
position: absolute; 
top : 0;
right: 0;
background: #FFB5A7;

.something { 
    background-image: url("https://static.vecteezy.com/system/resources/previews/003/429/410/original/girl-listening-music-on-headphones-free-vector.jpg");
    background-repeat:no-repeat;
    background-size:contain;
    height:23vh;
    width:1200px;
    position: absolute;
    top : 0;
    left: 10%;
}

.topbar-title { 
    position : absolute;
    right: 40px;
    top : 20px;
}

.topbar-title h1 { 
color :white;
font-weight : 400;
}

.topbar-title h2 { 
    color :white;
    font-weight : 400;
    position: relative;
    float:right;
    bottom:20px;
    }

    .subTitle h2{ 
        float: right;
        position: absolute;
        right: 0px;
    }
//responsive 

@media only screen and (max-width: 1000px) { 
    
    .something { 
        width : 0px;
    }
    height: 180px;
    .topbar-title { 
        position : absolute;
        right: 5%;
        top : 24px;
    }

    .topbar-title h1 { 
        color :white;
        font-weight : 600;
        font-size: 30px;
        }
        .topbar-title h2{
            position: absolute;
            bottom:1%;
            top:60%;
            left: 0;
            font-weight : 600;
        }
}
`
