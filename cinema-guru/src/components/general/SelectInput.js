/**
 * @fileoverview SelectInput component. This component is a select input
 *
 */


import React from 'react';
import PropTypes from 'prop-types';

// import general.css for styling
import './general.css';

const SelectInput = ({
    label,
    options,
    className,
    value,
    setValue,
    }) => {
    const handleSelect = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={className}>
        <label htmlFor={label}>
            <select
            id={label}
            value={value}
            onChange={handleSelect}
            >
            {options.map((option) => (
                <option
                key={option}
                value={option}
                >
                {option}
                </option>
            ))}
            </select>
        </label>
        </div>
    );
}

export default SelectInput;
