import React, { useState } from 'react'
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
        <input type='text' placeholder='SEARCH SOMETHING!!' className='input' value={search} onChange={event => setSearch(event.target.value)} required/>
        <button type='submit' className='submit' onClick={submitKeyword}>GO</button>
      </form>
      <button className='collection'>COLLECTION</button>
    </div>
  )
}

export default Form
