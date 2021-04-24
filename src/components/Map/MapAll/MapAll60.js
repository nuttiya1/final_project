import _ from "lodash";
import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline, InfoWindow } from "react-google-maps";

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
    isOpen1: false,
    isOpen2: true,
    isOpen3: true,
    isOpen4: true,
    isOpen5: true,
    isOpen6: true,
    isOpen7: true
  }), {
    onToggleOpen1: ({ isOpen1 }) => () => ({
      isOpen1: !isOpen1
    }),
    onToggleOpen2: ({ isOpen2 }) => () => ({
      isOpen2: !isOpen2
    }),
    onToggleOpen3: ({ isOpen3 }) => () => ({
      isOpen3: !isOpen3
    }),
    onToggleOpen4: ({ isOpen4 }) => () => ({
      isOpen4: !isOpen4
    }),
    onToggleOpen5: ({ isOpen5 }) => () => ({
      isOpen5: !isOpen5
    }),
    onToggleOpen6: ({ isOpen6 }) => () => ({
      isOpen6: !isOpen6
    }),
    onToggleOpen7: ({ isOpen7 }) => () => ({
      isOpen7: !isOpen7
    })
  }),
  withScriptjs,
  withGoogleMap,
  
)(props => (
  <GoogleMap
    defaultZoom={14}
    defaultCenter={{ lat: 13.8188455, lng: 100.5038012 }} >

    <Marker position={{ lat: 13.818851, lng: 100.5138 }} onClick={props.onToggleOpen}>
      {props.isOpen && <InfoWindow >
        <h6> มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ </h6>
      </InfoWindow>}
    </Marker>

    <Marker defaultVisible={false} position={{ lat: 13.822809, lng: 100.522328 }} onClick={props.onToggleOpen4}>
          {props.isOpen4 && <InfoWindow >
            <p> {this.state.time_drive} นาที </p>
          </InfoWindow>}
        </Marker>
        <Marker position={{ lat: 13.82972, lng: 100.5266 }} onClick={props.onToggleOpen5}>
          {props.isOpen5 && <InfoWindow >
            <h6> สถานีวงศ์สว่าง </h6>
          </InfoWindow>}
        </Marker>
    
        <Polyline 
          path={[{ lat: 13.81878, lng: 100.5138 }, { lat: 13.81843, lng: 100.515 }, { lat: 13.81807, lng: 100.5155 }, { lat: 13.81772, lng: 100.5158 }, { lat: 13.81753, lng: 100.51598 }, 
            { lat: 13.81745, lng: 100.51615 }, { lat: 13.817445, lng: 100.51631 }, { lat: 13.81749, lng: 100.516465 }]}
          options={{
            strokeColor: "Green",
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
            strokeColor: "Green",
            strokeOpacity: 1,
            strokeWeight: 3
        }}
        />
        <Polyline 
          path={[{ lat: 13.822128, lng: 100.521489 }, { lat: 13.825783, lng: 100.5255 }]}
          options={{
            strokeColor: "Green",
            strokeOpacity: 1,
            strokeWeight: 3
        }}
        />
        <Polyline 
          path={[{ lat: 13.825783, lng: 100.5255 }, { lat: 13.82835, lng: 100.5283 }]}
          options={{
            strokeColor: "Green",
            strokeOpacity: 1,
            strokeWeight: 3
        }}
        />
        <Polyline 
          path={[{ lat: 13.82835, lng: 100.5283 }, { lat: 13.82972, lng: 100.5266 }]}
          options={{
            strokeColor: "Green",
            strokeOpacity: 1,
            strokeWeight: 3
        }}
        />
        {/* -------------------------------- wongsawang 12---------------------------------- */}

        <Marker defaultVisible={false} position={{ lat: 13.814555, lng: 100.521 }} onClick={props.onToggleOpen2}>
          {props.isOpen2 && <InfoWindow >
            <p> {this.state.time_drive} นาที </p>
          </InfoWindow>}
        </Marker>
        <Marker position={{ lat: 13.806172, lng: 100.5215 }} onClick={props.onToggleOpen3}>
          {props.isOpen3 && <InfoWindow >
            <h6> สถานีบางโพ </h6>
          </InfoWindow>}
        </Marker>
    
        <Polyline 
          path={[{ lat: 13.81878, lng: 100.5138 }, { lat: 13.818443, lng: 100.514888 }, { lat: 13.818289, lng: 100.515065 }, { lat: 13.818121, lng: 100.515151 }, { lat: 13.817971, lng: 100.515172 }, 
            { lat: 13.817696, lng: 100.515085 }, { lat: 13.817, lng: 100.514739 }, { lat: 13.816841, lng: 100.514701 }, { lat: 13.816462, lng: 100.514705 }, { lat: 13.816349, lng: 100.514731 }, 
            { lat: 13.816154, lng: 100.514797 }, { lat: 13.815945, lng: 100.514937 }, { lat: 13.815762, lng: 100.515102 }, { lat: 13.815592, lng: 100.515324 }, { lat: 13.81521, lng: 100.51608 }, 
            { lat: 13.815041, lng: 100.516302 }, { lat: 13.81487, lng: 100.516503 }, { lat: 13.813879, lng: 100.517412 }, { lat: 13.813774, lng: 100.5176 }, { lat: 13.813765, lng: 100.51777 }, 
            { lat: 13.814524, lng: 100.520093 }, { lat: 13.814747, lng: 100.520902 }, { lat: 13.814727, lng: 100.520992 }, { lat: 13.814676, lng: 100.521037 }, { lat: 13.813456, lng: 100.521405 }, 
            { lat: 13.813243, lng: 100.521408 }, { lat: 13.813, lng: 100.521483 }, { lat: 13.812219, lng: 100.521742 }, { lat: 13.811809, lng: 100.521794 }, { lat: 13.811368, lng: 100.521807 }, 
            { lat: 13.810084, lng: 100.521745 }, { lat: 13.80935, lng: 100.521711 }, { lat: 13.809088, lng: 100.521673 }, { lat: 13.808737, lng: 100.521645 }, { lat: 13.808491, lng: 100.521649 }, 
            { lat: 13.8062, lng: 100.521569 }]}
          options={{
            strokeColor: "green",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        {/* -------------------------------- bangpo 37 ---------------------------------- */}

        <Marker defaultVisible={false} position={{ lat: 13.836257, lng: 100.505132 }} onClick={props.onToggleOpen6}>
          {props.isOpen6 && <InfoWindow >
            <p> {this.state.time_drive} นาที </p>
          </InfoWindow>}
        </Marker>
        <Marker position={{ lat: 13.84858, lng: 100.5147 }} onClick={props.onToggleOpen7}>
          {props.isOpen7 && <InfoWindow >
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
            strokeColor: "red",
            strokeOpacity: 1,
            strokeWeight: 3
          }}
        />
        {/* -------------------------------- nakornin 30 ---------------------------------- */}

  </GoogleMap>
));

    return (
      <MyMapComponent />
    )
  }
}

export default MyFancyComponent;
