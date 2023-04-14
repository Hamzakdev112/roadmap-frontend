import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import CreateRoadmapDialog from './CreateRoadmapDialog';
import { useDispatch, useSelector } from 'react-redux';
import { getRoadmap } from '../../../apiCalls/roadmapApis';
import { useNavigate } from 'react-router-dom';

const Table = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const {allRoadmaps,isFetching,error} = useSelector(state=>state.roadmap)
  useEffect(() => {
    getRoadmap(dispatch)
  }, [dispatch])
  const handleRowCLick=(e)=>{
    navigate(`roadmap/${allRoadmaps[e.id-1]._id}`)
  }
    const [createRoadMapOpen,setCreateRoadMapOpen] = useState(false)
    const columns = [
        { field: 'id', headerName: 'ID', width: 60 },
        { field: 'Title', headerName: 'RoadmapName', width: 140 },
        { field: 'Description', headerName: 'Description', width: 220 },
      ];
      
      const rows = [];
      allRoadmaps?.forEach((roadmap,index)=>{
        rows.push({ id: index+1, Description: roadmap.description, Title: roadmap.title})
      })
      
  return (
    <div className='flex flex-col justify-center mx-auto mt-[3em] border-[1px] border-[gray] p-[1em] items-center w-[80%] h-[70%]'>
        <div className='w-[90%]'>
        <button onClick={()=>setCreateRoadMapOpen(true)} className='mb-[1em] mt-[1em] text-[0.8em] rounded-[10px] bg-[black] p-[0.6em] text-[white] self-start'>Create Roadmap</button>
        </div>
    <div className='w-[90%] h-[400px]'>
{allRoadmaps && <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onRowClick={handleRowCLick}
        />}
        {
          isFetching && (<p>Loading...</p>)
        }
        {
          error && (<p>{error}</p>)
        }
    </div>
    <CreateRoadmapDialog
    setCreateRoadMapOpen={setCreateRoadMapOpen}
     createRoadMapOpen={createRoadMapOpen} />
        </div>
  )
}

export default Table