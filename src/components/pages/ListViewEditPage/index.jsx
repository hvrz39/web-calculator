import React, { useState, useEffect, useRef } from 'react';
import { DataGrid, ViewEditDialog } from '../../molecules';
import { Button } from '../../atoms';
import { useQuery, useMutation, useQueryClient } from 'react-query'; 
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getPageListEditConfig } from '../../../common/page.config';
import { ViewEditDialogState  } from '../../../common/enums';
import { v4 } from 'uuid';
import { Title, Container, Content, ButtonPanel} from '../page.components';


function ListViewEditPage({ page }) {
    
    const { 
        fetchAll,
        fetchById,
        postEntity,
        updateEntity,
        deleteEntity,
        gridConfig, 
        editFormConfig,
        viewConfig,
        defaultSortColumn,
        defaultSortOrder='asc',
        canAdd=false,
        canDelete,
        mainTitle } = getPageListEditConfig(page);

    const fetchAllQueryIdentifier = `fetch-active-${page}`;
    const fetchOnQueryIdentifier = `fetch-${page}`;
    const [openDialog, setOpenDialog] = useState(false);    
    const [selectedId, setSelectedId] = useState(-1);
    const [selectedUser, setUserSelected] = useState({});
    const [dialogMode, setDialogMode] = useState(ViewEditDialogState.View);
    const queryRef = useRef(null);

    const queryClient = useQueryClient()

    const { refetch } =  useQuery(
                [fetchOnQueryIdentifier, selectedId], 
                () => fetchById(selectedId), {  
                    refetchOnWindowFocus: false,   
                    enabled: false         
                });

    const { mutate: saveUser } = 
            useMutation(data => saveUserCall(data), {
                onMutate: async (newData) => {  

                    await queryClient.cancelQueries(queryRef.current);                
                    const snapshot = await queryClient.getQueryData(queryRef.current);
                
                    const updateRows = (rows, newData) => 
                                                        newData.id ? 
                                                            rows.map(r => r.id === newData.id ? newData : r ) 
                                                            : [...rows, { ...newData, id: v4() }];                    
                    
                    await queryClient
                                .setQueryData(
                                    queryRef.current, 
                                    ({ count, rows }) => ({ count, rows: updateRows(rows, newData )})
                                );
            
                    return () => queryClient.setQueryData(queryRef.current, snapshot);
                },
                onError: async (error, newData, rollback) =>   await rollback(),
                onSettled: async () => await queryClient.refetchQueries(queryRef.current),
            }); 

    const { mutate: deleteUser } = 
        useMutation(data => deleteUserCall(data), {
            onMutate: async (deletedUserId) => {  

                await queryClient.cancelQueries(queryRef.current);                
                const snapshot = await queryClient.getQueryData(queryRef.current);
            
                await queryClient
                                .setQueryData(
                                    queryRef.current, 
                                    ({ count, rows }) => ({ count, rows: rows.filter(s=> s.id !== deletedUserId) })
                                );
        
                return () => queryClient.setQueryData(queryRef.current, snapshot);
            },
            onError: async (error, newData, rollback) =>   await rollback(),
            onSettled: async () => await queryClient.refetchQueries(queryRef.current),
        });            

    const saveUserCall = async data => !data.id ? await postEntity(data) : await updateEntity(data);
    const deleteUserCall = async id => await deleteEntity(id);

    useEffect(() => {            
        refetchUser();
    }, [ selectedId ]);

    async function refetchUser() {
        if(selectedId !== -1) {
            const { isSuccess, data } = await refetch();
            if(isSuccess) {                
                setUserSelected(data);
                setOpenDialog(true);
            }            
    }}

    // const fetchUser = async userId => await fetchById(userId);

    const onRowClikHandler = userId => {   
        setDialogMode(ViewEditDialogState.EditCreate);
        setSelectedId(userId);
    }

    const onDeleteClickHandler = () => {
        setOpenDialog(false);        
        deleteUser(selectedId);
    }

    const onCloseHandler = state => {   
        setUserSelected({});
        setSelectedId(-1);
        setOpenDialog(state);
    }

    const onAddClickHandler = () => {     
        setDialogMode(ViewEditDialogState.Create);
        setOpenDialog(true);
    }

    const onSaveClickHandler = (data) => {       
        console.log('data', data) 
        saveUser(data);
    }
    
    return (
      <Container>   
        <Title><h2>{mainTitle}</h2></Title>   
        { canAdd && 
            <ButtonPanel>
                <Button text="Add" onClick={onAddClickHandler} />
            </ButtonPanel> 
        }        
        <Content>        
            <DataGrid               
                config={gridConfig}                                   
                dataSourceId={fetchAllQueryIdentifier}
                dataSource={fetchAll}
                defaultSortColumn={defaultSortColumn}   
                defaultSortOrder={defaultSortOrder}
                onRowClick={onRowClikHandler}   
                queryRef={queryRef}        
            />           
            {openDialog && 
                <ViewEditDialog 
                    title={``}
                    maxWidth="sm"
                    titleProperty={'username'}
                    openPopup={openDialog}
                    editConfig={editFormConfig}
                    viewConfig={viewConfig}
                    data={selectedUser}
                    mode={dialogMode}
                    canDelete={canDelete}
                    onSaveClick={onSaveClickHandler}
                    onClose={onCloseHandler}
                    onDeleteClick={onDeleteClickHandler}
                    setOpenPopup={f=>f} />
            }       
        </Content>
      </Container>
    )
  }

  export default ListViewEditPage

  ListViewEditPage.propTypes = {
    mainTitle: PropTypes.string.isRequired,
    fetchAllQueryIdentifier: PropTypes.string.isRequired,
    fetchOnQueryIdentifier: PropTypes.string.isRequired,
    queryId: PropTypes.string.isRequired,
    fetchAll: PropTypes.func.isRequired,
    fetchById: PropTypes.func.isRequired,
    gridConfig: PropTypes.array.isRequired,
    displayConfig: PropTypes.array.isRequired
  };