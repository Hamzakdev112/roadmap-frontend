import axios from 'axios'
import { getAllRoadmapsFailure, getAllRoadmapsStart, getAllRoadmapsSuccess } from "../redux/slices/roadmapSlice"
export const createRoadmap =async ({title, description}, navigate)=>{
        try{
            axios.defaults.withCredentials = true;
            const {data} = await axios.post('http://localhost:4500/api/roadmap/roadmap/create', {
                title,
                description
            })
            navigate(`roadmap/${data.roadmap._id}`)
            // console.log(data)
        }catch(err){
            console.log(err)
        }
}
export const getRoadmap =async (dispatch)=>{
    try{
        dispatch(getAllRoadmapsStart())
        axios.defaults.withCredentials = true;
        const {data} = await axios.get('http://localhost:4500/api/roadmap/roadmap')
        // console.log(data)
        dispatch(getAllRoadmapsSuccess(data.roadmap))
    }catch(err){
        console.log(err)
        dispatch(getAllRoadmapsFailure(err))
    }
}