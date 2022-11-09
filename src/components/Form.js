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
    <div>
      <form className='keyword-form'>
        <input type='text' placeholder='type here' className='input' value={search} onChange={event => setSearch(event.target.value)} required/>
        <button type='submit' className='submit' onClick={submitKeyword}>GO</button>
      </form>

    </div>
  )
}

export default Form
