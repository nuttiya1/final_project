import React from 'react';

import './SideDrawer.css';
import FormFind from '../FormFind/FormFind'
import { Button, CustomInput, FormGroup, Input, Form } from 'reactstrap';
import Dropdown from '../Dropdown/Dropdown'

const sideDrawer = props => {

  let drawerClasses = 'side-drawer';
  if (props.show){
    drawerClasses = 'side-drawer open';
  }
  
  return (
    <nav className={drawerClasses}>
      <ul>
        {/* <p> </p>
        <FormFind onClick={props.click}/>
        <p> </p> */}

        <Form inline>
          <Input name="text" id="exampleText" placeholder="ค้นหาสถานที่" />
          <Button color="success" onClick={props.click}> ตกลง </Button>
        </Form>
        
        {/* <Dropdown />
        <FormGroup>          
          <p> </p>
          <div className="choice__time">
            <CustomInput type="radio" id="min1" name="timepredict" label="ออกเดินทางทันที"/>
            <CustomInput type="radio" id="min2" name="timepredict" label="เดินทางอีก 15 นาที" />
            <CustomInput type="radio" id="min3" name="timepredict" label="เดินทางอีก 30 นาที" />
            <CustomInput type="radio" id="min4" name="timepredict" label="เดินทางอีก 45 นาที" />
            <CustomInput type="radio" id="min5" name="timepredict" label="เดินทางอีก 1 ชั่วโมง" />
            <p> </p>
            <Button color="success" onClick={props.click}> ตกลง </Button>
          </div>
        </FormGroup> */}
      </ul>
      <div>
        
      </div>
    </nav>
  );
};

export default sideDrawer;