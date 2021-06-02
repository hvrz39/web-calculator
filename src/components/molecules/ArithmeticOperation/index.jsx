import React, { useState, useEffect } from 'react';
import { TextField, Button, Alert } from '../../atoms';
import useFormFields from '../../../hooks/userFormFields';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const WrapperContainer = styled.div
`
    width: 100%; 
    margin: auto;
    padding: 35px

`;

const ArithmeticOperation  = props => {
    
    const { requestService, serviceType, isError, error, isSuccess, isLoading, result } = props;
    const notSquareRoot = serviceType !== 'square_root' && serviceType !== 'free_form';
    const defaultElementCount = serviceType === 'square_root' && serviceType === 'free_form' ? 1: 2;    
    const inputType =  serviceType === 'free_form' ? 'text' : 'number';
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
        <WrapperContainer>

            { isError && <Alert severity={'error'}  text={error} /> }
            { isSuccess && <Alert severity={'info'} text={result.message} /> }

            <p>{serviceType.toUpperCase()}</p>     
            
             { notSquareRoot &&
                <IconButton color="primary"  onClick={addElement} component="span">
                    <Icon>add_circle</Icon>
                </IconButton>
            }     
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
                        <IconButton 
                            onClick={() => removeElement(ele)}
                            color="action"  
                            disabled={disableRemoveButtons}
                            component="span">
                            <RemoveCircleOutlineIcon color="action"  />
                        </IconButton> }
                </div>)
            }
            <br/>
            <Button text="Request Service" onClick={request} />    
        </WrapperContainer>
    )
}

export default ArithmeticOperation;
