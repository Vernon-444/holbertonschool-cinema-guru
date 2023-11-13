/**
 * @fileoverview Input component.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import general.css for styling
import '.general.css';


// class components are not allowed

const Input = ({
    label,
    type,
    className,
    value,
    setValue,
    icon,
    inputAttributes,
    }) => {
    const handleInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={className}>
        <label htmlFor={label}>
            {icon && <FontAwesomeIcon icon={icon} />}
            <input
            type={type}
            id={label}
            value={value}
            onChange={handleInput}
            {...inputAttributes}
            />
        </label>
        </div>
    );
    }

export default Input;
