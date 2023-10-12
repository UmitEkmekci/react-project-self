import React from 'react'
import FilterOutputCss from '../styles/FilterOutput.css'

const FilterOutputList = ({ results }) => {
  return (

    <div className=''>
      {results ? (
        results.length > 0 ? (
          <>
            <h5>Results</h5>
            <p>{results.length} items found.</p>
            <ul className='ul-list'>
              {results.map((item, index) => (
                <div className='ulcontainer'>
                  <li key={index}><strong> Title: {item.title}</strong></li>
                  <li><strong>Task: {item.task}</strong></li>
                </div>
              ))}
            </ul>

          </>

        ) : (
          <p>{results.length} items found.</p>
        )
      ) : null}
    </div>
  )
}

export default FilterOutputList
