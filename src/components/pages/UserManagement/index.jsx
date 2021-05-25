import React, { useState, useEffect } from 'react';
import { DataGrid, ViewEditDialog } from '../../molecules';
import UserService  from '../../../services/user.service'
import { usersTableConfig } from '../../../common/table.config';
import { usersFormConfig } from '../../../common/form.config';
import { useQuery,  } from 'react-query'; 

function UserManagementPage() {

    const userService = new UserService();  
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(-1);
    const [selectedUser, setUserSelected] = useState({});

    const { refetch } =  useQuery(
                ['fetch-user', selectedUserId], 
                () => fetchUser(selectedUserId), {  
                    refetchOnWindowFocus: false,   
                    enabled: false         
                });
    
    useEffect(() => {            
        refetchUser();
    }, [ selectedUserId ]);

    async function refetchUser() {
        if(selectedUserId !== -1) {
            const { isSuccess, data } = await refetch();
            if(isSuccess) {                
                setUserSelected(data);
                setOpenDialog(true);
            }            
    }}

    const fetchUser = async userId => await userService.getById(userId);

    const onRowClikHandler = userId => {            
        setSelectedUserId(userId);
    }

    const onCloseHandler = state => {   
        setSelectedUserId(-1);
        setOpenDialog(state);
    }
    
    return (
      <div style={{ width: '800px', margin:'auto'}}>
        <br/>
        <h1>User management</h1>
        <br/>
        <DataGrid               
            config={usersTableConfig}              
            defaultKey={'id'}             
            dataSourceId={'fetch-users'}
            dataSource={userService.getAll}
            defaultSort={'role asc'}   
            onRowClick={onRowClikHandler}           
        />   
        <DataGrid               
            config={usersTableConfig}              
            defaultKey={'id'}             
            dataSourceId={'fetch-users'}
            dataSource={userService.getAll}
            defaultSort={'role asc'}   
            onRowClick={onRowClikHandler}           
        />    
        {openDialog && <ViewEditDialog 
            title="Add/Edit User" 
            maxWidth="sm"
            titleProperty={'username'}
            openPopup={openDialog}
            config={usersFormConfig}
            data={selectedUser}
            onClose={onCloseHandler}
            setOpenPopup={f=>f} />
        }
      </div>
    )
  }

  export default UserManagementPage