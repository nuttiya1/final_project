import _ from "lodash";
import React from "react";
import Axios from 'axios';
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, TrafficLayer, Polyline, InfoWindow } from "react-google-maps";

const show_time = 0;
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
    isOpen2: true,
  }), {
    onToggleOpen: ({ isOpen }) => () => ({
      isOpen: !isOpen
    })
  }),
  withScriptjs,
  withGoogleMap,
)(props => (
  
  <GoogleMap defaultZoom={15} defaultCenter={{ lat: 13.8228455, lng: 100.5138012 }}>

    <Marker position={{ lat: 13.818851, lng: 100.5138 }} >
      {props.isOpen2 && <InfoWindow >
        <h3>{show_time}</h3>
      </InfoWindow>}
    </Marker>
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
        strokeColor: "Red",
        strokeOpacity: 1,
        strokeWeight: 3
      }}
    />
    <Polyline 
      path={[{ lat: 13.81749, lng: 100.516465 }, { lat: 13.81976, lng: 100.518852}]}
      options={{
        strokeColor: "Green",
        strokeOpacity: 1,
        strokeWeight: 3
    }}
    />
    <Polyline 
      path={[{ lat: 13.81976, lng: 100.518852 }, { lat: 13.822128, lng: 100.521489 }]}
      options={{
        strokeColor: "Black",
        strokeOpacity: 1,
        strokeWeight: 3
    }}
    />
    <Polyline 
      path={[{ lat: 13.822128, lng: 100.521489 }, { lat: 13.825783, lng: 100.5255 }]}
      options={{
        strokeColor: "Yellow",
        strokeOpacity: 1,
        strokeWeight: 3
    }}
    />
    <Polyline 
      path={[{ lat: 13.825783, lng: 100.5255 }, { lat: 13.82835, lng: 100.5283 }]}
      options={{
        strokeColor: "Red",
        strokeOpacity: 1,
        strokeWeight: 3
    }}
    />
    <Polyline 
      path={[{ lat: 13.82835, lng: 100.5283 }, { lat: 13.82972, lng: 100.5266 }]}
      options={{
        strokeColor: "Yellow",
        strokeOpacity: 1,
        strokeWeight: 3
    }}
    />
    {/* -------------------------------- wongsawang 12---------------------------------- */}

  </GoogleMap>
  
));

const url="http://127.0.0.1:5000/traval_time/des=wongsawang";

class MyFancyComponent extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {time_drive: '',
                  isMarkerShown: false};
  }

  componentDidMount () {
    this.delayedShowMarker()
    Axios.get(url)
      .then(res => {
        const time_drive = res.data;
        console.log("receive time: ",time_drive.time)
        this.setState({time_drive: time_drive.time})
        
        console.log("a: ",this.state.time_drive)
        // alert("Total Time Drive: ", time_drive.time)
        // console.log("show time: ", this.state.time)
      })
      .catch(error => {
        console.log('Oops...')
      })
  }
  

  // componentDidMount() {
  //   this.delayedShowMarker()
  // }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyFancyComponent;
