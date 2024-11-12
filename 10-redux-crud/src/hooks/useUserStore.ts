import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import {
	addNewUser,
	deleteUserById,
	type User,
	type UserId,
} from "../store/users/slice";

export const useUserStore = () => {
	const users = useAppSelector((state) => state.users);
	const dispatch = useAppDispatch();

	const addUser = (user: User) => {
		dispatch(addNewUser(user));
	};

	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};

	return { users, addUser, removeUser };
};
