import React, { useContext, useState } from "react";
import { LoginBackground, LoginContainer, AuthInput, AuthButton, EfoodyTitle, LoginFooter, FooterActions } from "./login-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import { TextInput } from "react-native-paper";
import { LoginContext } from "../../context/login.context";
import { IsLoading } from "../../../../components/loading/loading.component";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export const LoginScreen = ({ navigation }) => {
	const { onLogin, loading } = useContext(LoginContext);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [secured, setSecured] = useState(true);

	return (
		<LoginBackground>
			<IsLoading loading={loading} />
			<EfoodyTitle source={require("../../../../../assets/efoody_title.png")} />
			<LoginContainer>
				<AuthInput label="E-mail" underlineColor="#138000" activeUnderlineColor="#138000" textContentType="emailAddress" keyboardType="email-address" autoCapitalize="none" onChangeText={(email) => setEmail(email)} />

				<AuthInput label="Password" underlineColor="#138000" activeUnderlineColor="#138000" textContentType="password" secureTextEntry={secured} autoCapitalize="none" right={<TextInput.Icon name="eye" color="#138000" onPress={() => setSecured(!secured)} />} onChangeText={(password) => setPassword(password)} />

				<Spacer position="bottom" size="large" />

				<AuthButton mode="contained" disabled={loading && true} onPress={() => onLogin(email, password)}>
					{loading ? "Loading" : "Login"}
				</AuthButton>
			</LoginContainer>
			<LoginFooter>
				<FooterActions onPress={() => navigation.goBack()}>
					<MaterialCommunityIcons name="chevron-left" size={20} color="#138000" />
					<Text variant="tag">Previous</Text>
				</FooterActions>
				<FooterActions onPress={() => navigation.navigate("VerifyEmail")}>
					<MaterialIcons name="lock" size={15} color="#138000" />
					<Spacer position="right" size="small" />
					<Text variant="tag">Forgot Password?</Text>
				</FooterActions>
			</LoginFooter>
		</LoginBackground>
	);
};
