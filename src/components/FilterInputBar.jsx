import React, { useState } from 'react'
import FilterInputCss from '../styles/FilterInputBar.css'
import FilterOutputList from './FilterOutputList';
import LoadingPage from './LoadingPage';
import { useEffect } from 'react';
const FilterInputBar = ({ listForSearch }) => {
  const [keyWord, changeKeyWord] = useState("");
  const [searchResults, setSearchResults] = useState(null); 

  const [loadingStatus, setLoadingStatus] = useState(false); 

  const catchKeyWord = (event) => {
    changeKeyWord(event.target.value)
  }

  const handleSearchButton = () => {  
    setLoadingStatus(true); 

    setTimeout(() => {
      const results = listForSearch.filter(item =>
        item.title.toLowerCase().includes(keyWord.toLocaleLowerCase()) || item.task.toLowerCase().includes(keyWord.toLocaleLowerCase())
      );
      setSearchResults(results);
      setLoadingStatus(false); 
    }, 2000); 
  }

  const handleEnterButton = (event) => {
    if (event.key == "Enter") {
      handleSearchButton();
    }
  }

  return (
    <div className='container'>
      <div className="search-section">
        <input onChange={catchKeyWord} type='text' className='textinput' onKeyUp={handleEnterButton} />
        <button className='searchbutton' onClick={handleSearchButton}>SEARCH</button>
      </div>
      <div className="results-section">
        {loadingStatus ? <LoadingPage /> : <FilterOutputList results={searchResults} />}
      </div>
    </div>
  )
}

export default FilterInputBar