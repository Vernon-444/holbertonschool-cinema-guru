import './movies.css';
import SearchBar from '../general/SearchBar';
import Input from '../general/Input';
import SelectInput from '../general/SelectInput';
import Tag from './Tag';

const Filter = ({
  minYear, setMinYear, maxYear, setMaxYear, sort,
  setSort, genres, setGenres, title, setTitle}) => {
    return (
        <div>
            <SearchBar title={title} setTitle={setTitle} />
            <Input label='Min Date:' type='number' value={minYear} setValue={setMinYear} min='1500' max='2100'/>
            <Input label='Max Date:' type='number' value={maxYear} setValue={setMaxYear} min='1500' max='2100'/>
            <SelectInput label='Sort:' options={['latest', 'oldest', 'highestrated', 'lowestrated']} className='sort' value={sort} setValue={setSort}/>
            <ul>
                {availableGenres.map((genre, index) => {
                    <Tag key={index} genre={genre} genres={genres} setGenres={setGenres} />
                })}
            </ul>
        </div>
    )
}

export default Filter;
