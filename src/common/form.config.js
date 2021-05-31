import { UserService,  Services,  } from '../services';
  
  export const userFormConfig = () => ({
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
                  field: 'role', 
                  type: 'radio', 
                  options: [{ value: 'admin', label: 'Admin'}, { value: 'user', label: 'User'}],
                  label: 'Role ', 
                  required: true, 
                  placeholder: 'Admin'
                }, 
            ],
    ]
})

export const userBalanceFormConfig = () => ({
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
})

export const serviceFormConfig = () => ({
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
                       value: 'substraction', 
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
                    }
                  ],
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
})


export const recordFormConfig = () => {
  const { getAll: getAllUsers } = new UserService();  
  const { getAll: getAllServices } = new Services();
  return {
    columns: [
            [
              {                     
                  field: 'cost', 
                  type: 'number', 
                  label: 'Cost', 
                  required: true, 
                  placeholder: 'Cost'
              },   
              {                     
                field: 'user_balance', 
                type: 'number', 
                label: 'User Balance', 
                required: true, 
                placeholder: 'User Balance'
              }, 
              {                     
                field: 'user_id', 
                type: 'select', 
                label: 'User', 
                required: true, 
                placeholder: 'User',
                dataSourceId:`fetch--all-users`,
                fetchDataSource: getAllUsers,
                dataField: 'id',
                dataText: 'username'
              },   
              {                     
                field: 'service_id', 
                type: 'select', 
                label: 'Service', 
                required: true, 
                placeholder: 'Service',
                dataSourceId:`fetch--all-services`,
                fetchDataSource: getAllServices,
                dataField: 'id',
                dataText: 'type'
              },               
            ],          
    ]
  }
}