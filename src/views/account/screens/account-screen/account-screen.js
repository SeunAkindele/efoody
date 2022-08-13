import React from "react";
import LottieView from "lottie-react-native";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper } from "./account-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
	return (
		<AccountBackground>
			<AccountCover />
			<AnimationWrapper>
				<LottieView key="animation" autoPlay loop resizeMode="cover" source={require("../../../../assets/animations/plate.json")} />
			</AnimationWrapper>
			<Title>Perfect Menu</Title>
			<AccountContainer>
				<AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")}>
					Login
				</AuthButton>
				<Spacer size="large">
					<AuthButton icon="email" mode="contained" onPress={() => navigation.navigate("Register")}>
						Register
					</AuthButton>
				</Spacer>
			</AccountContainer>
		</AccountBackground>
	);
};
