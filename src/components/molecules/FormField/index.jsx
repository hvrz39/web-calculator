import React from 'react';
import "./styles.scss";
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';

export const INPUT = {
    TEXT: 'text',
    PASSWORD: 'password',
    EMAIL: 'email',
    SLIDER: 'slider',
    CHECKBOX: 'checkbox',
    RADIO: 'radio',
    SELECT: 'select' 
}

const Input = ({
    id=null,
    type=INPUT.TEXT,
    disabled=false,
    placeholder="",
    text=null,
    value=null,
    ref=null,
    required=false,
    onChange=f=>f,
    onKeyPress=f=>f
}) => {
  
    const onHandleChange = e => {
        onChange(e)
    }
    
    if(type === INPUT.RADIO) {
       
        return <label> {  text ? text: null  }
            <Radio
                checked={true}
                onChange={onHandleChange}
                value="a"
                onClick={onHandleChange}
                checked={value}
                name="radio-button-demo"
                inputProps={{ 'aria-label': 'A' }}
            /> 
        </label>        
    }
    return (
        <div className="form-field">
            { text && <label htmlFor={id} className={required ? 'required': null }>{text}</label>}
            <input 
                autoComplete={"off"}
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onKeyPress={onKeyPress}
                onChange={onHandleChange}              
                className="input-field" />
        </div>
    )
}

export default React.memo(Input);

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    text: PropTypes.string,
    onChange: PropTypes.func.isRequired
} 