import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Form.css'
const Form = (props) => {
  const [search, setSearch] = useState('')

  const submitKeyword = event => {
    event.preventDefault()
    props.applyStories(search)
    clearInput()
  }
  const clearInput = () => {
    setSearch('')
  }


  return (
    <div className='right-container'>
      <form className='keyword-form'>
        <input type='text' 
          placeholder='SEARCH SOMETHING' 
          className='input' 
          value={search} 
          onChange={event => setSearch(event.target.value)} 
          required/>
        <Link to='/'><button type='submit' className='submit' onClick={submitKeyword}>GO</button></Link>
      </form>
      <NavLink to='/collection'><button className='collection'>COLLECTION</button></NavLink>
    </div>
  )
}

export default Form
