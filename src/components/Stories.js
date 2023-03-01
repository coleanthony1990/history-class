import React from 'react'
import Card from './Card'
import './Stories.css'
import PropTypes from 'prop-types';

const Stories = ({stories, saveCards, error}) => {
  const sortedStories = stories.sort((a, b) => a.year - b.year)
  const storyCard = sortedStories.map((story, index) => {
    return (
      <Card
        historicalEvent={story.event}
        year={story.year}
        key={index}
        saveCards={saveCards}
      />
    )
  })
  if(error) {
    alert(error)
  }

  

  return (
    <div className='stories-container'>
      {(stories.length === 0 && error.length === 0) && <h2>Loading...</h2>}
      {storyCard}
    </div>
  )
}

export default Stories

Stories.propTypes = {
  stories: PropTypes.array,
  saveCards: PropTypes.func,
  error: PropTypes.string
}