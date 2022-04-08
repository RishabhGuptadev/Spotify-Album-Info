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

  const token = localStorage.setItem("token", "BQB0sY5hi5H9R0VM9SHaOru9LtREAk9GfEL-9yYKxQ1yKPA_k_hqiJkHvDiTOmtNZhiPVqKcTNcKCuxvwLczd6s-lSO87B_kKRatARCnSJE-qcyAFk9FesYiyt3l8gpKHPsmp6JPTIQRRpNthlKAMnM4g9xTPjH8wLY");

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
