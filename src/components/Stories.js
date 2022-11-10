import React from 'react'
import Card from './Card'
import './Stories.css'

const Stories = ({stories, saveCards}) => {
  
  const storyCard = stories.map((story, index) => {
    return (
      <Card
        historicalEvent={story.event}
        year={story.year}
        key={index}
        saveCards={saveCards}
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
