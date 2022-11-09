import React from 'react'
import Card from './Card'
import './Stories.css'

const Stories = ({stories}) => {
  
  const storyCard = stories.map((story, index) => {
    return (
      <Card
        event={story.event}
        year={story.year}
        key={index}
      />
    )
  })
  return (
    <div className='stories-container'>
      {storyCard}
    </div>
  )
}

export default Stories
