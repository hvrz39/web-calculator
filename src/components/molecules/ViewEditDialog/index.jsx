import React, { useState, useRef } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, makeStyles, Typography } from '@material-ui/core';
import { Button, Icon } from "../../atoms";
import IconButton from '@material-ui/core/IconButton';
import PropTypes from "prop-types";
import DynamicForm from '../DynamicForm';
import ConfirmDialog from '../ConfirmDialog';
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
  },
  paddingRight: {
    marginRight: '5px'
}
}));

export default function ViewEditDialog(props) {

  const {      
      openPopup, 
      maxWidth="md", 
      titleProperty=null,
      setOpenPopup, 
      data,
      onClose=f=>f, 
      viewConfig,
      onSaveClick,      
      editConfig,
      canDelete,
      onDeleteClick,
      mode=ViewEditDialogState.View } = props;
      
  const [openConfirm, setOpenConfirm ] = useState(false);
  const [viewState, setViewState ] = useState(mode);
  const [ edit, setEdit ] = useState(  mode === ViewEditDialogState.Create ?? false);
  const classes = useStyles();
  const ref = useRef();
  
  function onCloseHandler() {
        onClose(false);
        setOpenPopup(false);
  }

  function onShowEditMode(state) {
      setEdit(state);
  }

  function onClickSaveHandler() {
    onClose(false);
    onSaveClick(ref.current)
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
                      <Icon name={'edit'} fontSize="small" />
                  </IconButton>
                  <IconButton 
                      aria-label="close" 
                      className={classes.margin} 
                      onClick={onCloseHandler}
                      size="small">
                      <Icon name={'close'} fontSize="inherit" />
                  </IconButton>        
                </>
              }
              </DialogTitleContent>
          </DialogTitle>
          <DialogContent dividers>
             { !edit && !create && 
              <>                
                {viewConfig.map(({ id, label }) => <p key={`detail-${id}`}><b>{label} </b>: { data[id]}</p>)}
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
             { openConfirm && 
                <ConfirmDialog 
                    openPopup={true} 
                    maxWidth="sm"
                    title={`Confirm`}
                    onClose={() => setOpenConfirm(false)}
                    onConfirmClick={() => {setOpenConfirm(false); onDeleteClick(); }}
                    onCancelClick={() => setOpenConfirm(false)}
                    confirmMesage="Are you sure you want to delete it?" />     
             }
          </DialogContent>
          { edit && <DialogActions>
            <ButtonPanel>
              <ButtonPaneLeft>
                { !create && canDelete && 
                    <Button 
                      autoFocus 
                      onClick={() => setOpenConfirm(true)} 
                      color="secondary" 
                      text="Delete" />
                }              
              </ButtonPaneLeft>
            <ButtonPaneRight>
              <Button 
                  autoFocus 
                  onClick={onClickSaveHandler} 
                  color="primary" 
                  className={classes.paddingRight}
                  text="Save" />
              <Button 
                  onClick={onCloseClickHandler}
                  color="default" 
                  text="Close" />
              </ButtonPaneRight>
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