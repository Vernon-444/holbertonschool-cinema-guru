import axios from 'axios';
import './navigation.css';
import Activity from '../Activity';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const [selected, setSelected] = useState('home');
    const [small, setSmall] = useState(true);
    const [activities, setActivities] = useState([]);
    const [showActivities, setShowActivities] = useState(false);
    const navigate = useNavigate();

    const setPage = (pageName) => {
        setSelected(pageName);
        switch (pageName) {
            case 'Home':
                navigate('/home');
                break;
            case 'Favorites':
                navigate('/favorites');
                break;
            case 'Watch Later':
                navigate('/watchlater');
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/activity')
        .then(response => {
            setActivities(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <nav>
            <ul className="sidebar-nav">
                <li onClick={() => setPage('Home')}>Home</li>
                <li onClick={() => setPage('Favorites')}>Favorites</li>
                <li onClick={() => setPage('Watch Later')}>Watch Later</li>
            </ul>

            {showActivities && (
                activities.slice(0, 10).map(activity => (
                    <Activity userUsername="Bob" title="SomeMovie" date="11/13/2023"/>
                ))
            )}
        </nav>
    )
}

export default SideBar;
