import { gql } from "@apollo/client"

export const GET_ALL = gql`
    query allUsers($access_token: String){
        allUsers(access_token: $access_token){
            id
            username
        }
    }
`

export const GET_ONE = gql`
query getOne($access_token: String, $username: String){
    getOne(access_token:$access_token,username:$username){
        id
        username
        isOnline
    }
}
`