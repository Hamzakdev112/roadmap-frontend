import axios from "axios"
import { getAllNodesFailure, getAllNodesStart, getAllNodesSuccess } from "../redux/slices/nodesSlice"


export const getAllNodes =async (dispatch,roadmapId)=>{
    // console.log(roadmapId)
    try{       
        dispatch(getAllNodesStart())
        // console.log(roadmapId)
        const {data} = await axios.get(`http://localhost:4500/api/roadmap/nodes/get/${roadmapId}`)
        // console.log(data)
        dispatch(getAllNodesSuccess(data.tree))
    }catch(err){
        dispatch(getAllNodesFailure(err))
    }
}
 
export const createNode =async({title, description,roadmapId, nodeId},setOpenAddNodeDialog)=>{
    try{
        if(nodeId){
            
        }
        const {data} = await axios
        .post(nodeId?
            `http://localhost:4500/api/roadmap/nodes/create/${roadmapId}/${nodeId}`:`http://localhost:4500/api/roadmap/nodes/create/${roadmapId}`,
            {
                title,
                description
            }
        )
        setOpenAddNodeDialog(false)

    }catch(err){
        console.log(err)
    }
}