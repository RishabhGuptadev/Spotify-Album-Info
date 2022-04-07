import './App.css';
import SideBar from "./Components/SideBar";
import TopBar from './Components/TopBar';
import Playlist from './Components/Playlist';
import axios from 'axios';
import { useEffect } from 'react';
import {Buffer} from "buffer";
import SpotifyWebApi from "spotify-web-api-node";
import jwt_decode from "jwt-decode";
const spotifyApi = new SpotifyWebApi({
  clientId : "f7d19cc8039b471d87f32ba9c5a7fdd6",
  clientSecret : "BQB9r60DXk66xyvLldr3Jh_PCK0qUUlfVrfnpPbxZtb", 
  redirectUri: 'http://localhost:3000/'
})
spotifyApi.setAccessToken('BQCuU8YqmCOqdC9p9DRz6voyZ-vAdicjBrrbNGj89hhwstNug9yf7vMl1WKN4BEMu_LGFYG0dzBAgGgov97zxW9RGgWPEpN2oNVtr8lgBA8Zo_Lw5p4kcwmJ7-YUc4CtBeSt11wW0eq8sku-v9RAQuOPe2L4MlJci-8');
function App() {

  const token = localStorage.setItem("token", "BQC2pQVNv8P3u_8NSitnr58pEtPPXKBcK-NPuf7r7n3XrNrmgDnZ8qmZbLozUivpq86wgsBEUhkG56Hd9xX3ngCSWg2cJNaSBqj4mjqWOOPRyVsDrh-NUakSxN7d2X75raCxBtk8GA-3afYwpvrg801PfN1nRLaqObo");

  useEffect(()=>{
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(
      function(data) {
        console.log('Artist albums', data.body);
      },
      function(err) {
        console.error(err);
      }
    );
  });

  return (
    <div className="App">
      <SideBar/>
      <TopBar/>
      <Playlist/>
    </div>
  );
}

export default App;
