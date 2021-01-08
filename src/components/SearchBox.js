import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--red bg-light-pink' 
                type='search' 
                placeholder='search cats' 
                onChange={searchChange}
            />
        </div>
    );
}
export default SearchBox;