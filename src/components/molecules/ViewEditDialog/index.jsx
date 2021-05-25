import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, Typography } from '@material-ui/core';
import { Button } from "../../atoms";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from "prop-types";
import { oneColumnTwoRows } from '../../../common/form.config';
import DynamicForm from '../DynamicForm';

const useStyles = makeStyles(theme => ({
  dialogWrapper: {
      padding: theme.spacing(2),
      position: 'absolute',
      top: theme.spacing(5)
  },
  dialogTitle: {
      paddingRight: '0px'
  }
}))

export default function ViewEditDialog(props) {

  const { 
      title, 
      children, 
      openPopup, 
      maxWidth="md", 
      titleProperty=null,
      setOpenPopup, 
      data,
      onClose=f=>f, 
      config,
      actions } = props;
  const [ edit, setEdit ] = useState(false);
  const classes = useStyles();

  function onCloseHandler() {
        onClose(false)
        setOpenPopup(false)
  }

  function onShowEditMode(state) {
      setEdit(state);
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
              <div style={{ display: 'flex' }}>
                <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                      { titleProperty ? data[titleProperty] : 'Create'}
                  </Typography>
                { !edit && 
                <>
                  <IconButton 
                      onClick={() => onShowEditMode(true)}
                      aria-label="delete" 
                      className={classes.margin}>
                      <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton 
                      aria-label="close" 
                      className={classes.margin} 
                      onClick={onCloseHandler}
                      size="small">
                      <CloseIcon fontSize="inherit" />
                  </IconButton>        
                </>
              }
              </div>
          </DialogTitle>
          <DialogContent dividers>
             { !edit && 
              <>
                <h3>Details</h3>
                {config.map(({ id, label }) => <p>-<b>{label} </b>: { data[id]}</p>)}
              </>
             }    
             { edit &&                            
                <DynamicForm         
                  title={''}
                  data={data}
                  isLoading={false}
                  config={oneColumnTwoRows} />                          
             }       
          </DialogContent>
          {edit && <DialogActions>
            <Button 
                autoFocus 
                onClick={f=>f} 
                color="primary" 
                text="Save" />
            <Button 
                onClick={() => onShowEditMode(false)}
                color="default" 
                text="Close" />
        </DialogActions>
        }

      </Dialog>
  )
}


ViewEditDialog.propTypes = {
  config: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
};