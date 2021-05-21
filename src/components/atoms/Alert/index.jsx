import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  export default function CustomAlert(props) {
    const classes = useStyles();
    const { severity, text, action} = props;
    
    return (
      <div className={classes.root}>
        <Alert           
            action={action && action()} 
            severity={severity ?? 'error'}>            
                <AlertTitle>{text}</AlertTitle>
        </Alert>         
      </div>
    );
  }