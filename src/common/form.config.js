




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