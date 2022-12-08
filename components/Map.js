import Map, { Marker, Popup } from "react-map-gl";
import * as geolib from "geolib";
import { useState } from "react";

function Maps({ searchResults }) {

 const [selectedLocation,setSelectedLocation]=useState({})
  const [showPopup, setShowPopup] = useState(false);

  // Transform the entire obj to lat long
  const coOrdinates = searchResults.map((item) => ({
    latitude: item.lat,
    longitude: item.long,
  }));

  const coOrds = geolib.getCenter(coOrdinates);

  const locationHandler=(selecteditem)=>{
   console.log(selecteditem)
   setSelectedLocation(selecteditem)
    setShowPopup(true)
  }

  const closeHandler=()=>{
    setSelectedLocation({})
    setShowPopup(false)
  }
  console.log(showPopup)
  return (
    <Map
      MapboxAccessToken={process.env.mapbox_key}
      initialViewState={{
        latitude: coOrds.latitude,
        longitude: coOrds.longitude,
        zoom: 11,
      }}
      style={{ width: "100%", height: "100%" }}
      //    style={{width:{width},height:{height}}}
      mapStyle="mapbox://styles/sashmu/clbdsje6e003c14rrq8r2t5fy"
    >
    
      {searchResults.map((item) => (
        <div key={item.long}>
          <Marker
            longitude={item.long}
            latitude={item.lat}
            //    pitchAlignment='map'
          >
            <p
              onClick={() => locationHandler(item)}
              className="text-2xl animate-bounce cursor-pointer"
              
            >
              📌
            </p>
          </Marker>
          {/* {console.log(selectedLocation)} */}

          {/* The popup appears when pin is clicked */}
          
        </div>
      ))}
      { showPopup && 
            
            <Popup
            longitude={selectedLocation.long}
            latitude={selectedLocation.lat}
            closeOnClick={false}
            onClose={closeHandler}
            anchor="center"
              >
              {selectedLocation.title}
            </Popup>
           }
    </Map>
  );
}

export default Maps;
