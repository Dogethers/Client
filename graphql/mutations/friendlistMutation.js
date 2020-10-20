import { gql } from "@apollo/client";

export const ADD_FRIEND = gql`
  mutation AddFriend($access_token: String!, $FriendId: Int!) {
    addFriend(acces_token: $acces_token, FriendId: $FriendId) {
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

export const ACCEPT_FRIEND = gql`
  mutation AcceptFriend(
    $acces_token: String!
    $status: Boolean
    $FriendId: Int
  ) {
    acceptFriend(
      acces_token: $acces_token
      status: $status
      FriendId: $FriendId
    ) {
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

export const REJECT_FRIEND = gql`
  mutation RejectFriend(
    $acces_token: String
    $status: Boolean
    $FriendId: Int
  ) {
    rejectFriend(
      access_token: $acces_token
      status: $status
      FriendId: $FriendId
    ) {
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
