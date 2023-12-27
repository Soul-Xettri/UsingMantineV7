import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindow,
} from "@react-google-maps/api";
import classes from "./Map.module.css";
import { useState } from "react";

const center = { lat: 28.2043, lng: 83.96683 };
const marker = { lat: 28.20427, lng: 83.966824 };
export default function Map() {
  const [selectedMarker, setSelectedMarker] = useState<{
    lat: number;
    lng: number;
  } | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  //   const customMarkerIcon = {
  //     url: "https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", // Replace with your custom marker icon URL
  //     scaledSize: new window.google.maps.Size(30, 30), // Adjust the size as needed
  //     anchor: new window.google.maps.Point(15, 30), // Adjust the anchor position to center the marker
  //   };
  return (
    <GoogleMap
      zoom={19.6}
      center={center}
      mapContainerClassName={classes.mapContainer}
    >
      <MarkerF
        position={marker}
        // icon={customMarkerIcon}
        onClick={() => {
          // Check if InfoWindow is already open
          if (!selectedMarker) {
            setSelectedMarker(marker);
          }
        }}
      />

      {selectedMarker && (
        <InfoWindow
          position={{ lat: 28.20431, lng: 83.966824 }}
          zIndex={-1}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div>New Pokhara Lodge</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

// import { useState } from "react";
// import { GoogleMap, InfoWindow, MarkerF, useLoadScript } from "@react-google-maps/api";

// const markers = [
//   {
//     id: 1,
//     name: "Chicago, Illinois",
//     position: { lat: 28.20429, lng: 83.966824 }
//   },
// //   {
// //     id: 2,
// //     name: "Denver, Colorado",
// //     position: { lat: 39.739235, lng: -104.99025 }
// //   },
// //   {
// //     id: 3,
// //     name: "Los Angeles, California",
// //     position: { lat: 34.052235, lng: -118.243683 }
// //   },
// //   {
// //     id: 4,
// //     name: "New York, New York",
// //     position: { lat: 40.712776, lng: -74.005974 }
// //   }
// ];

// function Map() {
//   const [activeMarker, setActiveMarker] = useState(null);

//   const handleActiveMarker = (marker:any) => {
//     if (marker === activeMarker) {
//       return;
//     }
//     setActiveMarker(marker);
//   };
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyAeMTiA7aLP9lOyLq_bozO9SMjjLsppkF8",
//   });
//     if (!isLoaded) {
//     return <div>Loading...</div>;
//   }
//   const handleOnLoad = (map:any) => {
//     const bounds = new google.maps.LatLngBounds();
//     markers.forEach(({ position }) => bounds.extend(position));
//     map.fitBounds(bounds);
//   };

//   return (
//     <GoogleMap
//       onLoad={handleOnLoad}
//       onClick={() => setActiveMarker(null)}
//       mapContainerStyle={{ width: "100vw", height: "100vh" }}
//     >
//       {markers.map(({ id, name, position }) => (
//         <MarkerF
//           key={id}
//           position={position}
//           onClick={() => handleActiveMarker(id)}
//         >
//           {activeMarker === id ? (
//             <InfoWindow onCloseClick={() => setActiveMarker(null)}>
//               <div>{name}</div>
//             </InfoWindow>
//           ) : null}
//         </MarkerF>
//       ))}
//     </GoogleMap>
//   );
// }

// export default Map;
