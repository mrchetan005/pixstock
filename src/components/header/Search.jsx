/* eslint-disable react/prop-types */
import { Link, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import HistoryIcon from '@mui/icons-material/History';
import styles from './header.module.css';
import { useState } from 'react';
import { Button, Divider, IconButton } from '@mui/material';
import BtnGroup from './BtnGroup';

const searchHistory = JSON.parse(window.localStorage.getItem('search_history')) || { items: [] };

const Search = ({ showSearchView, toggleSearchView }) => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState('photos');
    const [searchValue, setSearchValue] = useState('');

    const updateSearchHistory = (searchValue) => {
        const trimValue = searchValue.trim();
        if (!trimValue) return;
        const indexOf = searchHistory.items.indexOf(trimValue);
        if (indexOf !== -1) {
            searchHistory.items.splice(indexOf, 1);
        }
        searchHistory.items.unshift(trimValue);
        searchHistory.items.splice(5);
        localStorage.setItem('search_history', JSON.stringify(searchHistory));
        navigate(`/${selected}?query=${trimValue}`);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        updateSearchHistory(searchValue);
    }

    return (
        <div className={`${styles.searchView} search-view ${showSearchView ? styles.show : ''}`}>
            <form onSubmit={handleSearch} className={styles.searchBar}>
                <IconButton sx={{ padding: '1.5rem' }} onClick={toggleSearchView} className={`icon-btn search-open ${styles.backArrowIcon}`}>
                    <ArrowBackIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                </IconButton>
                <div className={styles.inputWrapper}>
                    <span className={styles.leadingIcon}>
                        <IconButton sx={{ padding: '1.5rem' }}>
                            <SearchIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                        </IconButton>
                    </span>
                    <input onChange={(e) => setSearchValue(e.target.value)} type="search"
                        value={searchValue}
                        placeholder="Search..." className={`${styles.inputField} body-large`} autoComplete='off' data-search-field />
                </div>
                <IconButton onClick={() => setSearchValue('')} sx={{ padding: '1.5rem' }} className={styles.iconBtn} data-search-clear-btn data-ripple>
                    <CloseIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                </IconButton>

                <IconButton type='submit' onClick={toggleSearchView} sx={{ padding: '1.5rem' }} className="button-icon search-btn" data-search-toggler data-ripple data-search-btn>
                    <SearchIcon sx={{ fontSize: '2rem', color: 'var(--primary)' }} />
                </IconButton>
            </form>

            <div className={styles.searchViewContent}>
                <BtnGroup selected={selected} setSelected={setSelected} />
                <Divider />
                <div className={styles.list} data-search-list>
                    {
                        searchHistory.items.map((value) => (
                            <Link to={`/${selected}?query=${value}`} key={value}>
                                <Button onClick={() => {
                                    updateSearchHistory(value);
                                    toggleSearchView();
                                }} color='inherit' style={{ justifyContent: 'unset' }} className='list-item' data-ripple>
                                    <HistoryIcon sx={{ fontSize: '2rem', color: 'var(--on-background)' }} />
                                    <span className="body-large text">{value}</span>
                                </Button>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Search;