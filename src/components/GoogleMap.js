import React, { useState } from "react";

import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

const mapStyles = {
  width: "100%",
  height: "100%",
  marginTop: "40px",
  paddingBottom: "20px"
};

const Map = () => {
  const [info, setInfo] = useState(null);

  return (
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 60.287781, lng: 24.854378 }}
    >
      <Marker
        position={{ lat: 60.287781, lng: 24.854378 }}
        onClick={() => {
          setInfo("Tammistonkatu 23");
        }}
      />

      {info && (
        <InfoWindow
          position={{ lat: 60.287781, lng: 24.854378 }}
          onCloseClick={() => {
            setInfo(null);
          }}
        >
          <div>{info}</div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GoogleMaps = () => (
  <div style={mapStyles}>
    <WrappedMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_API_KEY}`}
      loadingElement={<div style={{ height: `10%` }} />}
      containerElement={<div style={{ height: `200px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
);
export default GoogleMaps;
