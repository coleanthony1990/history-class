import React from 'react'
import CollectionCard from './CollectionCard'


const Collection = ({collection}) => {
  const collectionCards = collection.map((story, index) => {
    return (
      <CollectionCard
        historicalEvent={story.historicalEvent}
        year={story.year}
        key={index}
      />
    )
  })
  return (
    <div className='stories-container'>
      {collectionCards}
    </div>
  )
}

export default Collection
