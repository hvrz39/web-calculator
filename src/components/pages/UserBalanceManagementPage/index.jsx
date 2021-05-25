import React from 'react';
// import { DataGrid, ViewEditDialog } from '../../molecules';
import UserService  from '../../../services/user.service'
import { usersBalanceTableConfig } from '../../../common/table.config';
import { usersFormConfig } from '../../../common/form.config';
// import { useQuery,  } from 'react-query'; 
import ListViewEditPage from '../ListViewEditPage'

function UserBalancePage() {

    const userService = new UserService();    
    
    
    const onSaveHandler = data => {
        console.log(data);
    }

    return (
      <div style={{ width: '800px', margin:'auto'}}>
        <br/>
            <ListViewEditPage 
                mainTitle={'User Balance Management'}              
                fetchAllQueryIdentifier={'fetch-active-users'}
                fetchOnQueryIdentifier={'fetch-users'}
                fetchAll={userService.getAllBalance}
                fetchById={userService.getById}
                gridConfig={usersBalanceTableConfig}
                editFormConfig={usersFormConfig}
                onSave={onSaveHandler}
                defaultSortColumn={'role asc'}
               />
      </div>
    )
  }

  export default UserBalancePage