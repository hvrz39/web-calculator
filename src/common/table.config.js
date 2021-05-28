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
    },
    { 
        id: "status", 
        numeric: true, 
        disablePadding: false, 
        label: "Status",
        align: "right"
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
    },
    {
      id: "balance",
      numeric: false,
      disablePadding: false,
      label: "Balance"
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
    },
  ];