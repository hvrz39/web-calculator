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
                // {                    
                //     field: 'password', 
                //     type: 'password',                     
                //     label: 'Password', 
                //     required: true, 
                //     placeholder: 'Password'
                // },
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
                  type: 'number', 
                  label: 'Balance', 
                  required: true, 
                  placeholder: 'Balance'
              },               
          ],          
  ]
}

export const serviceFormConfig = {
  columns: [
          [
              {                    
                  field: 'type', 
                  type: 'select', 
                  options: [
                    {
                     value: 'addition', 
                     label: 'Addition'
                    }, { 
                       value: 'subtraction', 
                       label: 'Subtraction'
                    }, { 
                      value: 'multiplication', 
                      label: 'Multiplication'
                    }, { 
                      value: 'division', 
                      label: 'Division'
                  }, {
                      value: 'square_root', 
                      label: 'Square Root'
                  }, {
                    value: 'free_form', 
                    label: 'Free Form'
                  }, {
                    value: 'random_string', 
                    label: 'Random String'
                  }],
                  label: 'Type', 
                  required: true, 
                  placeholder: 'Type'
              },
              {                     
                  field: 'cost', 
                  type: 'number', 
                  label: 'Cost', 
                  required: true, 
                  placeholder: 'Cost'
              }, 
              {                    
                field: 'status', 
                type: 'select', 
                options: [
                    { value: 'active', label: 'Active'}, 
                    { value: 'beta', label: 'Beta'}, 
                    { value: 'inactive', label: 'Inactive'}
                ],
                label: 'Status', 
                required: true, 
                placeholder: 'Type'
            },              
          ],
  ]
}
