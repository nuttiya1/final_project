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
  <GoogleMap defaultZoom={16} defaultCenter={{ lat: 13.8188455, lng: 100.5138012 }}>

    <Marker position={{ lat: 13.818851, lng: 100.5138 }} />

  </GoogleMap>
  
));

const enhance = _.identity;
export default enhance(MyMapComponent);
