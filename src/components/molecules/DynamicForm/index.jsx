import React, { useEffect, useCallback }from 'react';
import PropTypes from 'prop-types';
import useFormFields from '../../../hooks/userFormFields';

import {  Grid, FormControl, InputLabel, FormHelperText }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as formService from '../../../services/form.service';


const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1)
        },
        width: '100%'
    }
}));


const Form = props => {

    const { title, data, config, fieldsRef, isLoading } = props;
    const { columns } = config;
    const classes = useStyles();    
    const [fields, handleFieldChange, setFields ] = useFormFields(data);
    
    // first load
    useEffect(() => {        
        if(data){
            setFields(data)            
        }
    }, []);
   
    // updates fields to ref
    useEffect(() => {
        if(fieldsRef) {
            fieldsRef.current = fields
        }
    }, [fields]);

    function onSubmit(e) {
        e.preventDefault();
        console.log('state', fields);
    }    

    // same as Grid size
    const gridMaxAllowedConlumns = 12;
    const gridColumnSize = gridMaxAllowedConlumns / columns.length;

    if(isLoading) {
        return <div>Loading...</div>
    }
    
    return (        
        <form className={classes.root} >
            { title && <h1>{title}</h1>}           
            <Grid container spacing={2}>                    
                {
                    columns.map((column, index) => (
                            <Grid item xs={gridColumnSize} key={index}>                                                                                                    
                                {
                                    column.map((item, index) => (
                                        <Grid item xs={12} key={index} >
                                            { formService.FormField({ item, handleFieldChange, fields }) }
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        )                         
                    )
                }
                { /* Button panel goes here */}
            </Grid>
        </form>
    )
}

export default Form;

Form.propTypes = {
    maxWith: PropTypes.number,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            field: PropTypes.string.isRequired,
            text: PropTypes.string,
            required: PropTypes.bool,
            placeholder: PropTypes.string,
            errorMessage: PropTypes.string,
            groupName: PropTypes.string,
            customCss: PropTypes.string,
          })
    ).isRequired
}