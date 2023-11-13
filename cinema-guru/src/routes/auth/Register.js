/**
 * @module Register
 *
 */

import React, { useState } from 'react';

//

// import auth.css for styling
import './auth.css'; // why did they not just name the css Authentication.css? ;_;

const Register = () => {
    const handleRegister = () => {
        // handle register
        console.log("registered!")
    }

    return (
        <div className="register">
            <p>Create a new account</p>
            <Input
                label="Username:"
                type="text"
                className="username"
                value={username}
                setValue={setUsername}
                icon={faUser}
            />
            <Input
                label="Password:"
                type="text"
                className="password"
                value={password}
                setValue={setPassword}
                icon={faLock}
            />
            <Button
                label="Sign Up"
                type="submit"
                className="login-button"
                onClick={handleRegister}
                icon={faPlus}
            />
        </div>
    );
};

export default Register;
