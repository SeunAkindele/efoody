import React from "react";
import { Image } from "react-native";
import LottieView from "lottie-react-native";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper, EfoodyTitle } from "./account-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
	return (
		<AccountBackground>
			<EfoodyTitle source={require("../../../../../assets/efoody_title.png")} />
			<AccountContainer>
				<AuthButton mode="contained" onPress={() => navigation.navigate("Login")}>
					Login
				</AuthButton>
				<Spacer size="large">
					<AuthButton mode="contained" onPress={() => navigation.navigate("Register")}>
						Register
					</AuthButton>
				</Spacer>
			</AccountContainer>
		</AccountBackground>
	);
};
