import React from 'react'
import CollectionCard from './CollectionCard'
import PropTypes from 'prop-types'


const Collection = ({collection, removeCards}) => {
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
      {collection.length === 0 && <h2>You have no history cards in here. Click the "+" to add some.</h2>}
      {collectionCards}
      </div>
    </div>
  )
}

export default Collection

Collection.propTypes = {
  stories: PropTypes.array,
  removeCards: PropTypes.func
}