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
  height: "100%"
};
const Map = () => {
  const [info, setInfo] = useState(null);
  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: 60.287781, lng: 24.854378 }}
    >
      <Marker
        position={{ lat: 60.287781, lng: 24.854378 }}
        onClick={() => {
          setInfo("My Home Town");
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
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBd_vWEUxG7BSwxFbGCkVYS5qlcGdZdXgs`}
      loadingElement={<div style={{ height: `10%` }} />}
      containerElement={<div style={{ height: `200px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  </div>
);
export default GoogleMaps;
