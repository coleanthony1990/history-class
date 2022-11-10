import React from 'react'
import './Card.css'
import {AiOutlinePlus} from 'react-icons/ai'

const Card = ({historicalEvent, year, saveCards}) => {

const addToCollection = event => {
  event.preventDefault()
  const collectedCard = {
    year: year,
    historicalEvent: historicalEvent
  }
  saveCards(collectedCard)
}

const formatYear = () => {
  if (year.includes('-')) {
    return year.split('-').join('B.C.E. ')
  } else {
    return `C.E. ${year}`
  }
}
  return (
    <div className='story'>
      <h2 className='year'>{formatYear()}</h2>
      <p className='historical-event'>{historicalEvent}</p>
      <span className='add' onClick={addToCollection}>
        <AiOutlinePlus/>
      </span>
    </div>
  )
}

export default Card
