import { setAPI } from "./setApi";

export const api = (page, data = {}, token="", response, content="") => {
	return setAPI(page, data, token, content)
		.then(response)
		.catch((error) => {
			console.error(error);
		});
};