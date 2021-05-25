export const usersFormConfig = [
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


  export const userFormOneColumnConfig = {
    columns: [
            [
                {                     
                    field: 'username', 
                    type: 'text', 
                    label: 'Username', 
                    required: true, 
                    placeholder: 'Username'
                }, 
                { 
                    field: 'role', 
                    label: 'Role', 
                    type:  'text', 
                    required: true, 
                    placeholder: 'Role' 
                },
                {                    
                    field: 'status', 
                    type: 'select', 
                    options: [{ value: 'active', label: 'Active'}, { value: 'inactive', label: 'Inactive'}],
                    label: 'Status', 
                    required: true, 
                    placeholder: 'Status'
                },
                {                    
                  field: 'role', 
                  type: 'select', 
                  options: [{ value: 'admin', label: 'Admin'}, { value: 'user', label: 'User'}],
                  label: 'Role', 
                  required: true, 
                  placeholder: 'Role'
              },
              {                    
                  field: 'role', 
                  type: 'radio', 
                  options: [{ value: 'admin', label: 'Admin'}, { value: 'user', label: 'User'}],
                  label: 'Select radio ', 
                  required: true, 
                  placeholder: 'example@domain.com'
              }, 
            ],
            // [
            //     {                    
            //         field: 'option1', 
            //         type: INPUT.SELECT, 
            //         options: [{ value: 'horacio', label: 'romero'}, { value: 'horacio2', label: 'romero2'}],
            //         label: 'Select input control', 
            //         required: true, 
            //         placeholder: 'example@domain.com'
            //     },
            //     {                    
            //         field: 'option2', 
            //         type: INPUT.RADIO, 
            //         options: [{ value: 'horacio', label: 'romero'}, { value: 'horacio2', label: 'romero2'}],
            //         label: 'Select radio ', 
            //         required: true, 
            //         placeholder: 'example@domain.com'
            //     }, 
            //     {                    
            //         field: 'option2', 
            //         type: INPUT.CHECKBOX, 
            //         options: [{ value: 'horacio', label: 'romero'}, { value: 'horacio2', label: 'romero2'}],
            //         label: 'Select radio ', 
            //         required: true, 
            //         placeholder: 'example@domain.com'
            //     }, 
            //     {                       
            //         field: 'password2', 
            //         text: 'Password', 
            //         type: INPUT.PASSWORD, 
            //         required: true, 
            //         placeholder: 'Password' 
            //     },
            //     {                     
            //         field: 'email2', 
            //         type: INPUT.TEXT, 
            //         label: 'Email Address', 
            //         required: true, 
            //         multiline:true,
            //         placeholder: 'example@domain.com'
            //     }, 
            // ],
            // [
            //     { id: 'email', field: 'email', type: INPUT.TEXT, text: 'Email Address', required: true, placeholder: 'example@domain.com'}, 
            //     { id: 'password', field: 'password', text: 'Password', type:  INPUT.PASSWORD, required: true, placeholder: 'Password' },
            //     { id: 'password', field: 'password', text: 'Password', type:  INPUT.PASSWORD, required: true, placeholder: 'Password' },
            //     { id: 'password', field: 'password', text: 'Password', type:  INPUT.PASSWORD, required: true, placeholder: 'Password' },
            //      { id: 'password', field: 'password', text: 'Password', type:  INPUT.PASSWORD, required: true, placeholder: 'Password' }
            // ],
            // {
            //     title: null,
            //     fields: [
            //     { id: 'email', field: 'email', type: INPUT.TEXT, text: 'Email Address', required: true, placeholder: 'example@domain.com'}, 
            //     { id: 'password', field: 'password', text: 'Password', type:  INPUT.PASSWORD, required: true, placeholder: 'Password' },
            //     { id: 'password', field: 'password', text: 'Password', type:  INPUT.PASSWORD, required: true, placeholder: 'Password' },
            //     { id: 'password', field: 'password', text: 'Password', type:  INPUT.PASSWORD, required: true, placeholder: 'Password' }
            // ],
    ]
}