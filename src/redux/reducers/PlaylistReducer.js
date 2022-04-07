import types from "../types";

export const PlaylistReducer = (state = {playlistType : []}, action) => {
 if (action.type === types.GET_NEW_RELEASE_REQUEST) { 
     return {...state, isLoading: true}
 }

 if (action.type === types.GET_NEW_RELEASE_SUCCESS) { 
     return {...state, newRelease: action.payload, playlistType : [...state.playlistType, "newRelease"], isLoading: false}
 }

 if (action.type === types.GET_FEATURED_LIST_REQUEST) { 
    return {...state, isLoading: true}
}

 if (action.type === types.GET_FEATURED_LIST_SUCCESS) { 
    return {...state, featureList: action.payload, playlistType : [...state.playlistType, "featureList"], isLoading: false }
}

if (action.type === types.GET_BROWSE_GENRES_REQUEST) { 
    return {...state, isLoading: true}
}

 if (action.type === types.GET_BROWSE_GENRES_SUCCESS) { 
    return {...state, browseList: action.payload, playlistType : [...state.playlistType, "browseList"], isLoading: false }
}
return {...state}
}