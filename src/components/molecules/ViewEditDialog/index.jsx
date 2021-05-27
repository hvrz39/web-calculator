import React, { useState, useEffect, useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, Typography } from '@material-ui/core';
import { Button } from "../../atoms";
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from "prop-types";
import DynamicForm from '../DynamicForm';
import styled from 'styled-components';
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
}))

const DialogTitleContent = styled.div
`
  display:flex;
`
const ButtonPanel = styled.div
`
  display:flex;
  width: 100%;
`

const ButtonPaneLeft = styled.div
`
  text-alight: left;
  flex: 1;

`
const ButtonPaneRight = styled.div
`  text-alight: right;  
  flex: 1;
`

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
      viewConfig,
      onSave,      
      editConfig,
      canDelete,
      mode=ViewEditDialogState.View,
      actions } = props;

  const [viewState, setViewState ] = useState(mode);
  const [ edit, setEdit ] = useState(  mode === ViewEditDialogState.Create ?? false);
  const classes = useStyles();
  const ref = useRef();
   
  useEffect(() => {    
  }, [])

  function onCloseHandler() {
        onClose(false);
        setOpenPopup(false);
  }

  function onShowEditMode(state) {
      setEdit(state);
  }

  function onClickSaveHandler() {
    onClose(false);
    onSave(ref.current)
  }

  function onCloseClickHandler() {
    viewState === ViewEditDialogState.Create ? 
          onClose(false)
          :onShowEditMode(false);
  }
  
  const create = mode === ViewEditDialogState.Create;
  const editCreate = mode === ViewEditDialogState.EditCreate;
  
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
                      { titleProperty ? data[titleProperty] : 'Create'}
                  </Typography>
                { !edit && editCreate && 
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
              </DialogTitleContent>
          </DialogTitle>
          <DialogContent dividers>
             { !edit && !create && 
              <>
                <h3>Details</h3>
                {viewConfig.map(({ id, label }) => <p key={`detail-${id}`}>-<b>{label} </b>: { data[id]}</p>)}
              </>
             }    
             { edit &&                            
                <DynamicForm         
                  title={''}
                  fieldsRef={ref}
                  data={data}
                  isLoading={false}
                  config={editConfig} />                          
             }       
          </DialogContent>
          { edit && <DialogActions>
            <ButtonPanel>
              <ButtonPaneLeft>
                { !create && canDelete && 
                    <Button 
                      autoFocus 
                      onClick={f=>f} 
                      color="secondary" 
                      text="Delete" />
                }              
              </ButtonPaneLeft>
            <ButtonPaneRight>
            </ButtonPaneRight>
              <Button 
                  autoFocus 
                  onClick={onClickSaveHandler} 
                  color="primary" 
                  text="Save" />
              <Button 
                  onClick={onCloseClickHandler}
                  color="default" 
                  text="Close" />
            </ButtonPanel>
        </DialogActions>
        }

      </Dialog>
  )
}


ViewEditDialog.propTypes = {
  config: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired
};