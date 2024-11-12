import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: UserId;
}

const DEFAULT_STATE: UserWithId[] = [
	{
		id: "2",
		name: "Jane Smith",
		email: "jane.smith@example.com",
		github: "janesmith",
	},
	{
		id: "3",
		name: "Carlos Martínez",
		email: "cmartinez@example.com",
		github: "carlosmartinez",
	},
	{
		id: "4",
		name: "Emily Johnson",
		email: "emilyj@example.com",
		github: "emilyjohnson",
	},
];

const initialState: UserWithId[] = (() => {
	const data = localStorage.getItem("__redux_state__");
	if (data) return JSON.parse(data).users;
	return DEFAULT_STATE;
})();

export const usersSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			return [...state, { id, ...action.payload }];
		},
		deleteUserById: (state, action: PayloadAction<UserId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyIn = state.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyIn) state.push(action.payload); // editar el estado (mutar) sin generar uno nuevo (immer utilizado en redux)
		},
	},
});

export default usersSlice.reducer;
export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;
