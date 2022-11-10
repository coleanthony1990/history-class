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
      <Link style={{textDecoration: 'none'}} to='/'>
      <form className='keyword-form'>
        <input type='text' 
          placeholder='SEARCH SOMETHING' 
          className='input' 
          value={search} 
          onChange={event => setSearch(event.target.value)} 
          required/>
        <button disabled={search.length<1} type='submit' className='submit' onClick={submitKeyword}>GO</button>
      </form>
      </Link>
      <NavLink to='/collection'><button className='collection'>COLLECTION</button></NavLink>
    </div>
  )
}

export default Form
