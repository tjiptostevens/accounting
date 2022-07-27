import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import './components/assets/css/scrollbar.css'
import Rute from './components/config/routes'
import Page404 from './components/site/Page404'

function App() {
  return (
    <Router>
      <Routes>
        {Rute.web.map((r) => (
          <Route
            exact
            key={r.path}
            path={`${r.path}/*`}
            element={r.component}
          />
        ))}
        <Route path={'/*'} element={<Page404 />} />
      </Routes>
    </Router>
  )
}

export default App
