import './App.css';
import Navbar from './components/Navbar';

import React, { useState } from 'react'
import News from './components/News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App =()=> {
    const pageSize = 5;
    const apiKey = process.env.REACT_APP_NEWS_API
    const [progress, setProgress] = useState(0)

    return (
      <div>
        <BrowserRouter>

        <Navbar/>
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        
        <Routes>

          <Route
            path="/"
            element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general"/>}
          />
          <Route 
            path="/Business" 
            element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country="us" category="business"/>}
          />
          <Route 
            path="/Entertainment" 
            element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}
          />
          <Route 
            path="/Health" 
            element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health"/>}
          />
          <Route 
            path="/Science" 
            element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science"/>}
          />
          <Route 
            path="/Sports" 
            element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports"/>}
          />
          <Route 
            path="/Technology" 
            element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology"/>}
          />

        </Routes>

        </BrowserRouter>
      </div>
    )
  
}

export default App;