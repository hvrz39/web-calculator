import React, { useState, useEffect } from 'react';
import { TextField, Button, Alert } from '../../atoms';
import useFormFields from '../../../hooks/userFormFields';


const ArithmeticOperation  = props => {
    
    const { requestService, serviceType, isError, error, isSuccess, isLoading, result } = props;
    const notSquareRoot = serviceType !== 'square_root' && serviceType !== 'free_form';
    const defaultElementCount = serviceType === 'square_root' && serviceType === 'free_form' ? 1: 2;    
    const inputType =  serviceType === 'free_form' ? 'text' : 'number';
    // const inputType = serviceType === 'square_root' ? 'tex'
    const [elementCounter, setElementCounter ] = useState(defaultElementCount)
    const [fields, handleFieldChange, setFields ] = useFormFields(defaultElements());

    function addElement() {
        setElementCounter(prev => prev + 1)
    }

    function defaultElements() {
        return notSquareRoot ?  {
            field1: 0,        
            field2: 0,        
        } : {
            field1: ''
        }
    }
    useEffect(() => {
       if(notSquareRoot) {
            let newElement = {}        
            newElement[`field${elementCounter}`] = 0;        
            setFields( {...fields, ...newElement })
       }
    }, [elementCounter]);

    function request() {     
        setFields(defaultElements());
        requestService({serviceType, elements: Object.keys(fields).map((k) => fields[k]) })
    }   
    function removeElement(field){
        const newFields = Object.keys(fields).reduce((object, key) => {
            if (key !== field) {
              object[key] = fields[key]
            }
            return object
          }, {})

        setFields(newFields)
        setElementCounter(prev => prev -1)
    }
    const disableRemoveButtons = elementCounter== 2;
    return (
        <div style={{ padding: '0px 35px',}}>
            { isError && <Alert severity={'error'}  text={error} /> }
            { isSuccess && <Alert severity={'info'} text={result.message} /> }
            <p>{serviceType.toUpperCase()}</p>
            { notSquareRoot && <Button text="+" onClick={addElement} /> }
            <Button text="Request" onClick={request} />           
            {
                Object.keys(fields).map(ele => 
                <div>
                  
                    <TextField 
                        type={inputType}
                        value={fields[ele]} 
                        id={ele} 
                        name={ele} 
                        onChange={handleFieldChange} />
                    { notSquareRoot &&  
                        <Button text="x" 
                            onClick={() => removeElement(ele)} 
                            disabled={disableRemoveButtons} /> }
                </div>)
            }
        </div>
    )
}

export default ArithmeticOperation;