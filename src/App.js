import './App.css';
import SideBar from "./Components/SideBar";
import TopBar from './Components/TopBar';
import Playlist from './Components/Playlist';
import axios from 'axios';
import { useEffect } from 'react';
import {Buffer} from "buffer";
import SpotifyWebApi from "spotify-web-api-node";
import jwt_decode from "jwt-decode";
// const spotifyApi = new SpotifyWebApi({
 
//   redirectUri: 'http://localhost:3000/'
// })
// spotifyApi.setAccessToken('BQCuU8YqmCOqdC9p9DRz6voyZ-vAdicjBrrbNGj89hhwstNug9yf7vMl1WKN4BEMu_LGFYG0dzBAgGgov97zxW9RGgWPEpN2oNVtr8lgBA8Zo_Lw5p4kcwmJ7-YUc4CtBeSt11wW0eq8sku-v9RAQuOPe2L4MlJci-8');
function App() {

  const token = localStorage.setItem("token", "BQDvICaPuUfWKDqvj59HgVQvRDUCGNyHM5_8ddaGH95G16hU-fCQ5KsdQ_0wI-_QNEPkaBlpbqS2tXiWMZ6-XVtcMx7l_GiJABkv3dy-HZ_Qd-2WHAvUGVAn-yt1N76ILhZ2BicbmiyUHG13XH5UDCHPq6NwbK-Zv3c");

  // useEffect(()=>{
  //   spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
  //     function(data) {
  //       console.log('Artist albums', data.body);
  //     },
  //     function(err) {
  //       console.error(err);
  //     }
  //   );
  // });

  return (
    <div className="App">
      <SideBar/>
      <TopBar/>
      <Playlist/>
    </div>
  );
}

export default App;
