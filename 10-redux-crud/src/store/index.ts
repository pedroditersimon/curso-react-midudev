import { configureStore, Middleware, PayloadAction } from "@reduxjs/toolkit";
import usersReducer, {
	rollbackUser,
	UserWithId,
	type UserId,
} from "./users/slice";
import { toast } from "sonner";

const persistentLocalStorageMiddleware: Middleware =
	(store) => (next) => (action) => {
		next(action);
		localStorage.setItem("__redux_state__", JSON.stringify(store.getState()));
	};

const syncWithDatabaseMiddleware: Middleware =
	(store) => (next) => (action) => {
		const { type, payload } = action as PayloadAction<UserId>;
		const previousState = store.getState();
		next(action);

		if (type === "users/deleteUserById") {
			const userIdToRemove = payload;
			const userToDelete = previousState.users.find(
				(user: UserWithId) => user.id === userIdToRemove,
			);

			fetch("https://jsonplaceholder.typicode.com/todos/1")
				.then((response) => {
					//if (response.ok) {
					//		return toast.success(`Usuario ${payload} eliminado correctamente`);
					//		}
					throw new Error("Error al eliminar el usuario");
				})
				.then((json) => console.log(json))
				.catch((error) => {
					store.dispatch(rollbackUser(userToDelete));
					toast.error(`Error deleting user ${userIdToRemove}`);
					console.error(error);
				});
		}
	};

export const store = configureStore({
	reducer: {
		users: usersReducer,
	},
	// applyMiddleware() tells createStore() how to handle middleware
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(
			persistentLocalStorageMiddleware,
			syncWithDatabaseMiddleware,
		),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
