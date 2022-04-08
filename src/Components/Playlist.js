import React, { useEffect } from 'react'
import { getAllFeaturePlaylist, getAllPlaylist, getBrowseGenres } from '../redux/actions/Playlist'
import {useSelector, useDispatch} from "react-redux"
import TitleBar from './TitleBar';
import styled from 'styled-components';
import CarousalContainer from './CarousalContainer';
const Playlist = () => {
    const dispatch = useDispatch();
    const {featureList, browseList, newRelease, isLoading} = useSelector((state)=>state.PlaylistReducer);
    const categoriesArr = [browseList]
    useEffect(()=> {
        const fun = async() => {
        await dispatch(getAllPlaylist());
        await dispatch(getAllFeaturePlaylist());
        await dispatch(getBrowseGenres());
        }
        fun();
    }, [])

    if (isLoading) { 
        return <h4>Loading...</h4>
    }
    
    return (
    <Wrapper>
    <TitleBar title = "RELEASED THIS WEEK"/>
    {newRelease && <CarousalContainer data = {newRelease} type= "new-release"/> }
   
    <TitleBar title = "FEATURED PLAYLISTS"/>
    {featureList && <CarousalContainer type = "feature-list" data = {featureList} /> }
  
    <TitleBar title = "BROWSE"/>
    {browseList && <CarousalContainer type = "browse-list" data = {browseList} /> }
   
    </Wrapper>
  )
}

export default Playlist;

const Wrapper = styled.div`
height: 77vh;
width : 90%;
position: absolute; 
top : 23vh;
right: 0;
overflow-x: hidden;

@media only screen and (max-width: 1000px) { 
    width:82%;
    margin-bottom: 10px;
}
`