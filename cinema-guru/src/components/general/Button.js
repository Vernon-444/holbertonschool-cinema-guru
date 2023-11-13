/**
 * @fileoverview Button component.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import general.css for styling
import './general.css';

// functional components named Button as default
const Button = ({ label,
    className,
    onClick,
    icon }) => {
    return (
        <button className={className} onClick={onClick}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {label}
        </button>
    );
};

export default Button;