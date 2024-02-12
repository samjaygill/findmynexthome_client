
import { React} from "react";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import "./css/Map.css";

function Maps() {
    
      return (
         <div className="maps">
        <APIProvider apiKey={"AIzaSyDHF4hFKBayBk1kDwTnOwpZfdN4cGseaKg"}>
        <Map
          zoom={9}
          center={{lat: 55.610963923751164, lng: -4.498863903753501}}
          onLoad={() => console.log('Map loaded')}
        />
        <Marker position={{lat: 55.610963923751164, lng: -4.498863903753501}} />
      </APIProvider>
      </div>
      );
    };

export default Maps;
