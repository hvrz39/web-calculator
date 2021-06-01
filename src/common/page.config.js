import { UserService, UserBalanceService, Services, Records, MyRecord } from '../services';
import { usersBalanceTableConfig, usersTableConfig, servicesTableConfig, recordsTableConfig, myRecordsTableConfig } from './table.config';
import { userBalanceFormConfig, userFormConfig, serviceFormConfig, recordFormConfig } from './form.config';
import {  userBalanceDisplayConfig, usersDisplayConfig, serviceDisplayConfig, recordDisplayConfig } from './display.config';

export const Pages = {
    users: 'users',
    balances: 'balances',
    services: 'services',
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
                editFormConfig: userBalanceFormConfig(),
                viewConfig: userBalanceDisplayConfig,
                defaultSortColumn: 'username',
                defaultSortOrder: 'asc',
                mainTitle: `User Balance Management`,   
                canAdd: false,
                canDelete: false,
                searchPlaceholder: 'Search for Balances | Username | Role',
                canSearch: true                          
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
                editFormConfig: userFormConfig(),
                viewConfig: usersDisplayConfig,
                defaultSortColumn: 'username',
                defaultSortOrder: 'asc',
                mainTitle: `User Management`,
                canAdd: true,
                canDelete: true,
                canSearch: true,
                searchPlaceholder: 'Search for Users',                       
            }
        }

        case Pages.services: {

            const { getAll, create, getById, update, remove  } = new Services();

            return {
                fetchAll: getAll,
                fetchById: getById,
                postEntity: create, 
                updateEntity: update, 
                deleteEntity: remove, 
                gridConfig: servicesTableConfig, 
                editFormConfig: serviceFormConfig(),
                viewConfig: serviceDisplayConfig,
                defaultSortColumn: 'type',
                defaultSortOrder: 'asc',
                mainTitle: `Services Management`,   
                canAdd: true,
                canDelete: true,
                canSearch: true,
                searchPlaceholder: 'Search for Services | Type | Cost | Status',               
            }
        }

        case Pages.records: {

            const { getAll, create, getById, update, remove  } = new Records();

            return {
                fetchAll: getAll,
                fetchById: getById,
                postEntity: create, 
                updateEntity: update, 
                deleteEntity: remove, 
                gridConfig: recordsTableConfig, 
                editFormConfig: recordFormConfig(),
                viewConfig: recordDisplayConfig,
                defaultSortColumn: 'service_id',
                defaultSortOrder: 'asc',
                mainTitle: `Records Management`,   
                canAdd: false,
                canDelete: true,
                canSearch: true,
                searchPlaceholder: 'Search for Records | User | Response',                              
            }
        }

        case Pages.myrecords: {

            const { getAll, } = new MyRecord();

            return {
                fetchAll: getAll,
                fetchById: null,
                postEntity: null, 
                updateEntity: null, 
                deleteEntity: null, 
                gridConfig: myRecordsTableConfig, 
                editFormConfig: null,
                viewConfig: null,
                defaultSortColumn: 'service_id',
                defaultSortOrder: 'asc',
                mainTitle: `My Records Management`,   
                canAdd: false,
                canDelete: false,
                canSearch: true,
                searchPlaceholder: 'Search on My Records',                             
            }
        }
        default: return {}
    }
}