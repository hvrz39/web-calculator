
import React from 'react';
// import { INPUT } from '../components/atoms/Input';
import { TextField, Checkbox, Select  }  from '../components/atoms';

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

        // case INPUT.RADIO:  {
        //     return <LSRadioGroup
        //             id={name} 
        //             name={field} 
        //             value={fields[field]} 
        //             onChange={handleFieldChange}  
        //             {...rest} />

        // }
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