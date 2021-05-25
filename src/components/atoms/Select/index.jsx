import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const MySelect =  props => {

    const { 
        label, 
        name, 
        value, 
        onChange, 
        options, 
        ...rest } = props;

    return (
        <FormControl variant="outlined">
            <InputLabel>{label}</InputLabel>
            <Select
                                                                  
                    label={label}
                    name={name}
                    value={value}       
                    onChange={onChange}                
                    {...rest}
                    defaultValue=""
                    inputProps={{
                        name: name,
                        id: name,
                        "data-testid": `select-input`,
                      }}
                >
                {options && options.map((option) => (
                        <MenuItem                            
                            key={option.value} 
                            value={option.value + ""}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
        </FormControl>
        )
}

export default MySelect;