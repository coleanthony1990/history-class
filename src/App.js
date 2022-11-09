import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Form from './components/Form';
import Stories from './components/Stories';
import getStories from './apiCalls';


function App() {
  const [stories, setStories] = useState([])

  useEffect(() => {
    getStories('cleopatra')
    .then((data) =>
      setStories(data)
    )
  },[stories])


  return (
    
    <main>
      <nav>
      <Route render={() => <Form />}/>
      </nav>
      <Route render={() => <Stories stories={stories}/>}/>
    </main>
  );
}

export default App;
