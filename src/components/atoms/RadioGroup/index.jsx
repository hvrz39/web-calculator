import React from 'react';
import {
    FormControl, 
    FormLabel,
    RadioGroup,
    FormHelperText,
    FormControlLabel,
    Radio } from '@material-ui/core';

const MyRadioGroup =  (props) => {

    const { 
        label, 
        name, 
        value, 
        onChange, 
        options, 
        row=true, 
        helperText='Requiredx',
        ...rest } = props;

    return (
        <>
        <FormControl variant="outlined" >
            <FormLabel>{label}</FormLabel>
            <RadioGroup
                    data-testid='ls-radio-group'
                    row={row}
                    id={name}                                                                       
                    name={name}
                    value={value ? value.toString(): null}       
                    onChange={onChange}
                    {...rest}                    
                    error={false}
                >
                { options && options.map((option, index) => (
                        <FormControlLabel 
                            id={name}
                            key={index} 
                            value={option.value ? option.value.toString(): null}
                            label={option.label}
                            control={<Radio />}
                            />
                    ))}
                </RadioGroup>
                {/* <FormHelperText>{helperText}</FormHelperText> */}
        </FormControl>
        </>
        )
}

export default MyRadioGroup;