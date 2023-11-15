import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './movies.css';
import { useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons'

const MovieCard = (movie) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isWatchLater, setIsWatchLater] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/titles/favorite/')
        .then(response => {
            const isMovieFavorite = response.data.some(favoriteMovie => favoriteMovie.imdbId === movie.imdbId);
            setIsFavorite(isMovieFavorite);
        })
        .catch(error => {
            console.error('Error fetching favorites:', error);
        });

        axios.get('http://localhost:8000/api/titles/watchlater/')
        .then(response => {
            const isMovieWatchLater = response.data.some(watchLaterMovie => watchLaterMovie.imdbId === movie.imdbId);
            setIsWatchLater(isMovieWatchLater);
        })
        .catch(error => {
            console.error('Error fetching watch later movies:', error);
        });
    }, [movie.imdbId]);

    return (
        <li>
            <FontAwesomeIcon
                icon={ faClock }
                className={`watch-later-icon ${isWatchLater ? 'active' : ''}`}
                onClick={() => handleClick('watchlater')}
            />
            <FontAwesomeIcon
                icon={ faStar }
                className={`favorite-icon ${isFavorite ? 'active' : ''}`}
                onClick={() => handleClick('favorite')}
            />
            <h2>{movie.title}</h2>
            <p>{movie.synopsys}</p>
            <li className='genres'>

            </li>
        </li>
    )
}

export default MovieCard;
