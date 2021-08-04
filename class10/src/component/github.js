import {useGithubApi} from './useGithub'
function Github(){
const [user,followers,fetchFollowers,loading] = useGithubApi();
// console.log("follower",follower)
    
    return(
        <div>git hub app
            <p>{user.login}{user.login}</p>
            <button onClick={fetchFollowers}>Follower</button>
            <hr />
            {loading && <p>loading...</p>}
            {
                followers.map((follower)=>{
                    return  <p>{follower.login}</p>
                })
            }
    
        </div>
    )
}
export default Github;