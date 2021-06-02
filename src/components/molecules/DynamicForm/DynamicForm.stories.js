import React from 'react';
import DynamicForm  from '.';

const userBalanceFormConfig =  ({
    columns: [
            [
                {                     
                    field: 'email', 
                    type: 'number', 
                    label: 'Email', 
                    required: true, 
                    placeholder: 'Username'
                },          
                {                     
                    field: 'password', 
                    type: 'password', 
                    label: 'Password', 
                    required: true, 
                    placeholder: 'Password'
                },       
            ],
            [
                {                     
                    field: 'email', 
                    type: 'number', 
                    label: 'Email', 
                    required: true, 
                    placeholder: 'Username'
                },  
                {                     
                    field: 'password', 
                    type: 'password', 
                    label: 'Password', 
                    required: true, 
                    placeholder: 'Password'
                },               
            ],          
    ]
  });

const fields = [{
    id: 'email',
    field: 'email',
    type: 'text',
    text: 'Email Address',
    required: true,
    placeholder: 'example@domain.com'
}, {
    id: 'password',
    field: 'password',
    text: 'Password',
    type:  'password',
    required: true,
    placeholder: 'Password'
}, 
];



export default {
    component: DynamicForm,
    title: 'Molecules/Form',
    parameters: {
        backgrounds: {
          values: [           
          ]
        }
    },
    decorators:  [(Story) => <div style={{ padding: '3em', maxWidth: '940px' }}><Story/></div>]
};


const Template = (args) => <DynamicForm 
    title={'Form with two columns'}
    fieldsRef={null}
    data={fields}
    isLoading={false}
    config={userBalanceFormConfig} />;

export const Primary = Template.bind({});

Primary.args = {
    fields,
}
Primary.storyName = 'Form with two columns';