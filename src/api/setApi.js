import { url } from "./url";
import { empty } from "../components/utility/functions";

export const setAPI = async (page, data = {}, token = "", content = "") => {
	const authorization = !empty(token) ? `Bearer ${token}` : "";
	const contentType = !empty(content) ? content : "application/json";

	const body = !empty(content) ? data : JSON.stringify(data);
	
	const result = await fetch(url("index.php", page), {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-type': contentType,
			'Authorization': authorization,
		},
		body: body,
	});

	const res = await result.json();

	return res;
};