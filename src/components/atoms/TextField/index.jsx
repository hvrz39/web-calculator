import React from 'react';
import TextField from '@material-ui/core/TextField';

const Textfield =  props => {

    const { 
        label, 
        name, 
        value, 
        onChange, 
        multiline, 
        rows, 
        ...rest } = props;

    return (
        <>
        <TextField
            variant="outlined"
            id={name}       
            multiline={multiline || false }
            rows={ rows || 4}
            label={label}
            name={name}
            value={value}       
            onChange={onChange} 
            error={false}            
            helperText={''}        
            {...rest} />
            </>
        )
}

export default Textfield;