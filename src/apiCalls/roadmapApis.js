import axios from 'axios'

export const createRoadmap =async ({title, description}, navigate)=>{
        try{

            const {data} = await axios.post('http://localhost:4500/api/roadmap/roadmap/create', {
                title,
                description
            })
            navigate(`roadmap/${data.roadmap._id}`)
            console.log(data)
        }catch(err){
            console.log(err)



        }

}