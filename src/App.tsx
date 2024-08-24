import React from "react";
import "./App.css";
import { getUserInfo } from "./api/api";
import Form from "./components/Form";
function App() {
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const inputValue = event.target.elements[0].value;
		getUserInfo(inputValue);
	};

	return (
		<>
			<Form />
			{/* <form onSubmit={handleSubmit}>
				<input type="text" />
				<button type="submit"></button>
			</form> */}
		</>
	);
}

export default App;
