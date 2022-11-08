import React from 'react'

const Card = ({event, year}) => {
const formatYear = () => {
  if (year.includes('-')) {
    return year.split('-').join('B.C. ')
  } else {
    return `A.D. ${year}`
  }
}
  return (
    <div>
      <h2>{formatYear()}</h2>
      <p>{event}</p>
      
    </div>
  )
}

export default Card
