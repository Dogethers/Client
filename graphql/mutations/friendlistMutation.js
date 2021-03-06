import { gql } from "@apollo/client";

export const ADD_FRIEND = gql`
  mutation addFriend($access_token: String, $FriendId: Int) {
    addFriend(access_token: $access_token, FriendId: $FriendId) {
      FriendId
      UserId
      status
    }
  }
`;

export const ACCEPT_FRIEND = gql`
  mutation acceptFriend(
    $access_token: String
    $FriendId: Int
  ) {
    acceptFriend(
      access_token: $access_token
      FriendId: $FriendId
    ) {
      # FriendId
      # UserID
      # status
      access_token
    }
  }
`;

export const REJECT_FRIEND = gql`
  mutation rejectFriend(
    $acces_token: String
    $FriendId: Int
  ) {
    rejectFriend(
      access_token: $acces_token
      status: $status
      FriendId: $FriendId
    ) {
      FriendId
      UserId
      status
      User {
        id
        username
        isOnline
      }
    }
  }
`;
