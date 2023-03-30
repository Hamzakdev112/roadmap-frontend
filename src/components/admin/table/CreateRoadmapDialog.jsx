import React from 'react'
import Dialog from '@mui/material/Dialog';
import { DialogContent, DialogTitle } from '@mui/material';

const CreateRoadmapDialog = ({createRoadMapOpen,setCreateRoadMapOpen}) => {
  return (
    <div>
        <Dialog back open={createRoadMapOpen} fullWidth maxWidth="sm">
            <DialogTitle className='flex justify-between'>
                <h1>Create a new Roadmap</h1>
                <button onClick={()=>setCreateRoadMapOpen(false)}>X</button>
            </DialogTitle>
        <DialogContent >
            <form className=' flex flex-col gap-[1em] p-[0.5em]'>
                <input 
                 placeholder='Title'
                  type="text"
                   className='focus:border-[#3384cf] transition-all duration-300 outline-none p-1 border-[1px] border-[#888888]' />
                <textarea
                placeholder='Description'
                className='focus:border-[#3384cf] outline-none p-1 border-[1px] border-[#888888]'
                name="" id="" cols="30" rows="10" />
                <button className='border-[1px] border-[gray] mx-auto w-[100px]'>Create</button>
            </form>
        </DialogContent>
        </Dialog>
    </div>
  )
}

export default CreateRoadmapDialog