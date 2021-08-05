import {useFetchApi} from './useFetchApi'

function API(){
    const[data] = useFetchApi();
    console.log("data in api", data)




return(
    <div>
        <p>{data}</p>
    </div>
)


}
export default API;