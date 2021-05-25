
import React from 'react';
import { TextField, Checkbox, Select, RadioGroup  }  from '../components/atoms';

export const FormField = ({ item, handleFieldChange, fields }) => {

    const { type, ...rest } = item;
    const { field  } = rest;
    const name = `${type}-${field}`;

    switch(type) {
        case  'text' : 
        case  'password' : {
            return (<TextField 
                        id={name} 
                        name={field} 
                        value={fields[field]}  
                        type={type}
                        onChange={handleFieldChange} 
                        {...rest} />);
        }

        case 'select':  {
            return (<Select
                    id={name} 
                    name={field} 
                    value={fields[field]} 
                    onChange={handleFieldChange}  {...rest} />);
        }

        case 'radio':  {
            return <RadioGroup
                    id={name} 
                    name={field} 
                    value={fields[field]} 
                    onChange={handleFieldChange}  
                    {...rest} />

        }
        case 'checkbox':  {
            return <Checkbox
                    id={name} 
                    name={field} 
                    value={fields[field]} 
                    onChange={handleFieldChange}  
                    {...rest} />

        }
        default:
            return "Not supported control...";
    } 
}