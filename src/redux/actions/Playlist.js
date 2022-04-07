import types from "../types"
import axios from "axios";

const token = localStorage.getItem("token");

export const getAllPlaylist = () => async (dispatch) => {
  dispatch({type: types.GET_NEW_RELEASE_REQUEST}); 
  await axios({
      method : "GET",
      url : "https://api.spotify.com/v1/browse/new-releases", 
      headers: {"Authorization" : `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  }).then((res)=>{
      console.log("response data", res.data);
     dispatch({type: types.GET_NEW_RELEASE_SUCCESS, payload: res.data.albums.items}); 
  }).catch((error)=>{
      console.log(error.response.data.error);
  })
}   

export const getAllFeaturePlaylist = () => async(dispatch) => {
    dispatch({type: types.GET_FEATURED_LIST_REQUEST}); 
    await axios({
        method : "GET",
        url : "https://api.spotify.com/v1/browse/featured-playlists", 
        headers: {"Authorization" : `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }).then((res)=>{
        console.log("responsefff data", res.data);
       dispatch({type: types.GET_FEATURED_LIST_SUCCESS, payload: res.data.playlists.items}); 
    }).catch((error)=>{
        console.log(error.response);
    })
}

export const getBrowseGenres = () => async(dispatch) => {
    dispatch({type: types.GET_BROWSE_GENRES_REQUEST}); 
    await axios({
        method : "GET",
        url : "https://api.spotify.com/v1/browse/categories", 
        headers: {"Authorization" : `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    }).then((res)=>{
        console.log("responsebb data", res.data);
       dispatch({type: types.GET_BROWSE_GENRES_SUCCESS, payload: res.data.categories.items}); 
    }).catch((error)=>{
        console.log(error.response);
    })
}