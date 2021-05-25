import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import { FormGroup,  FormControlLabel } from '@material-ui/core';

const MyCheckbox =  props => {

    const { label, name, value, onChange, row=true, ...rest } = props;
    
    return (
        <FormGroup row={row}>
            <FormControlLabel
                control={<Checkbox 
                checked={value} 
                onChange={e => onChange({ target: { name, value: e.target.checked }})} 
                name={name} />}
                label={label}
                {...rest}
            />
      </FormGroup>
        )
}

export default MyCheckbox;