  export const userFormConfig = {
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
                    field: 'status', 
                    type: 'radio', 
                    options: [{ value: 'active', label: 'Active'}, { value: 'inactive', label: 'Inactive'}, { value: 'trial', label: 'Trial'}],
                    label: 'Status', 
                    required: true, 
                    placeholder: 'Status'
                },
                {                    
                    field: 'password', 
                    type: 'password',                     
                    label: 'Password', 
                    required: true, 
                    placeholder: 'Password'
                },
              //   {                    
              //     field: 'role', 
              //     type: 'select', 
              //     options: [{ value: 'admin', label: 'Admin'}, { value: 'user', label: 'User'}],
              //     label: 'Role', 
              //     required: true, 
              //     placeholder: 'Role'
              // },
              {                    
                  field: 'role', 
                  type: 'radio', 
                  options: [{ value: 'admin', label: 'Admin'}, { value: 'user', label: 'User'}],
                  label: 'Role ', 
                  required: true, 
                  placeholder: 'Admin'
              }, 
            ],
    ]
}

export const userBalanceFormConfig = {
  columns: [
          [
              {                     
                  field: 'balance', 
                  type: 'text', 
                  label: 'Balance', 
                  required: true, 
                  placeholder: 'Balance'
              },               
          ],          
  ]
}