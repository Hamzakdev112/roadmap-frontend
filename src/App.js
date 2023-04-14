import React, { } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Roadmap from './components/admin/roadmap/Roadmap'
import Table from './components/admin/table/Table'
import Admin from './pages/Admin'
import Login from './pages/Login.jsx'
import CodeEditorWindow from './components/CodeRunner/CodeEditorWindow'

const App = () => {
  const user = true
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {user?<Route path='/admin' element={<Admin />}>
          <Route index element={<Table />} />
          <Route path='roadmap/:roadmapId' element={<Roadmap />} />
        </Route>:
        <Route path='/login' element={<Login/>}/>}
        <Route path='editor' element={<CodeEditorWindow />} />
      </Routes>
      </BrowserRouter>
      {/* <Roadmap/> */}
    </div>
  )
}

export default App