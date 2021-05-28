import React from 'react';
import TextField from '@material-ui/core/TextField';

const MyTextfield =  props => {

    const { 
        label, 
        name, 
        value, 
        onChange, 
        multiline, 
        disabled=false,
        rows, 
        ...rest } = props;

    return (       
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
            disabled={disabled} 
            helperText={''}        
            {...rest} />
        )
}

export default MyTextfield;