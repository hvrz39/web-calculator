import React from 'react'
import { Button, makeStyles, Icon } from "@material-ui/core";


const useStyles = ({ width='100%' }) => makeStyles(theme => ({
    root: {
        margin: ".5em 0em",
        width: width ?? null
    },
    label: {
        textTransform: 'none',
        margin: ".5em .4em",
        width: width ?? null
    }
}))

export default function MyButton(props) {

    const { 
        text, 
        size, 
        color, 
        variant, 
        onClick, 
        startIcon,         
        disabled=false,
        width=null,
        endIcon, 
        ...other } = props
    const classes = useStyles({ width })();
    
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