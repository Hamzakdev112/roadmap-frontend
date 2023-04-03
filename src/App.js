import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Roadmap from './components/admin/roadmap/Roadmap'
// import Test from './components/admin/roadmap/Test'
import Table from './components/admin/table/Table'
import Admin from './pages/Admin'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<h1>test</h1>} />
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route index element={<Table />} />
          <Route path='roadmap/:roadmapId' element={<Roadmap />} />
          {/* <Route path='roadmap/:roadmapId' element={<Test />} /> */}
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App