import React from 'react'
import './Card.css'
import {AiOutlinePlus} from 'react-icons/ai'
import PropTypes from 'prop-types';

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
    return `${year.replace('-', '')} B.C.E.`
  } else {
    return `${year} C.E.`
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

Card.propTypes = {
  historicalEvent: PropTypes.string,
  year: PropTypes.string,
  saveCards: PropTypes.func
}
