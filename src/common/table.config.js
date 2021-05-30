import moment from 'moment';

export const usersTableConfig = [
    {
      id: "id",
      numeric: false,
      disablePadding: false,
      label: "Id"
    },
    {
      id: "username",
      numeric: false,
      disablePadding: false,
      label: "Username"
    },
    { 
        id: "role", 
        numeric: true, 
        disablePadding: false, 
        label: "Role" ,
        align: "right",
        render(val) {
          return val.toUpperCase();  
        }
    },
    { 
        id: "status", 
        numeric: true, 
        disablePadding: false, 
        label: "Status",
        align: "right",
        render(val) {
          return val.toUpperCase();  
        }
    },
  ];

export const usersBalanceTableConfig = [
    {
      id: "id",
      numeric: false,
      disablePadding: false,
      label: "User Id"
    },
    {
      id: "username",
      numeric: false,
      disablePadding: false,
      label: "Username"
    },
    { 
        id: "role", 
        numeric: true, 
        disablePadding: false, 
        label: "Role" ,
        align: "right",
        render(val) {
          return val ? val.toUpperCase() : val;  
        }
    },
    {
      id: "balance",
      numeric: true,
      disablePadding: false,
      label: "Balance",
      align: "right",
    },
  ];

  export const servicesTableConfig = [
    {
      id: "id",
      numeric: false,
      disablePadding: false,
      label: "Id"
    },
    {
      id: "type",
      numeric: false,
      disablePadding: false,
      label: "Type"
    },
    { 
        id: "cost", 
        numeric: true, 
        disablePadding: false, 
        label: "Cost" ,
        align: "right",
    },
    {
      id: "status",
      numeric: true,
      disablePadding: false,
      label: "Status",
      align: "right",
        render(val) {
          return val.toUpperCase();  
        }
    },
  ];

  export const recordsTableConfig = [
    {
      id: "id",
      numeric: false,
      disablePadding: false,
      label: "Id"
    },
    {
      id: "Service.type",
      numeric: false,
      overrideSoftField: 'service_id',
      disablePadding: false,
      label: "Service"
    },
    { 
        id: "User.username", 
        numeric: false, 
        overrideSoftField: 'user_id',
        disablePadding: false, 
        label: "User",      
    },
    {
      id: "cost",
      numeric: true,
      disablePadding: false,
      label: "Cost",
      align: "right",
    },
    {
      id: "user_balance",
      numeric: true,
      disablePadding: false,
      label: "User Balance",
      align: "right",
    },
    {
      id: "service_response",
      numeric: true,
      disablePadding: false,
      label: "Response",
      align: "right",
    },
    {
      id: "date",
      numeric: true,
      disablePadding: false,
      label: "Date",
      align: "right",
      render(val) {
        return moment(val).format('DD/MM/YYYY');

      }
    },
  ];

  export const myRecordsTableConfig = [
    {
      id: "id",
      numeric: false,
      disablePadding: false,
      label: "Id"
    },
    {
      id: "Service.type",
      numeric: false,
      overrideSoftField: 'service_id',
      disablePadding: false,
      label: "Service"
    },    
    {
      id: "cost",
      numeric: true,
      disablePadding: false,
      label: "Cost",
      align: "right",
    },
    {
      id: "user_balance",
      numeric: true,
      disablePadding: false,
      label: "User Balance",
      align: "right",
    },
    {
      id: "service_response",
      numeric: true,
      disablePadding: false,
      label: "Response",
      align: "right",
    },
    {
      id: "date",
      numeric: true,
      disablePadding: false,
      label: "Date",
      align: "right",
      render(val) {
        return moment(val).format('DD/MM/YYYY');

      }
    },
  ];