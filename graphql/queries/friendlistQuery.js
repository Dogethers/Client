import { gql } from "@apollo/client";

export const GET_FRIENDLIST = gql`
query getFriendlist ($access_token: String){
    getFriendlist(access_token:$access_token){
        FriendId
        UserId
        User{
            id
            username
            isOnline
        }
    }
}
`

export const GET_FRIEND_REQUEST = gql`
  query getFriendRequest ($access_token: String) {
    getFriendRequest(access_token:$access_token) {
      FriendId
      UserId
      status
      User{
        id
        username
        isOnline
      }
    }
  }
`;
