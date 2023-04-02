import axios from "axios"
import { getAllNodesFailure, getAllNodesStart, getAllNodesSuccess } from "../redux/slices/nodesSlice"


export const getAllNodes =async (dispatch,roadmapId)=>{
    try{
        dispatch(getAllNodesStart())
        const {data} = await axios.get(`http://localhost:4500/api/roadmap/nodes/get/${roadmapId}`)
        dispatch(getAllNodesSuccess(data.tree))
    }catch(err){
        dispatch(getAllNodesFailure(err))
    }
}
 
export const createNode =async({title, description,roadmapId, nodeId},setOpenAddNodeDialog)=>{
    try{
        const {data} = await axios
        .post(
            `http://localhost:4500/api/roadmap/nodes/create/${roadmapId}/${nodeId}`,
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