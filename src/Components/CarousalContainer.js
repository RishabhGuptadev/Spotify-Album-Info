import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import ItemsCarousel from 'react-items-carousel';
let x= 0;
let shift = 0;
export default function CarousalContainer({data, type}) {
    let width = window.screen.availWidth;
    const setResizeFun = () => {
        width = window.screen.availWidth;
    }

    window.addEventListener('resize', setResizeFun());

    // useEffect(()=>{
    //     if (width < 600) { 
    //         window.location.reload();
    //     }
    // }, [width]);

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 20;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
    <ItemsCarousel
      requestToChangeActive={setActiveItemIndex}
      activeItemIndex={activeItemIndex}
      numberOfCards={width > 1100 ? 11.5 : 1}
      gutter={1}
      leftChevron={<LeftButton className= {`${type === "feature-list" && "feature-style" }`}>{'<'}</LeftButton>}
      rightChevron={<RightButton className='chevron-right'>{'>'}</RightButton>}
      outsideChevron
      chevronWidth={chevronWidth}
    >
    {data.map((item)=> {
        if (type === "browse-list") { 
            return (
                <Wrapper > 
                    <img  src={item.icons[0].url}/> 
                    <p>{item.name}</p>
                </Wrapper>            
            )
        }
        return (
            <Wrapper > 
                <img  src={item.images[0].url}/> 
                <p>{item.name}</p>
            </Wrapper>            
        )
    })}
    </ItemsCarousel>
  </div>
  )
}

const Wrapper = styled.div`

height: 200px;
img { 
    height: 100px;
}
@media only screen and (max-width: 1000px) { 
    img {
        height: 150px;
        width:150px;
    }
    p {
        font-size: 20px;
    }
}
`

const LeftButton = styled.button`
padding: 10px;
font-size: 20px;
cursor: pointer;
background:transparent;
border: none;
position : absolute;
left: 82vw;
bottom: 83%;
color: blue;
font-weight: 700;

@media only screen and (max-width: 1000px) { 
    position: absolute;
    top: -7px;
    left:67vw;
    font-size: 28px;
}
`

const RightButton = styled.button`
padding: 10px;
font-size: 20px;
cursor: pointer;
background:transparent;
border: none;
position : absolute;
bottom: 11.83vw;
right: 3vw;
color: blue;
font-weight: 700;
@media only screen and (max-width: 1000px) { 
    position : absolute;
    bottom: 81.6%;
    right:130%;
    font-size: 28px;
}
`