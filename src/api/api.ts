import axios from "axios";

export const getUserInfo = async (user: string) => {
	try {
		const uri = `https://api.github.com/users/${user}`;
		const data = await axios.get(uri);
		if (data) console.log(data);
	} catch (error) {
        console.log(error);
    }
};
