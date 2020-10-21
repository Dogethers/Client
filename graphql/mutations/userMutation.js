import { gql, useMutation } from '@apollo/client';

export const REGISTER = gql`
	mutation userRegister(
		$username: String
		$email: String
		$password: String
		$isOnline: Boolean
	) {
		userRegister(
			username: $username
			email: $email
			password: $password
			isOnline: $isOnline
		) {
			access_token
		}
	}
`;

export const LOGIN = gql`
	mutation userLogin($email: String, $password: String) {
		userLogin(email: $email, password: $password) {
			access_token
		}
	}
`;
