import _ from "lodash";
import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, TrafficLayer, Polyline } from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDgGFKEyZk4AkWi-e-BbY2cOHDouvaZv74&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `690px`}} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(() => ({
    isOpen: false,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  withScriptjs,
  withGoogleMap,
  
)(props => (
  <GoogleMap defaultZoom={14.5} defaultCenter={{ lat: 13.8328455, lng: 100.5138012 }}>

    <Marker position={{ lat: 13.818851, lng: 100.5138 }} />
    <Marker position={{ lat: 13.84858, lng: 100.5147 }} />

    <Polyline 
      path={[{ lat: 13.81865, lng: 100.51375 }, { lat: 13.81983, lng: 100.5098 }, { lat: 13.82082, lng: 100.508 }, { lat: 13.8219, lng: 100.50648 }, { lat: 13.82264, lng: 100.50433 }, 
        { lat: 13.82276, lng: 100.5041 }, { lat: 13.82287, lng: 100.50398 }, { lat: 13.82312, lng: 100.50384 }, { lat: 13.82345, lng: 100.503745 }, { lat: 13.824485, lng: 100.50356 }, 
        { lat: 13.82614, lng: 100.503058 }, { lat: 13.82667, lng: 100.50285 }, { lat: 13.83427, lng: 100.49968 }, { lat: 13.834786, lng: 100.4994 }, { lat: 13.834935, lng: 100.49982 }, 
        { lat: 13.83524, lng: 100.501 }, { lat: 13.83542, lng: 100.502 }, { lat: 13.83545, lng: 100.50276 }, { lat: 13.83555, lng: 100.5033 }, { lat: 13.83577, lng: 100.504135 }, 
        { lat: 13.83609, lng: 100.504938 }, { lat: 13.836456, lng: 100.505595 }, { lat: 13.836679, lng: 100.50595 }, { lat: 13.8374, lng: 100.506813 }, { lat: 13.838057, lng: 100.50738 }, 
        { lat: 13.83933, lng: 100.508339 }, { lat: 13.844165, lng: 100.5117 }, { lat: 13.845813, lng: 100.512814 }, { lat: 13.846494, lng: 100.513231 }, { lat: 13.848618, lng: 100.514667 }]}
      options={{
        strokeColor: "orange",
        strokeOpacity: 1,
        strokeWeight: 3
      }}
    />
    {/* -------------------------------- nakornin 30 ---------------------------------- */}

  </GoogleMap>
  
));

const enhance = _.identity;
export default enhance(MyMapComponent);
