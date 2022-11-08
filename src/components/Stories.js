import React from 'react'
import Card from './Card'

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
    <div>
      {storyCard}
    </div>
  )
}

export default Stories
