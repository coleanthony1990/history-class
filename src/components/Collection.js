import React from 'react'
import CollectionCard from './CollectionCard'


const Collection = ({collection, removeCards}) => {
  console.log(collection)
  const collectionCards = collection.map((story, index) => {
    return (
      <CollectionCard
        historicalEvent={story.historicalEvent}
        year={story.year}
        key={index}
        removeCards={removeCards}
      />
    )
  })
  return (
    <div>
      <h2 className='collection-title'>Collection</h2>
      <div  className='stories-container'>
      {collectionCards}
      </div>
    </div>
  )
}

export default Collection
