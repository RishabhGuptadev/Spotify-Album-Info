import React, {useState} from "react";
import styled from "styled-components";
import headphones from "../assets/headphones.svg"
import search from "../assets/search.svg" 
import heart from "../assets/heart.svg"
import playCircle from "../assets/play-circle.svg";
import menu from "../assets/menu.svg";
const colorPallete = {
  color: "#FFB5A7", //topbar pink
  color2: "FEFCFB", //white on top bar
};

const navItems = [{ id: 1, title: "Discover", icon: headphones}, 
 {id : 2, title: "Search", icon : search }, 
 {id : 3, title: "Favourites", icon : heart }, 
 {id : 4, title: "Playlists", icon : playCircle },
 {id : 5, title: "Charts", icon : menu }

];
const SideBar = () => {
  const [active, setActive] = useState(1);
  return (
    <Wrapper>
      <div>
        <div className="image-style">
        <img
        src="https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png"
        alt="user image"
      />
          <p>Bob Smith</p>
        </div>
        <div>
          {navItems.map((item)=> {
            return(
              <div key = {item.id}>
                <button onClick= {()=>setActive(item.id)} className={`nav-btn ${active === item.id && "active" }`}><span><img src = {item.icon}/></span>{item.title}</button>
              </div> 
            )
          })}
        </div> 
      </div>
    </Wrapper>
  );
};
export default SideBar;

const Wrapper = styled.div`
  position: fixed;
  top: 0px;
  height: 100vh;
  width: 10%;
  background: #574fd8;
  
  .image-style {
    margin-top: 30px;
  }
  .image-style img {
    height: 40px;
    width: 40px;
  }

  .image-style p { 
    color :white;
  }

  .nav-btn{
    width: 100%;
    display: flex;
    align-items: center;
    color: white;
    background: transparent;
    border : none;
    cursor : pointer;
    padding: 17px 0px;
    margin: 0px auto;
  }

  .nav-btn span { 
    margin: 0px 14px 0px 27px;
  }

  .active { 
    background-image: linear-gradient(to right, rgb(255,255,255,0.2), rgb(87,79,216,1));
    opacity: 1;
    width: 100%
  }
  @media only screen and (max-width: 1000px) { 
    width: 18%;
    .image-style {
      margin-top: 70px;
    }
    .image-style p{ 
      color: #574fd8;
    }
    .nav-btn{
      margin-bottom: 25%;
    }
    .nav-btn span { 
      margin: 0px 10px 0px 22px;
    }
    .nav-btn {
      font-size:0px;
    }
  }
  }
`;
