import React, { useState, useEffect } from 'react';
import { DataGrid, ViewEditDialog } from '../../molecules';
import { Button } from '../../atoms';
import { useQuery, useMutation } from 'react-query'; 
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getPageListEditConfig } from '../../../common/page.config';
import { ViewEditDialogState } from '../../../common/enums';

const Container = styled.div
`
    width: 800px; 
    margin: auto;
    padding: 10px 0px;   
`;

const Title = styled.div `
    text-transform: uppercase;
    padding-bottom: 2em;
`;

const ButtonPanel = styled.div `    
    padding-bottom: 2em;
    text-align: right
`;

function ListViewEditPage({ page }) {
    
    const { 
        fetchAll,
        fetchById,
        postEntity,
        updateEntity,
        gridConfig, 
        editFormConfig,
        viewConfig,
        defaultSortColumn,
        mainTitle } = getPageListEditConfig(page);

    const fetchAllQueryIdentifier = `fetch-active-${page}`;
    const fetchOnQueryIdentifier = `fetch-${page}`;
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedId, setSelectedId] = useState(-1);
    const [selectedUser, setUserSelected] = useState({});
    const [dialogMode, setDialogMode] = useState(ViewEditDialogState.View);

    const { refetch } =  useQuery(
                [fetchOnQueryIdentifier, selectedId], 
                () => fetchUser(selectedId), {  
                    refetchOnWindowFocus: false,   
                    enabled: false         
                });


    const { mutate: createUser, data, isError, isLoading, isSuccess, error } = useMutation(data => saveData(data));  

    const saveData = async data => {
        if (!data.id) {
            console.log('reating')
            await postEntity(data);  
        }
        else {
            console.log('updating')
            await updateEntity(data);
        }
    }



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

    const fetchUser = async userId => await fetchById(userId);

    const onRowClikHandler = userId => {   
        setDialogMode(ViewEditDialogState.EditCreate);
        setSelectedId(userId);
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
        console.log('data', data);
        createUser(data);
    }
    
    return (
      <Container>   
        <Title><h1>{mainTitle}</h1></Title>   
        <ButtonPanel>
            <Button text="Add" onClick={onAddClickHandler} />
        </ButtonPanel>         
        <DataGrid               
            config={gridConfig}                                   
            dataSourceId={fetchAllQueryIdentifier}
            dataSource={fetchAll}
            defaultSort={defaultSortColumn}   
            onRowClick={onRowClikHandler}           
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
                onSave={onSaveClickHandler}
                mode={dialogMode}
                onClose={onCloseHandler}
                setOpenPopup={f=>f} />
        }
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