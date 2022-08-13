import React, { useState, createContext } from "react";
import { api } from "../../../api/api";
import { checkEmptyInput } from "../../../components/utility/functions";

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [loading, setLoading] = useState(false);
	const [authorization, setAuthorization] = useState(0);
	const [user, setUser] = useState({});
	const [token, setToken] = useState("");

	const onLogin = (email, password) => {
		if (checkEmptyInput([email, password])) {
			alert("None of the fields must be empty");
			return false;
		}

		const inputs = {
			email,
			password,
		};

		setLoading(true);
		setTimeout(() => {
			api("login", { request: inputs }, "", (response) => {
				if (response["success"] === true) {
					setToken(response["data"]["token"]);
					setUser(response["data"]);
					setAuthorization(response["data"]["type"]);
					setIsAuthenticated(true);
					setLoading(false);
				} else {
					setLoading(false);
					alert(response["data"]);
				}
			});
			setLoading(false);
		}, 2000);
	};

	const onVerifyEmail = (email, navigation) => {
		if (checkEmptyInput([email])) {
			alert("None of the fields must be empty");
			return false;
		}

		const inputs = {
			email,
			page: "verifyEmail",
		};

		setLoading(true);
		setTimeout(() => {
			api("register", { request: inputs }, "", (response) => {
				if (response["success"] === true) {
					alert(response["data"]);
					navigation.navigate("ChangePassword", { email: email });
					setLoading(false);
				} else {
					setLoading(false);
					alert(response["data"]);
				}
			});
			setLoading(false);
		}, 2000);
	};

	const onChangePassword = (password, code, email, navigation) => {
		if (checkEmptyInput([password, code])) {
			alert("None of the fields must be empty");
			return false;
		}

		const inputs = {
			password,
			code,
			email,
			page: "changePassword",
		};

		setLoading(true);
		setTimeout(() => {
			api("register", { request: inputs }, "", (response) => {
				if (response["success"] === true) {
					alert(response["data"]);
					navigation.navigate("Login");
					setLoading(false);
				} else {
					setLoading(false);
					alert(response["data"]);
				}
			});
			setLoading(false);
		}, 2000);
	};

	const onLogout = () => {
		setUser({});
		setAuthorization(0);
		setIsAuthenticated(false);
		setToken({});
		setLoading(false);
	};

	return (
		<LoginContext.Provider
			value={{
				onLogin,
				onLogout,
				loading,
				isAuthenticated,
				authorization,
				token,
				user,
				onVerifyEmail,
				onChangePassword,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
};
