import React from "react";
import { getUserInfo } from "../api/api";

function Form() {
	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		const inputValue = event.target.elements[0].value;
		getUserInfo(inputValue);
	};
	return (
		<div className="flex justify-center items-center w-full">
			<form
				onSubmit={handleSubmit}
				className=" flex items-center justify-center"
			>
				<input type="text" />
				<button type="submit"></button>
			</form>
		</div>
	);
}

export default Form;
