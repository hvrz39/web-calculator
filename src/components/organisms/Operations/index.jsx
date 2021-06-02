import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import { TabPanel, Alert  } from '../../atoms';
import { ArithmeticOperation } from '../../molecules';
import { OperationService, getError  } from '../../../services';
import Tab from '@material-ui/core/Tab';

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
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  export default function Operations() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const operationService = new OperationService();
    const requestService = async data => await operationService.requestService(data); 

    const { 
      mutate, 
      data, 
      isError, 
      isLoading, 
      isSuccess, 
      reset,
      error } = useMutation(data => requestService(data));    

    const [apiError, setApiError] = useState('');  
  
    function onRequestService({ serviceType, elements}) {      
      mutate({ serviceType, elements })     
    }

    useEffect(() => {      
      if(isError) {        
        setApiError(getError(error));       
      }      
    }, [isError, error]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    function getOperationComponent(type) {
      return (
        <ArithmeticOperation 
          serviceType={type} 
          isError={isError}
          isSuccess={showInfoAlert}
          result={data}
          error={apiError}
          requestService={onRequestService} />
      )
    }
  
    console.log({ isLoading, isSuccess, data, apiError })
    const showInfoAlert = !isLoading && isSuccess;

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
          <Tab label="Addition"{...a11yProps(0)} onClick={() => reset()} />
          <Tab label="Substraction" {...a11yProps(0)} onClick={() => reset()} />
          <Tab label="Multiplication" {...a11yProps(0)} onClick={() => reset()} />
          <Tab label="Division" {...a11yProps(0)} onClick={() => reset()} />
          <Tab label="Square root" {...a11yProps(0)} onClick={() => reset()} />
          <Tab label="Free form"{...a11yProps(0)} onClick={() => reset()} />
          <Tab label="Random string" {...a11yProps(0)} onClick={() => reset()} />
        </Tabs>
        <TabPanel value={value} index={0}>
           { getOperationComponent("addition") }
        </TabPanel>
        <TabPanel value={value} index={1}>
          { getOperationComponent("substraction") }
        </TabPanel>
        <TabPanel value={value} index={2}>
          { getOperationComponent("multiplication") }          
        </TabPanel>
        <TabPanel value={value} index={3}>
          { getOperationComponent("division") }       
        </TabPanel>
        <TabPanel value={value} index={4}>
          { getOperationComponent("square_root") }   
        </TabPanel>
        <TabPanel value={value} index={5}>
        { getOperationComponent("free_form") }   
        </TabPanel>
        <TabPanel value={value} index={6}>
            Random string component
        </TabPanel>
      </div>
    );
  }