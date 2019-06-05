import _ from "lodash";
import React from "react";
import Axios from 'axios';
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow } from "react-google-maps";

const url="http://127.0.0.1:5000/traval_time/des=wongsawang";

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
      
      <GoogleMap defaultZoom={15} defaultCenter={{ lat: 13.8258455, lng: 100.5138012 }}>
    
        <Marker position={{ lat: 13.818851, lng: 100.5138 }} onClick={props.onToggleOpen1}>
          {props.isOpen1 && <InfoWindow >
            <h6> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ </h6>
          </InfoWindow>}
        </Marker>
        <Marker defaultVisible={false} position={{ lat: 13.822809, lng: 100.522328 }} onClick={props.onToggleOpen2}>
          {props.isOpen2 && <InfoWindow >
            <p> {this.state.time_drive} 10 นาที </p>
          </InfoWindow>}
        </Marker>
        <Marker position={{ lat: 13.82972, lng: 100.5266 }} onClick={props.onToggleOpen3}>
          {props.isOpen3 && <InfoWindow >
            <h6> สถานีวงศ์สว่าง </h6>
          </InfoWindow>}
        </Marker>
    
        <Polyline 
          path={[{ lat: 13.81878, lng: 100.5138 }, { lat: 13.81843, lng: 100.515 }, { lat: 13.81807, lng: 100.5155 }]}
          options={{
            strokeColor: "yellow",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />

<Polyline 
          path={[{ lat: 13.81807, lng: 100.5155 }, { lat: 13.81772, lng: 100.5158 }, { lat: 13.81753, lng: 100.51598 }, 
            { lat: 13.81745, lng: 100.51615 }, { lat: 13.817445, lng: 100.51631 }, { lat: 13.81749, lng: 100.516465 }]}
          options={{
            strokeColor: "green",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        
        <Polyline 
          path={[{ lat: 13.81749, lng: 100.516465 }, { lat: 13.819439, lng: 100.518740 },{ lat: 13.81976, lng: 100.518852}]}
          options={{
            strokeColor: "green",
            strokeOpacity: 1,
            strokeWeight: 3
        }}
        />
        <Polyline 
          path={[{ lat: 13.81976, lng: 100.518852 }, { lat: 13.822128, lng: 100.521489 }]}
          options={{
            strokeColor: "green",
            strokeOpacity: 1,
            strokeWeight: 3
        }}
        />
        <Polyline 
          path={[{ lat: 13.822128, lng: 100.521489 }, { lat: 13.825783, lng: 100.5255 }]}
          options={{
            strokeColor: "green",
            strokeOpacity: 1,
            strokeWeight: 3
        }}
        />
        <Polyline 
          path={[{ lat: 13.825783, lng: 100.5255 }, { lat: 13.82835, lng: 100.5283 }]}
          options={{
            strokeColor: "yellow",
            strokeOpacity: 1,
            strokeWeight: 3
        }}
        />
        <Polyline 
          path={[{ lat: 13.82835, lng: 100.5283 }, { lat: 13.82972, lng: 100.5266 }]}
          options={{
            strokeColor: "green",
            strokeOpacity: 1,
            strokeWeight: 3
        }}
        />
        {/* -------------------------------- wongsawang 12---------------------------------- */}
    
      </GoogleMap>
      
    ));

    return (
      <MyMapComponent />
    )
  }
}

export default MyFancyComponent;
