import React, { useState, useEffect } from 'react';
import { TextField, Button } from '../../atoms';
import { v4 } from 'uuid';
import useFormFields from '../../../hooks/userFormFields';

function defaultElements() {
    return {
        field1: 0,        
        field2: 0,        
    }
}
const Addition = props => {
   
    const { requestService, serviceType } = props;
    const [elementCounter, setElementCounter ] = useState(2)
    const [fields, handleFieldChange, setFields ] = useFormFields(defaultElements());

    function addElement() {
        setElementCounter(prev => prev + 1)
    }

    useEffect(() => {
        console.log('fields', fields)
    }, [fields])

    useEffect(() => {
        let newElement = {}        
        newElement[`field${elementCounter}`] = 0;        
        setFields( {...fields, ...newElement })
    }, [elementCounter]);

    function request() {
        console.log('fields', fields);
        setFields(defaultElements());
        requestService(serviceType, fields)
    }
    return (
        <div style={{ padding: '0px 35px',}}>
                <p>{serviceType.toUpperCase()}</p>
             <Button text="+" onClick={addElement} />           
             <Button text="Request" onClick={request} />           
            {
                Object.keys(fields).map(ele => 
                <div>
                  
                    <TextField 
                        type="number" 
                        value={fields[ele]} 
                        id={ele} 
                        name={ele} 
                        onChange={handleFieldChange} />
                    <Button text="x" onClick={f=>f} />
                </div>)
            }
        </div>
    )
}

export default Addition;
