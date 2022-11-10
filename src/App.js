import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Form from './components/Form';
import Stories from './components/Stories';
import getStories from './apiCalls';

function App() {
  const [stories, setStories] = useState([])

  const applyStories = (keyword) => {
    getStories(keyword)
    .then((data) =>
      setStories(data)
    )
  }

  return (
    <main>
      <nav className='nav-bar'>
        <h1>HISTORY CLASS</h1>
        <Route render={() => <Form applyStories={applyStories}/>}/>
      </nav>
      <Route render={() => <Stories stories={stories}/>}/>
    </main>
  );
}

export default App;
