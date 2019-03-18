import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Dropsdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.select = this.select.bind(this);
    this.state = {
      dropdownOpen: false,
      value: "เลือกสถานที่"
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  select(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      value: event.target.innerText
    });
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle>{this.state.value}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.select}>สถานีรถไฟฟ้าวงศ์สว่าง</DropdownItem>
          <DropdownItem onClick={this.select}>สถานีรถไฟฟ้ากระทรวงสาธารณสุข</DropdownItem>
          <DropdownItem onClick={this.select}>สถานีรถไฟฟ้าบางโพ</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default Dropsdown;