import React from 'react'
import './Card.css'
import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'

const CollectionCard = ({historicalEvent, year, removeCards}) => {

  const submitDelete = event => {
    event.preventDefault()
    const deletedCard = {
      year: year,
      historicalEvent: historicalEvent
    }
    removeCards(deletedCard)
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
      <span className='delete' onClick={submitDelete}>
        <FaTimes/>
      </span>
    </div>
  )
}

export default CollectionCard

CollectionCard.propTypes = {
  historicalEvent: PropTypes.string,
  year: PropTypes.string,
  saveCards: PropTypes.func
}