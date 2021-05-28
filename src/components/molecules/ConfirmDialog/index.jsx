import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, Typography } from '@material-ui/core';
import { Button } from "../../atoms";
import PropTypes from "prop-types";
import DynamicForm from '../DynamicForm';
import { DialogTitleContent, ButtonPanel, ButtonPaneLeft, ButtonPaneRight } from '../'
import { ViewEditDialogState } from '../../../common/enums';

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
      onConfirmClick,
      onCancelClick } = props;  
  
    const classes = useStyles();
    const ref = useRef();

    function onCloseHandler() {
        onClose(false);
        //setOpenPopup(false);
    }

    function onClickSaveHandler() {
        onConfirmClick()
        //onSaveClick(ref.current)
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
                        <Button 
                            onClick={onCloseClickHandler}
                            color="default" 
                            text="No" />
                        <Button 
                            autoFocus 
                            onClick={onClickSaveHandler} 
                            color="primary" 
                            text="Yes" />                          
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