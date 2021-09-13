import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../reducers/filterReducer';

const Filter = ({ setFilter }) => {

    const onSearchHandler = ({ target: { value } }) => {
        setFilter(value)
    }
    return (
        <div>
            <label htmlFor="filter">Search/filter anecdote</label>
            <input name="filter" type="text" onChange={onSearchHandler} />
        </div>
    )
}

export default connect(null, { setFilter })(Filter)
