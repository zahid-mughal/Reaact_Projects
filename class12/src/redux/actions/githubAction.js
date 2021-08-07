import {ERROR_GITHUB_FOLLOWER_API,GITHUB_FOLLOWER_API } from '../constants/types'

// import {useDispatch} from 'react-redux'



export const fetchFollower = (data) => async (dispatch, previousState) => {
    // dispatch = useDispatch()
    // console.log("data from component to action",data)
    try {
        let res =await fetch(`https://api.github.com/users/${data}/followers`);
        console.log("api response", res);
        dispatch({
            type: GITHUB_FOLLOWER_API,
            payload: res
        })

    } catch (error) {
        console.log("error", error);
        dispatch({
            type: ERROR_GITHUB_FOLLOWER_API,
            payload: error
        })
    }

}