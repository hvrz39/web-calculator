import React from 'react'
import { Button, makeStyles, Icon } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        margin: ".5em 0em",
        width: '100%'
    },
    label: {
        textTransform: 'none',
        margin: ".5em .4em",
        width: '100%'
    }
}))

export default function LSButton(props) {

    const { 
        text, 
        size, 
        color, 
        variant, 
        onClick, 
        startIcon,         
        disabled=false,
        endIcon, 
        ...other } = props
    const classes = useStyles();
    
    return (
        <Button
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "primary"}
            onClick={onClick}
            disabled={disabled}
            startIcon={<Icon>{startIcon}</Icon>}
            endIcon={<Icon>{endIcon}</Icon>}                        
            classes={
                { root: classes.root
                }} 
            {...other} >
            {text}
        </Button>
    )
}