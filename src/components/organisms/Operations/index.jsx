import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { TabPanel } from '../../atoms';
import { Addition } from '../../molecules'

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      minHeight: 524,
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));
  
  export default function Operations() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          height={'100%'}
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Addition" {...a11yProps(0)} />
          <Tab label="Substraction" {...a11yProps(1)} />
          <Tab label="Multiplication" {...a11yProps(2)} />
          <Tab label="Division" {...a11yProps(3)} />
          <Tab label="Square root" {...a11yProps(4)} />
          <Tab label="Free form" {...a11yProps(5)} />
          <Tab label="Random string" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
           <Addition serviceType="addition" requestService={(type, elements)=> console.log({ type, elements })}/>
        </TabPanel>
        <TabPanel value={value} index={1}>
            <Addition serviceType="substraction" requestService={(type, elements)=> console.log({ type, elements })}/>
        </TabPanel>
        <TabPanel value={value} index={2}>
            <Addition serviceType="multiplication" requestService={(type, elements)=> console.log({ type, elements })}/>
        </TabPanel>
        <TabPanel value={value} index={3}>
            Division component
        </TabPanel>
        <TabPanel value={value} index={4}>
            Square root component
        </TabPanel>
        <TabPanel value={value} index={5}>
            Free form component
        </TabPanel>
        <TabPanel value={value} index={6}>
            Random string component
        </TabPanel>
      </div>
    );
  }