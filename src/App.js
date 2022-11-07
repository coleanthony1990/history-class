import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Form from './components/Form';
import Stories from './components/Stories';


function App() {
  return (
    <main>
      <nav>
      <Route exact path='/' render={() => <Form />}/>
      </nav>
      <Route path='stories' render={() => <Stories />}/>
    </main>
  );
}

export default App;
