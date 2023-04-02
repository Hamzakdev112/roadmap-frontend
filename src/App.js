import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { getAllNodes } from './apiCalls/nodesApis'
import Roadmap from './components/admin/roadmap/Roadmap'
import Test from './components/admin/roadmap/Test'
import Table from './components/admin/table/Table'
import Admin from './pages/Admin'
import Home from './pages/Home'

const App = () => {
  const {allNodes} = useSelector(state=>state.nodes)
  const data = {children:allNodes,name:'ROADMAP'}
  const dispatch = useDispatch()

  useEffect(()=>{
    getAllNodes(dispatch,"642716fab3e427889b824625")
  },[])
  // const data = {
  //   name: "Course",
  //   children: [
  //     {
  //       name: "Node 1",
  //       children: [
  //         { name: "Sub-Node 1" },
  //         { name: "Sub-Node 2" },
  //         { name: "Sub-Node 3" },
  //       ],
  //     },
  //     {
  //       name: "Node 2",
  //       children: [{ name: "Sub-Node 1" }, { name: "Sub-Node 2" }],
  //     },
  //     { name: "Node 3" },
  //   ],
  // };
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