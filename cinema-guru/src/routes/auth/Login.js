import Input from '../../components/general/Input';
import Button from '../../components/general/Button';

import { faUser, faLock, faPlus} from '@fortawesome/free-solid-svg-icons';

import './auth.css';

const Login = ({username, password, setUsername, setPassword}) => {
    const handleLogin = () => {
        // handle login
        console.log("logged in!")
    }

    return (
        <div className="login">
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
                label="Sign In"
                type="submit"
                className="login-button"
                onClick={handleLogin}
                icon={faPlus}
            />
        </div>
    );
};

export default Login;
