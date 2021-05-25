import React, { useState, useEffect } from 'react';
import { DataGrid, Popup } from '../../molecules';
import UserService  from '../../../services/user.service'
import { usersTableConfig } from '../../../common/user.table.config';
import { useQuery,  } from 'react-query'; 

function UserManagementPage() {

    const userService = new UserService();
  
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedUser, setSelectedUser] = useState(-1);
        
    const { refetch } =  useQuery(['fetch-user', selectedUser], (id) => fetchUser(id), {  
            refetchOnWindowFocus: false,   
            enabled: false         
        })
    
        useEffect(() => {            
            refetchUser();
        }, [selectedUser])

    async function refetchUser() {
        if(selectedUser !== -1) {
            const { isSuccess, data } = await refetch();
            if(isSuccess) {
                setOpenDialog(true);
            }
            console.log('response', {isSuccess, data })
    }}

    async function fetchUser({ queryKey }) {        
        const [,userId] = queryKey;
        return await userService.getById(userId)
    }

    const onRowClikHandler = userId => {            
        setSelectedUser(userId);
    }

    const onCloseHandler = state => {   
        setSelectedUser(-1);
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
         <Popup 
            title="" 
            maxWidth="sm"
            openPopup={openDialog}
            onClose={onCloseHandler}
            setOpenPopup={f=>f}>
                <p>Info user</p>
        </Popup>
      </div>
    )
  }

  export default UserManagementPage