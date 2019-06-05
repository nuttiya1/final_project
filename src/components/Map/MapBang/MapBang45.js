import _ from "lodash";
import React from "react";
import Axios from 'axios';
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, TrafficLayer, Polyline, InfoWindow } from "react-google-maps";

const url="http://127.0.0.1:5000/traval_time/des=bangpo";

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
      <GoogleMap defaultZoom={15} defaultCenter={{ lat: 13.8138455, lng: 100.5138012 }}>
    
        <Marker position={{ lat: 13.818851, lng: 100.5138 }} onClick={props.onToggleOpen1}>
          {props.isOpen1 && <InfoWindow >
            <h6> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ </h6>
          </InfoWindow>}
        </Marker>
        <Marker defaultVisible={false} position={{ lat: 13.814555, lng: 100.521 }} onClick={props.onToggleOpen2}>
          {props.isOpen2 && <InfoWindow >
            <p> {this.state.time_drive} 25 นาที </p>
          </InfoWindow>}
        </Marker>
        <Marker position={{ lat: 13.806172, lng: 100.5215 }} onClick={props.onToggleOpen3}>
          {props.isOpen3 && <InfoWindow >
            <h6> สถานีบางโพ </h6>
          </InfoWindow>}
        </Marker>
        
        <Polyline 
          path={[{ lat: 13.81878, lng: 100.5138 }, { lat: 13.818443, lng: 100.514888 }, { lat: 13.818289, lng: 100.515065 }, { lat: 13.818121, lng: 100.515151 }, { lat: 13.817971, lng: 100.515172 }]}
          options={{
            strokeColor: "yellow",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        <Polyline 
          path={[{ lat: 13.817971, lng: 100.515172 }, { lat: 13.817696, lng: 100.515085 }, { lat: 13.817, lng: 100.514739 }, { lat: 13.816841, lng: 100.514701 }, { lat: 13.816462, lng: 100.514705 }, { lat: 13.816349, lng: 100.514731 }]}
          options={{
            strokeColor: "green",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        <Polyline 
          path={[{ lat: 13.816349, lng: 100.514731 }, { lat: 13.816154, lng: 100.514797 }, { lat: 13.815945, lng: 100.514937 }, { lat: 13.815762, lng: 100.515102 }, { lat: 13.815592, lng: 100.515324 }]}
          options={{
            strokeColor: "yellow",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        <Polyline 
          path={[{ lat: 13.815592, lng: 100.515324 }, { lat: 13.81521, lng: 100.51608 }, { lat: 13.815041, lng: 100.516302 }, { lat: 13.81487, lng: 100.516503 }]}
          options={{
            strokeColor: "red",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        <Polyline 
          path={[{ lat: 13.81487, lng: 100.516503 }, { lat: 13.813879, lng: 100.517412 }, { lat: 13.813774, lng: 100.5176 }, { lat: 13.813765, lng: 100.51777 }, { lat: 13.814524, lng: 100.520093 }]}
          options={{
            strokeColor: "green",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        <Polyline 
          path={[{ lat: 13.814524, lng: 100.520093 }, { lat: 13.814747, lng: 100.520902 }]}
          options={{
            strokeColor: "yellow",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        <Polyline 
          path={[{ lat: 13.814747, lng: 100.520902 }, { lat: 13.814727, lng: 100.520992 }, { lat: 13.814676, lng: 100.521037 }, { lat: 13.813456, lng: 100.521405 }, 
            { lat: 13.813243, lng: 100.521408 }]}
          options={{
            strokeColor: "green",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        <Polyline 
          path={[{ lat: 13.813243, lng: 100.521408 }, { lat: 13.813, lng: 100.521483 }, { lat: 13.812219, lng: 100.521742 }, { lat: 13.811809, lng: 100.521794 }]}
          options={{
            strokeColor: "yellow",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        <Polyline 
          path={[{ lat: 13.811809, lng: 100.521794 }, { lat: 13.811368, lng: 100.521807 }, { lat: 13.810084, lng: 100.521745 }, { lat: 13.80935, lng: 100.521711 }, { lat: 13.809088, lng: 100.521673 }, { lat: 13.808737, lng: 100.521645 }, { lat: 13.808491, lng: 100.521649 }]}
          options={{
            strokeColor: "yellow",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        <Polyline 
          path={[{ lat: 13.808491, lng: 100.521649 }, { lat: 13.8062, lng: 100.521569 }]}
          options={{
            strokeColor: "yellow",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        {/* -------------------------------- bangpo 37 ---------------------------------- */}
      </GoogleMap>
      
    ));

    return (
      <MyMapComponent />
    )
  }
}

export default MyFancyComponent;
