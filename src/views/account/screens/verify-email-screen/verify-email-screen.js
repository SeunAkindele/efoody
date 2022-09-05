import React, { useContext, useState } from "react";
import { LoginBackground, LoginContainer, AuthInput, AuthButton, FooterActions, EfoodyTitle } from "./verify-email-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { LoginContext } from "../../context/login.context";
import { IsLoading } from "../../../../components/loading/loading.component";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Text } from "../../../../components/typography/text.component";

export const VerifyEmailScreen = ({ navigation }) => {
	const { onVerifyEmail, loading } = useContext(LoginContext);

	const [email, setEmail] = useState("");

	return (
		<LoginBackground>
			<IsLoading loading={loading} />
			<EfoodyTitle source={require("../../../../../assets/efoody_title.png")} />
			<LoginContainer>
				<Spacer size="large">
					<AuthInput label="Registered E-mail" underlineColor="#138000" activeUnderlineColor="#138000" textContentType="emailAddress" keyboardType="email-address" autoCapitalize="none" onChangeText={(email) => setEmail(email)} />
				</Spacer>

				<Spacer size="large">
					<AuthButton mode="contained" disabled={loading && true} onPress={() => onVerifyEmail(email, navigation)}>
						{loading ? "Loading" : "Verify Email"}
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
