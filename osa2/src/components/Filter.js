import React from 'react'

const Filter = ({filterInput}) => {
  return (
    <div>
      <label>
        <h2>Filter Countries</h2>
      </label>
      <input placeholder='Find country' onChange={filterInput}/>
    </div>
  )
}

export default Filter