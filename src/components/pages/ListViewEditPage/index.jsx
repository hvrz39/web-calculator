import React, { useState, useEffect } from 'react';
import { DataGrid, ViewEditDialog } from '../../molecules';


import { useQuery,  } from 'react-query'; 
import PropTypes from 'prop-types';

function ListViewEditPage(props) {

    const { 
        fetchAllQueryIdentifier,
        fetchOnQueryIdentifier,
        fetchAll,
        fetchById,
        gridConfig,
        defaultSortColumn,
        mainTitle,
        onSave,
        editFormConfig
    } = props ;
    
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedId, setSelectedId] = useState(-1);
    const [selectedUser, setUserSelected] = useState({});

    const { refetch } =  useQuery(
                [fetchOnQueryIdentifier, selectedId], 
                () => fetchUser(selectedId), {  
                    refetchOnWindowFocus: false,   
                    enabled: false         
                });
    
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
        setSelectedId(userId);
    }

    const onCloseHandler = state => {   
        setSelectedId(-1);
        setOpenDialog(state);
    }
    
    return (
      <div style={{ width: '800px', margin:'auto'}}>        
        <h1>{mainTitle}</h1>
        <br/>
        <DataGrid               
            config={gridConfig}                                   
            dataSourceId={fetchAllQueryIdentifier}
            dataSource={fetchAll}
            defaultSort={defaultSortColumn}   
            onRowClick={onRowClikHandler}           
        />           
        {openDialog && <ViewEditDialog 
            title={``}
            maxWidth="sm"
            titleProperty={'username'}
            openPopup={openDialog}
            config={editFormConfig}
            data={selectedUser}
            onSave={onSave}
            onClose={onCloseHandler}
            setOpenPopup={f=>f} />
        }
      </div>
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
    gridConfig: PropTypes.array.isRequired
  };