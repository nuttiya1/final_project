import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css'
import MapDefault from './components/Map/MapDefault';
import MapAll from './components/Map/MapAll/MapAll5';
import MapWong5 from './components/Map/MapWong/MapWong5';
import MapWong15 from './components/Map/MapWong/MapWong15';
import MapWong30 from './components/Map/MapWong/MapWong30';
import MapWong45 from './components/Map/MapWong/MapWong45';
import MapWong60 from './components/Map/MapWong/MapWong60';
import MapKra5 from './components/Map/MapKra/MapKra5';
import MapKra15 from './components/Map/MapKra/MapKra15';
import MapKra30 from './components/Map/MapKra/MapKra30';
import MapKra45 from './components/Map/MapKra/MapKra45';
import MapKra60 from './components/Map/MapKra/MapKra60';
import MapBang5 from './components/Map/MapBang/MapBang5';
import MapBang15 from './components/Map/MapBang/MapBang15';
import MapBang30 from './components/Map/MapBang/MapBang30';
import MapBang45 from './components/Map/MapBang/MapBang45';
import MapBang60 from './components/Map/MapBang/MapBang60';
import MapAll5 from './components/Map/MapAll/MapAll5';
import MapAll15 from './components/Map/MapAll/MapAll15';
import MapAll30 from './components/Map/MapAll/MapAll30';
import MapAll45 from './components/Map/MapAll/MapAll45';
import MapAll60 from './components/Map/MapAll/MapAll60';
import { Button, FormGroup, Input, Form } from 'reactstrap';

// const url="http://127.0.0.1:5000/traval_time/des=wongsawang";

class App extends React.Component {
  // state = {
  //   sideDrawerOpen: false
  // }
  constructor(props){
    super(props);
    this.state = {location: '',
                  time: '',
                  showMaps: <MapDefault/>,
                  time_drive: '',
                  status: null};
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadtime = 0; // test
  }
  
  // componentDidMount () {
  //   Axios.get(url)
  //     .then(res => {
  //       const rrrr = res.data;
  //       console.log(rrrr["219+00638"][22021][1])
  //       this.setState({status: rrrr["219+00638"][22021][1]})
        
  //     })
  //     .catch(error => {
  //       console.log('Oops...')
  //     })
  // }

  // componentDidMount () {
  //   Axios.get(url)
  //     .then(res => {
  //       const time_drive = res.data;
  //       console.log("receive time: ",time_drive.time)
  //       this.setState({time_drive: time_drive.time})
  //       // alert("Total Time Drive: ", time_drive.time)
  //       // console.log("show time: ", this.state.time)
  //     })
  //     .catch(error => {
  //       console.log('Oops...')
  //     })
  // }
  
  // componentWillMount(){
    
  // }
  
  
  handleChangeLocation(event){
    this.setState({location: event.target.value});
  }

  handleChangeTime(event){
    this.setState({time: event.target.value});
  }

  handleSubmit(event){
    // alert('text find: ' + this.state.time)
    if (this.state.location == "สถานีวงศ์สว่าง"){
      if (this.state.time == "5"){
        this.setState({showMaps: <MapWong5 />})
      }
      else if (this.state.time == "15"){
        this.setState({showMaps: <MapWong15 />})
      }
      else if (this.state.time == "30"){
        this.setState({showMaps: <MapWong30 />})
      }
      else if (this.state.time == "45"){
        this.setState({showMaps: <MapWong45 />})
      }
      else if (this.state.time == "60"){
        this.setState({showMaps: <MapWong60 />})
      }
      // console.log("show time: ", this.state.time_drive)
    }
    else if (this.state.location == "สถานีกระทรวงสาธารณสุข"){
      if (this.state.time == "5"){
        this.setState({showMaps: <MapKra5 />})
      }
      else if (this.state.time == "15"){
        this.setState({showMaps: <MapKra15 />})
      }
      else if (this.state.time == "30"){
        this.setState({showMaps: <MapKra30 />})
      }
      else if (this.state.time == "45"){
        this.setState({showMaps: <MapKra45 />})
      }
      else if (this.state.time == "60"){
        this.setState({showMaps: <MapKra60 />})
      }
    }
    else if (this.state.location == "สถานีบางโพ"){
      if (this.state.time == "5"){
        this.setState({showMaps: <MapBang5 />})
      }
      else if (this.state.time == "15"){
        this.setState({showMaps: <MapBang15 />})
      }
      else if (this.state.time == "30"){
        this.setState({showMaps: <MapBang30 />})
      }
      else if (this.state.time == "45"){
        this.setState({showMaps: <MapBang45 />})
      }
      else if (this.state.time == "60"){
        this.setState({showMaps: <MapBang60 />})
      }
    }
    else if (this.state.location == "แสดงทั้งหมด"){
      if (this.state.time == "5"){
        this.setState({showMaps: <MapAll5 />})
      }
      else if (this.state.time == "15"){
        this.setState({showMaps: <MapAll15 />})
      }
      else if (this.state.time == "30"){
        this.setState({showMaps: <MapAll30 />})
      }
      else if (this.state.time == "45"){
        this.setState({showMaps: <MapAll45 />})
      }
      else if (this.state.time == "60"){
        this.setState({showMaps: <MapAll60 />})
      }
    }
    else{
      this.setState({showMaps: <MapDefault />})
    }
    // this.setState({location: ''});
    event.preventDefault();
    
  }

  // drawerToggleClickHandler = () => {
  //   this.setState((prevState) => {
  //     return {sideDrawerOpen: !prevState.sideDrawerOpen};
  //   });
  // };

  // backdropClickHandler = () => {
  //   this.setState({sideDrawerOpen: false})
  // }

  render() {
    // let backdrop;    

    // if (this.state.sideDrawerOpen == true){
    //   backdrop = <Backdrop click={this.backdropClickHandler}/>;
    // }

    let form = 'form-find';

    return (
      <div style={{height: '100%'}}>
        <Toolbar />
        {/* <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />        
        {backdrop} */}
        <main style={{marginTop: '61px'}} >
          <nav className={form}>
            <ul>
            <div>
              <Form onSubmit={this.handleSubmit}>
                <FormGroup size="lg">
                <Input size="lg" type="select" onChange={this.handleChangeLocation}>
                  <option value="" >เลือกจุดหมาย</option>
                  <option value="สถานีวงศ์สว่าง" >สถานีวงศ์สว่าง</option>
                  <option value="สถานีบางโพ">สถานีบางโพ</option>
                  <option value="สถานีกระทรวงสาธารณสุข">สถานีกระทรวงสาธารณสุข</option>
                  <option value="แสดงทั้งหมด">แสดงทั้ง 3 สถานี</option>
                </Input>
                </FormGroup>
                
                <FormGroup size="lg">
                <Input type="select" onChange={this.handleChangeTime}>
                  <option value="" >เลือกเวลาออกเดินทาง</option>
                  <option value="5" >5 นาที</option>
                  <option value="15">15 นาที</option>
                  <option value="30">30 นาที</option>
                  <option value="45">45 นาที</option>
                  <option value="60">60 นาที</option>
                </Input>
                </FormGroup>
                <Button size="lg" type="submit" color="success" value="Submit"> ค้นหา </Button>
              </Form>
            </div>
            </ul>
          </nav>
          {this.state.showMaps}
        </main>
      </div>
    );
  }
}

export default App;