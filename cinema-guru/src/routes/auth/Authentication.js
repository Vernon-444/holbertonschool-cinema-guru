/**
 * @module Authentication
 *
 */

import React, { useState } from 'react';
import axios from 'axios';

// import login and register components
import Login from './Login';
import Register from './Register';

// import auth.css for styling
import './auth.css'; // why did they not just name the css Authentication.css? ( ͡° ͜ʖ ͡°)

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [_switch, setSwitch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /**
     * @function handleSubmit
     * takes the onSubmit event as parameter
     * use the preventDefault event to disable the default behavior of the form
     *
     * Depending on the _swith state:
     *     - true: using axios send a post request to /api/auth/login route with username and password from the component state as body data
     *    - false: using axios send a post request to /api/auth/register route with username and password from the component state as body data
     *
     * onSuccess we will get a response containing a jwt access token.
     * Store the token in the localStorage
     * Set the userUsername state to true
     *
     * Bind the handleSubmit function to the form onSubmit event
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        if (_switch) {
            // login
            // using axios send a post request to /api/auth/login route with username and password from the component state as body data
            axios.post('/api/auth/login', {
                username: username,
                password: password
            })
                .then((response) => {
                    // onSuccess we will get a response containing a jwt access token.
                    // Store the token in the localStorage
                    localStorage.setItem('token', response.data.token);
                    // Set the userUsername state to true
                    setUserUsername(true);
                    // log to console
                    console.log("Logged in!");
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            // register
            // using axios send a post request to /api/auth/register route with username and password from the component state as body data
            axios.post('/api/auth/register', {
                username: username,
                password: password
            })
                .then((response) => {
                    // onSuccess we will get a response containing a jwt access token.
                    // Store the token in the localStorage
                    localStorage.setItem('token', response.data.token);
                    // Set the userUsername state to true
                    setUserUsername(true);
                    // log to console
                    console.log("Registered user!");
                })
                .catch((error) => {
                    console.log(error);
                });
        }
};


    return (
        //  render the Login component whenever _switch is true otherwise render Register
        <form className="auth" onSubmit={handleSubmit}>
            <div className="auth-buttons">
                <Button
                    label="Sign In"
                    type="button"
                    className={_switch ? "light-red" : "dark-red"}
                    onClick={() => set_switch(true)}
                />
                <Button
                    label="Sign Up"
                    type="button"
                    className={_switch ? "dark-red" : "light-red"}
                    onClick={() => set_switch(false)}
                />
            </div>
            <Login
                username={username}
                password={password}
                setUsername={setUsername}
                setPassword={setPassword}
            />
        </form>
    );
}

export default Authentication;
