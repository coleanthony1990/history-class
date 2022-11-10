import React from 'react'
import './Card.css'

const CollectionCard = ({historicalEvent, year}) => {
  return (
    <div className='story'>
      <h2 className='year'>{year}</h2>
      <p className='historical-event'>{historicalEvent}</p>
    </div>
  )
}

export default CollectionCard
