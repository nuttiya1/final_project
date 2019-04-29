import _ from "lodash";
import React from "react";
import Axios from 'axios';
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps";

const url="http://127.0.0.1:5000/traval_time/des=wongsawang";
const show_time = 0;
class MyFancyComponent extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {time_drive: '',
                  isMarkerShown: false};
  }
  componentDidMount () {
    //this.delayedShowMarker()
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

  // delayedShowMarker = () => {
  //   setTimeout(() => {
  //     this.setState({ isMarkerShown: true })
  //   }, 3000)
  // }

  // handleMarkerClick = () => {
  //   this.setState({ isMarkerShown: false })
  //   this.delayedShowMarker()
  // }

  render() {

    const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBcAqqzyYL6pWtH1HdJfLEhLzKjwUHU1Os&v=3.exp&libraries=geometry,drawing,places",
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
        {/* <p> {this.state.time_drive} นาที </p> */}
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