/**
 * @module Authentication
 *
 */

import React, { useState } from 'react';

// import login and register components
import Login from './Login';
import Register from './Register';

// import auth.css for styling
import './auth.css'; // why did they not just name the css Authentication.css? ( ͡° ͜ʖ ͡°)

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [_switch, setSwitch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        //  render the Login component whenever _switch is true otherwise render Register
        <form className="auth">
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
