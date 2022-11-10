import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Form from './components/Form';
import Stories from './components/Stories';
import getStories from './apiCalls';
import Collection from './components/Collection';


function App() {
  const [stories, setStories] = useState([])
  const [collection, setCollection] = useState([])

  const applyStories = (keyword) => {
    getStories(keyword)
    .then((data) =>
      setStories(data)
    )
  }

  const saveCards = (card) => {
    if (!collection.includes(card)) {
    setCollection([...collection, card])
    }
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
      {stories.length === 0 && <h2>Welcome to History Class! Feel free to type into the search bar to get super brief history lessons on anything! Feel free to save these lessons in your collection for referencing later.</h2>}
      <Switch>
      <Route exact path= '/' render={() => <Stories stories={stories} saveCards={saveCards}/>}/>
      <Route path='/collection' render={() => <Collection collection={collection} removeCards={removeCards}/>}/>
      </Switch>
    </main>
  );
}

export default App;
