import axios from 'axios'
axios.defaults.withCredentials = true;
export const userLogin =async ({email, password}, navigate)=>{
        try{
            const {data} = await axios.post('http://localhost:4500/api/users/login', {
                email,
                password
            })
            console.log(data)
            navigate(`/admin`)
        }catch(err){
            console.log(err)



        }

}
export const checkUser =async (navigate)=>{
    try{
        const {data} = await axios.get('http://localhost:4500/api/users/check-auth')
        console.log(1)
        return true
    }catch(err){
        console.log(2)
        return false
    }

}