import React from 'react'
import './Card.css'
import {FaTimes} from 'react-icons/fa'


const CollectionCard = ({historicalEvent, year, removeCards}) => {

  const submitDelete = event => {
    event.preventDefault()
    const deletedCard = {
      year: year,
      historicalEvent: historicalEvent
    }
    removeCards(deletedCard)
  }

  return (
    <div className='story'>
      <h2 className='year'>{year}</h2>
      <p className='historical-event'>{historicalEvent}</p>
      <span className='delete' onClick={submitDelete}>
        <FaTimes/>
      </span>
    </div>
  )
}

export default CollectionCard
