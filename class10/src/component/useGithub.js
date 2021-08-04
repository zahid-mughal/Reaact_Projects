import { useState, useEffect } from 'react'
import axios from 'axios'
import {github} from './config/endpoint'

export function useGithubApi() {

    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [followers, setFolowers] = useState([]);


const fetchFollowers = async ()=>{
    try{
        setLoading(true);
        let res= await axios.get(`${github}/users/naveed-rana/followers`)
        console.log("follower",res.data)
        setFolowers(res.data);

        }catch(error){
            console.log("followers error",error.messages)
        }finally{
            setLoading(false);
        }
    }



    const fetchGithubUser = async () => {
        try {

            setLoading(true);
            let res = await axios.get("https://api.github.com/users/zahid-mughal");
            console.log("res", res.data);
            setUser(res.data)

        } catch (error) {
            console.log("catch error")

            console.log("error", error.messages)
        } finally {
            setLoading(false)
        }
    
    }
    useEffect(() => {
        fetchGithubUser();
    }, []);






    return [user,followers,fetchFollowers,loading]


}