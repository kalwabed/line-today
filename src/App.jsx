import { Router } from '@reach/router'
import React from 'react'

import Home from './page/home'
import Bookmarks from './page/bookmarks'

function App() {
  return (
    <Router>
      <Home path="/" />
      <Bookmarks path="bookmarks" />
    </Router>
  )
}

export default App
