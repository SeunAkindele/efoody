import React, { useContext, useState } from "react";
import { LoginBackground, LoginContainer, AuthInput, AuthButton, FooterActions, EfoodyTitle } from "./change-password-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { LoginContext } from "../../context/login.context";
import { IsLoading } from "../../../../components/loading/loading.component";
import { TextInput } from "react-native-paper";
import { Text } from "../../../../components/typography/text.component";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const ChangePasswordScreen = ({ navigation, route }) => {
	const { onChangePassword, loading } = useContext(LoginContext);
	const { email } = route.params;
	const [code, setCode] = useState("");
	const [password, setPassword] = useState("");
	const [secured, setSecured] = useState(true);

	return (
		<LoginBackground>
			<IsLoading loading={loading} />
			<EfoodyTitle source={require("../../../../../assets/efoody_title.png")} />
			<LoginContainer>
				<AuthInput
					label="Verification Code"
					// value={}
					underlineColor="#138000"
					activeUnderlineColor="#138000"
					textContentType="emailAddress"
					keyboardType="email-address"
					autoCapitalize="none"
					onChangeText={(code) => setCode(code)}
				/>
				<Spacer size="large">
					<AuthInput
						label="New Password"
						// value={}
						underlineColor="#138000"
						activeUnderlineColor="#138000"
						textContentType="password"
						secureTextEntry={secured}
						autoCapitalize="none"
						right={<TextInput.Icon color="#138000" name="eye" onPress={() => setSecured(!secured)} />}
						onChangeText={(password) => setPassword(password)}
					/>
				</Spacer>

				<Spacer size="large">
					<AuthButton mode="contained" disabled={loading && true} onPress={() => onChangePassword(password, code, email, navigation)}>
						{loading ? "Loading" : "Change Password"}
					</AuthButton>
				</Spacer>
				<Spacer position="bottom" size="large" />
				<FooterActions onPress={() => navigation.goBack()}>
					<MaterialCommunityIcons name="chevron-left" size={20} color="#138000" />
					<Text variant="tag">Previous</Text>
				</FooterActions>
			</LoginContainer>
		</LoginBackground>
	);
};
