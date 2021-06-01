import React, { useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, Typography } from '@material-ui/core';
import { Button } from "../../atoms";
import PropTypes from "prop-types";
import { DialogTitleContent, ButtonPanel, ButtonPaneLeft, ButtonPaneRight } from '../'

const useStyles = makeStyles(theme => ({
  dialogWrapper: {
      padding: theme.spacing(2),
      position: 'absolute',
      top: theme.spacing(5)
  },
  dialogTitle: {
      paddingRight: '0px'
  }
}));

export default function ConfirmDialog(props) {

    const { 
      title,       
      openPopup, 
      maxWidth="md", 
      confirmMesage,      
      onClose,   
      fullWidth=false,
      confirmButonText='Yes',
      showCancelButton=true,
      onConfirmClick,
      onCancelClick } = props;  
  
    const classes = useStyles();
    const ref = useRef();

    function onCloseHandler() {
        onClose(false);
    }

    function onClickSaveHandler() {
        onConfirmClick();
    }

    function onCloseClickHandler() {        
        onCancelClick();
    }  

    return (
        <Dialog 
            open={openPopup} 
            maxWidth={maxWidth} 
            fullWidth={true}
            onClose={onCloseHandler}
            disableBackdropClick={false} 
            classes={{ paper: classes.dialogWrapper }}>
            
            <DialogTitle className={classes.dialogTitle}>
                <DialogTitleContent>
                    <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                       { title ?? '' }
                    </Typography>                
                </DialogTitleContent>
            </DialogTitle>
            <DialogContent dividers>             
                {confirmMesage}
            </DialogContent>
            <DialogActions>
                <ButtonPanel>
                    <ButtonPaneLeft>              
                    </ButtonPaneLeft>
                    <ButtonPaneRight>                
                        {showCancelButton && <Button 
                            onClick={onCloseClickHandler}
                            color="default" 
                            fullWidth={fullWidth}
                            text="No" />}
                        <Button 
                            autoFocus 
                            fullWidth={fullWidth}
                            onClick={onClickSaveHandler} 
                            color="primary" 
                            text={confirmButonText} />                          
                    </ButtonPaneRight>
                </ButtonPanel>
            </DialogActions>        

        </Dialog>
    )
    }


ConfirmDialog.propTypes = {
  title: PropTypes.string.isRequired,
  confirmMesage: PropTypes.string.isRequired
};