import { ADD_STUDENT, ERROR_GITHUB_FOLLOWER_API,GITHUB_FOLLOWER_API } from '../constants/types'

export const addStudent = (data) => {
    console.log("data from component to action", data)

    return {
        type: ADD_STUDENT,
        payload: data
    }
}

