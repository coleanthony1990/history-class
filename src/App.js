import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Form from './components/Form';
import Stories from './components/Stories';
import getStories from './apiCalls';
import Collection from './components/Collection';
import Intro from './components/Intro';


function App() {
  const [stories, setStories] = useState([])
  const [collection, setCollection] = useState([])
  const [error, setError] = useState('')

  const applyStories = (keyword) => {
    getStories(keyword)
    .then((data) =>
      setStories(data)
    )
    .catch((error) => setError(error.message))
  }

  const saveCards = (card) => {
        setCollection([...collection, card])
  }

  const removeCards = (selectedCard) => {
    const newCollection = collection.filter(card => {
      if (card.historicalEvent !== selectedCard.historicalEvent) {
        return card
      }
    })
    setCollection(newCollection)
  }
  
  return (
    <main>
      <nav className='nav-bar'>
        <h1>HISTORY CLASS</h1>
        <Form applyStories={applyStories} />
      </nav>
      <Switch>
      <Route exact path= '/' render={() => <Intro/>}/>
      <Route path= '/stories' render={() => <Stories stories={stories} saveCards={saveCards} error={error} />}/>
      <Route path='/collection' render={() => <Collection collection={collection} removeCards={removeCards}/>}/>
      </Switch>
    </main>
  );
}

export default App;
