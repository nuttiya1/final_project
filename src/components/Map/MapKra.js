import _ from "lodash";
import React from "react";
import Axios from 'axios';
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow } from "react-google-maps";

const url="http://127.0.0.1:5000/traval_time/des=krathungsataranasuk";

class MyFancyComponent extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {time_drive: '',
                  isMarkerShown: false};
  }
  
  componentDidMount () {
    Axios.get(url)
      .then(res => {
        const time_drive = res.data;
        console.log("receive time: ",time_drive.time)
        this.setState({time_drive: time_drive.time})
      })
      .catch(error => {
        console.log('Oops...')
      })
  }

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
        isOpen1: false,
        isOpen2: true,
        isOpen3: true
      }), {
        onToggleOpen1: ({ isOpen1 }) => () => ({
          isOpen1: !isOpen1
        }),
        onToggleOpen2: ({ isOpen2 }) => () => ({
          isOpen2: !isOpen2
        }),
        onToggleOpen3: ({ isOpen3 }) => () => ({
          isOpen3: !isOpen3
        })
      }),
      withScriptjs,
      withGoogleMap,
      
    )(props => (
      <GoogleMap defaultZoom={14} defaultCenter={{ lat: 13.84, lng: 100.5138012 }}>
    
        <Marker position={{ lat: 13.818851, lng: 100.5138 }} onClick={props.onToggleOpen1} >
          {props.isOpen1 && <InfoWindow >
            <h6> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ </h6>
          </InfoWindow>}
        </Marker>
        <Marker defaultVisible={false} position={{ lat: 13.836257, lng: 100.505132 }} onClick={props.onToggleOpen2}>
          {props.isOpen2 && <InfoWindow >
            <p> {this.state.time_drive} นาที </p>
          </InfoWindow>}
        </Marker>
        <Marker position={{ lat: 13.84858, lng: 100.5147 }} onClick={props.onToggleOpen3}>
          {props.isOpen3 && <InfoWindow >
            <h6> สถานีกระทรวงสาธารณสุข </h6>
          </InfoWindow>}
        </Marker>
    
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

    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}

export default MyFancyComponent;
