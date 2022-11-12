import React, { useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import './Form.css'
import PropTypes from 'prop-types';


const Form = ({applyStories}) => {
  const [search, setSearch] = useState('')
  const history = useHistory()

  const submitKeyword = event => {
    event.preventDefault()
    applyStories(search)
    clearInput()
  }
  const clearInput = () => {
    setSearch('')
  }
  const handleNavigate = () => {
    history.push('/stories')
  }
  const handleChange = event => {
    const result = event.target.value.replace(/[^a-z, ' ']/gi, '');

    setSearch(result);
  };


  return (
    <div className='right-container'>
      <form className='keyword-form' onSubmit={submitKeyword}>
        <input type='text' 
          placeholder='SEARCH SOMETHING' 
          className='input' 
          value={search} 
          onChange={handleChange} 
          required/>
        <button disabled={search.length<1} type='submit' className='submit' onClick={handleNavigate}>GO</button>
      </form>
      <NavLink to='/collection'><button className='collection'>COLLECTION</button></NavLink>
    </div>
  )
}

export default Form

Form.propTypes = {
  applyStories: PropTypes.func.isRequired
}