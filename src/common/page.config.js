import { UserService, UserBalanceService } from '../services';
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

            const { getAllBalance, getBalance, create } = new UserBalanceService();

            return {
                fetchAll: getAllBalance,
                fetchById: getBalance,
                postEntity: create, // user balance can only create
                updateEntity: null, // a user balance can only be inserted to keep track history
                deleteEntity: null, // a user balance can only be inserted to keep track history
                gridConfig: usersBalanceTableConfig, 
                editFormConfig: userBalanceFormConfig,
                viewConfig: userBalanceDisplayConfig,
                defaultSortColumn: 'username asc',
                mainTitle: `User Balance Management`,   
                canAdd: false,
                canDelete: false             
            }
        }

        case Pages.users: {

            const { 
                getAll,
                getById,
                create,
                update,
                remove
            } = new UserService();

            return {
                fetchAll: getAll,
                fetchById: getById,
                postEntity: create,
                updateEntity: update,
                deleteEntity: remove,
                gridConfig: usersTableConfig, 
                editFormConfig: userFormConfig,
                viewConfig: usersDisplayConfig,
                defaultSortColumn: 'username asc',
                mainTitle: `User Management`,
                canAdd: true,
                canDelete: true             
            }
        }
        default: return {}
    }
}