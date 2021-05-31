import React from 'react';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

const MyTab = ({ label }) => {

    return(
        <Tab label={label} {...a11yProps(0)} />
    )
}

export default MyTab;