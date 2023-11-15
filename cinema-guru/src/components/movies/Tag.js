import './movies.css';
import { useState } from 'react';

const Tag = ({genre, filter, genres, setGenres}) => {
    const [selected, setSelected] = useState(false);

    const handleTag = () => {
        if (selected) {
            setGenres(genres.filter(element => element !== genre));
            setSelected(false);
        } else {
            setGenres(elements => [...elements, genre]);
            setSelected(true);
        }
    }

    return (
        <li
            className={`tag ${selected ? 'selected' : ''}`}
            onClick={handleTag}
        >
            {genre}
        </li>
    )
}

export default Tag;
