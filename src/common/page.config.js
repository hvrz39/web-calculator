import UserService  from '../services/user.service';
import { usersBalanceTableConfig, usersTableConfig } from './table.config';
import { userBalanceFormConfig, userFormConfig } from './form.config';
import {  userBalanceDisplayConfig, usersDisplayConfig } from './display.config';

export const Pages = {
    users: 'users',
    balances: 'balances',
    records: 'records',
    myrecords: 'myrecords'
}


export const getPageListEditConfig = page => {

    switch(page) {
        case Pages.balances: {
            const userService = new UserService();

            return {
                fetchAll:userService.getAllBalance,
                fetchById:userService.getBalance,
                gridConfig: usersBalanceTableConfig, 
                editFormConfig: userBalanceFormConfig,
                viewConfig: userBalanceDisplayConfig,
                defaultSortColumn: 'username asc',
                mainTitle: `User Balance Management`
            }
        }

        case Pages.users: {

            const userService = new UserService();

            return {
                fetchAll:userService.getAll,
                fetchById:userService.getById,
                gridConfig: usersTableConfig, 
                editFormConfig: userFormConfig,
                viewConfig: usersDisplayConfig,
                defaultSortColumn: 'username asc',
                mainTitle: `User Management`
            }
        }
        default: return {}
    }
}