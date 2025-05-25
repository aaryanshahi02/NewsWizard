import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>

        <Navbar/>
        
        <Routes>

          <Route
            path="/"
            element={<News key="general" pageSize={18} category="general"/>}
          />
          <Route 
            path="/Business" 
            element={<News key="business" pageSize={18} category="business"/>}
          />
          <Route 
            path="/Entertainment" 
            element={<News key="entertainment" pageSize={18} category="entertainment"/>}
          />
          <Route 
            path="/Health" 
            element={<News key="health" pageSize={18} category="health"/>}
          />
          <Route 
            path="/Science" 
            element={<News key="science" pageSize={18} category="science"/>}
          />
          <Route 
            path="/Sports" 
            element={<News key="sports" pageSize={18} category="sports"/>}
          />
          <Route 
            path="/Technology" 
            element={<News key="technology" pageSize={18} category="technology"/>}
          />

        </Routes>

        </BrowserRouter>
      </div>
    )
  }
}

