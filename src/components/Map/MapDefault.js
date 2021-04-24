import _ from "lodash";
import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const show_time = 0;
class MyFancyComponent extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {isMarkerShown: false};
  }

  render() {

    const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyD7NoheJDuuksn2EkouZmBED4NsMWw42VY=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `690px`}} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(() => ({
    isOpen: true,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  withScriptjs,
  withGoogleMap,
  
)(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 13.8188455, lng: 100.5138012 }} >

    <Marker position={{ lat: 13.818851, lng: 100.5138 }} onClick={props.onToggleOpen}>
      {props.isOpen && <InfoWindow >
        <h6> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ </h6>
      </InfoWindow>}
    </Marker>

  </GoogleMap>
));

    return (
      <MyMapComponent />
    )
  }
}

export default MyFancyComponent;
