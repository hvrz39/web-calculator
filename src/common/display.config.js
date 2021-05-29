export const usersDisplayConfig = [
    {
      id: "id",
      type: 'label', 
      label: "Id"
    },
    {
      id: "username",      
      type: 'text', 
      label: "Username"
    },
    { 
        id: "role", 
        type: 'select', 
        disablePadding: false, 
        label: "Role" ,
        align: "right",
    },
    { 
        id: "status", 
        type: 'select',
        label: "Status"
    },
  ];


  export const userBalanceDisplayConfig = [
    {
      id: "user_id",
      type: 'label', 
      label: "Id"
    },
    {
      id: "balance",      
      type: 'text', 
      label: "Balance"
    }
  ];


  export const serviceDisplayConfig = [
    {
      id: "id",
      type: 'label', 
      label: "Id"
    },
    {
      id: "type",      
      type: 'text', 
      label: "Type"
    },
    {
      id: "cost",      
      type: 'text', 
      label: "Cost"
    },
    {
      id: "status",      
      type: 'text', 
      label: "status"
    }
  ];


  export const recordDisplayConfig = [
    {
      id: "id",
      type: 'label', 
      label: "Id"
    },
    {
      id: "service_id",      
      type: 'text', 
      label: "Service "
    },
    {
      id: "cost",      
      type: 'text', 
      label: "Cost"
    },
    {
      id: "user_balance",      
      type: 'text', 
      label: "User Balance"
    }
  ];
