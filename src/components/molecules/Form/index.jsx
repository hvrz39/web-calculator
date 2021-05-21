import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '100%',
            margin: ".5em 0em"
        }
    }
}))

const Form = props => {

    const classes = useStyles();
    const { children, onSubmit=f=>f, ...rest } = props;

    return (
        <form 
            onSubmit={onSubmit}
            autoComplete="off"
            {...rest}
            className={classes.root} 
            data-testid="ls-form" >
            {children}
        </form>
    )
}

export default Form;