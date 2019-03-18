import React, { Component } from 'react';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import './App.css'
import MapDefault from './components/Map/MapDefault';
import MapWong from './components/Map/MapWong';
import MapKra from './components/Map/MapKra';
import MapBang from './components/Map/MapBang';
import { Button, Label, FormGroup, Input, Form } from 'reactstrap';

class App extends Component {
  // state = {
  //   sideDrawerOpen: false
  // }
  constructor(props){
    super(props);
    this.state = {location: '',
                  time: '',
                  showMaps: <MapDefault />};
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeTime = this.handleChangeTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeLocation(event){
    this.setState({location: event.target.value});
  }

  handleChangeTime(event){
    this.setState({time: event.target.value});
    
  }

  handleSubmit(event){
    alert('text find: ' + this.state.time)
    if (this.state.location == "สถานีวงศ์สว่าง"){
      this.setState({showMaps: <MapWong />})
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
    let form = 'form-find';

    // if (this.state.sideDrawerOpen == true){
    //   backdrop = <Backdrop click={this.backdropClickHandler}/>;
    // }
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
                {/* <Input size="lg" type="text" value={this.state.location} onChange={this.handleChangeLocation} placeholder="ค้นหาสถานที่" /> */}
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
