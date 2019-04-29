import React from 'react';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import './Toolbar.css';

const toolbar = props => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
        {/* <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div> */}
        <div className="toolbar__logo"><a href="/">Bangkok Traffic Prediction</a></div>
        <div className="spacer" />
    </nav>
  </header>
);

export default toolbar;