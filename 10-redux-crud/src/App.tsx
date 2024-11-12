import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ListOfUsers from "./components/ListOfUsers";
import { useSelector } from "react-redux";

import { Provider } from "react-redux";
import { store } from "./store";
import CreateNewUser from "./components/CreateNewUser";
import { Toaster } from "sonner";

function App() {
	return (
		<Provider store={store}>
			<ListOfUsers />
			<CreateNewUser />
			<Toaster richColors />
		</Provider>
	);
}

export default App;
