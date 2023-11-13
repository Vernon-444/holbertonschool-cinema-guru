/**
 * @fileoverview Search bar component.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import general.css for styling
import './general.css';

const SearchBar = ({
    label,
    className,
    value,
    setValue,
    }) => {
    const handleInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div className={className}>
        <label htmlFor={label}>
            <FontAwesomeIcon icon="search" />
            <input
            type="text"
            id={label}
            value={value}
            onChange={handleInput}
            />
        </label>
        </div>
    );
}

export default SearchBar;
