import React, { useState } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
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
  const handleNavigate = event => {
    history.push('/stories')
  }


  return (
    <div className='right-container'>
      <form className='keyword-form' onSubmit={submitKeyword}>
        <input type='text' 
          placeholder='SEARCH SOMETHING' 
          className='input' 
          value={search} 
          onChange={event => setSearch(event.target.value)} 
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