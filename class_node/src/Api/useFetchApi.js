import {useState,useEffect} from 'react'

export function useFetchApi(){
    const [data, setData] =useState([{}]);
    const [loadiing, setLoading] =useState(false);



    const fetchData = async ()=>{
        try{
            setLoading(true)
            let res = await fetch("http://localhost:5001/");
            console.log("data in fetch ",res.json())
            setData(res.json());
        }catch(error){
            console.log("error",error.messages)
        }finally{
            setLoading(false)
        }

        
}


useEffect(()=>{
fetchData();
},[])


    return[data]
}