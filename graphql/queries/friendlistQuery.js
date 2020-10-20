import { gql } from "@apollo/client";

export const GET_FRIENDLIST = gql`
  query GetFriendlist($access_token: String!) {
    getFriendlist(access_token: $access_token) {
      FriendId
      UserID
      status
      Users {
        id
        username
        isOnline
      }
    }
  }
`;

export const GET_FRIEND_REQUEST = gql`
  query GetFriendRequest($access_token: String!) {
    getFriendRequest(access_token: $access_token) {
      FriendId
      UserID
      status
      Users {
        id
        username
        isOnline
      }
    }
  }
`;
