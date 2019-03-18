import React, { Component } from 'react';
import { Button, CustomInput, FormGroup, Input, Form } from 'reactstrap';

class FormFind extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    alert('text find: ' + this.state.value)
    event.preventDefault();
  }

  render(){
      
    return (
      <div>
        <Form inline onSubmit={this.handleSubmit}>
            <Input type="text" value={this.state.value} onChange={this.handleChange} placeholder="ค้นหาสถานที่" />
            <Button type="submit" color="success" value="Submit"> ตกลง </Button>
          </Form>
      </div>

    );
  }
}

export default FormFind;