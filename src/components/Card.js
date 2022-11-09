import React from 'react'
import './Card.css'

const Card = ({event, year}) => {
const formatYear = () => {
  if (year.includes('-')) {
    return year.split('-').join('B.C.E. ')
  } else {
    return `C.E. ${year}`
  }
}
  return (
    <div className='story'>
      <h2>{formatYear()}</h2>
      <p className='event'>{event}</p>
      
    </div>
  )
}

export default Card
