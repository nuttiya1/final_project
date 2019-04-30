import React, { Component } from 'react';
import Axios from 'axios';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css'
import MapDefault from './components/Map/MapDefault';
import MapWong from './components/Map/MapWong';
import MapKra from './components/Map/MapKra';
import MapBang from './components/Map/MapBang';
import { Button, Label, FormGroup, Input, Form } from 'reactstrap';

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
      this.setState({showMaps: <MapWong />})
      // console.log("show time: ", this.state.time_drive)
    }
    else if (this.state.location == "สถานีกระทรวงสาธารณสุข"){
      this.setState({showMaps: <MapKra />})
    }
    else if (this.state.location == "สถานีบางโพ"){
      this.setState({showMaps: <MapBang />})
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
