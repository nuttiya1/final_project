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
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 13.8228455, lng: 100.5138012 }}>

    <Marker position={{ lat: 13.818851, lng: 100.5138 }} />
    <Marker position={{ lat: 13.82972, lng: 100.5266 }} />
    //
    {/* dic = {"roadname": [path, color], "roadname2" : [path2, color2]} */}
    {/* <Polyline 
      path={dic["roadname"][0]}
      options={{
        strokeColor: dic["roadname"][1],
        strokeOpacity: 1,
        strokeWeight: 3
      }}
    /> */}
    //
    <Polyline 
      path={[{ lat: 13.81878, lng: 100.5138 }, { lat: 13.81843, lng: 100.515 }, { lat: 13.81807, lng: 100.5155 }, { lat: 13.81772, lng: 100.5158 }, { lat: 13.81753, lng: 100.51598 }, 
        { lat: 13.81745, lng: 100.51615 }, { lat: 13.817445, lng: 100.51631 }, { lat: 13.81749, lng: 100.516465 }]}
      options={{
        strokeColor: "red",
        strokeOpacity: 1,
        strokeWeight: 3
      }}
    />
    <Polyline 
      path={[{ lat: 13.81749, lng: 100.516465 }, { lat: 13.82835, lng: 100.5283 }]}
      options={{
        strokeColor: "green",
        strokeOpacity: 1,
        strokeWeight: 3
    }}
    />
    <Polyline 
      path={[{ lat: 13.82835, lng: 100.5283 }, { lat: 13.82972, lng: 100.5266 }]}
      options={{
        strokeColor: "red",
        strokeOpacity: 1,
        strokeWeight: 3
    }}
    />
    {/* -------------------------------- wongsawang 12---------------------------------- */}

  </GoogleMap>
  
));

const enhance = _.identity;
export default enhance(MyMapComponent);
