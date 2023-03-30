import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Account from './pages/Account'
import Home from './pages/Home'

const App = () => {
  const user = false
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <Home /> : <Account />}>
          <Route index element={<h1>test</h1>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App