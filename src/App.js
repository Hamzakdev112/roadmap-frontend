import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { getAllNodes } from './apiCalls/nodesApis'
import Roadmap from './components/admin/roadmap/Roadmap'

import Test from './components/admin/roadmap/Test'
import Table from './components/admin/table/Table'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Login from './pages/Login.jsx'
import { checkUser } from './apiCalls/signinApis'

const App = () => {
  const {allNodes} = useSelector(state=>state.nodes)
  const data = {children:allNodes,name:'ROADMAP'}
  const dispatch = useDispatch()
  const [user,setUser]=useState(false)
  useEffect(()=>{
    checkUser().then((res)=>{
      setUser(res)
      console.log(user)
    })
    // getAllNodes(dispatch,"642716fab3e427889b824625")
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
        {user?<Route path='/admin' element={<Admin />}>
          <Route index element={<Table />} />
          <Route path='roadmap/:roadmapId' element={<Roadmap />} />
        </Route>:
        <Route path='/login' element={<Login/>}/>}
      </Routes>
      </BrowserRouter>
      {/* <Roadmap/> */}
    </div>
  )
}

export default App