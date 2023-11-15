import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOut } from '@fortawesome/free-solid-svg-icons'

const Header = ({userUsername, setIsLoggedIn}) => {
    const logout = () => {
        localStorage.removeItem('acessToken');
        setIsLoggedIn(false);
    }

    return (
        <nav>
            <p>Cinema Guru</p>
            <div className='right-section'>
                <img
                    alt='profile-pic'
                    src="https://picsum.photos/100/100"
                />
                <p>Welcome, {userUsername}</p>
                <span onClick={logout}>
                    <FontAwesomeIcon icon={faSignOut}/>
                    <p>Logout</p>
                </span>
            </div>
        </nav>
    )
}

export default Header;
