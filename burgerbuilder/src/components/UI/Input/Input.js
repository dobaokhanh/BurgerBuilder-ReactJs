import React from 'react';

import classes from './Input.css';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed} 
                required/>;
            break;
        case ('textarea'):
            inputElement = <textarea
                {...props.elementConfig}
                value={props.value} 
                onChange={props.changed} 
                required/>;
            break;
        case ('select'):
            inputElement = (
                <select
                    className={classes.InputElement}
                    {...props.elementConfig}
                    onChange={props.changed}
                    value={props.value} >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                {...props.elementConfig}
                value={props.value} />;
    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;