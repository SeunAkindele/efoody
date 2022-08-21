import React from "react";
import { Image } from "react-native";
import LottieView from "lottie-react-native";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper } from "./account-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";

export const AccountScreen = ({ navigation }) => {
	return (
		<AccountBackground>
			{/* <AccountCover /> */}
			<AnimationWrapper></AnimationWrapper>
			<Image source={{ uri: "../../../../assets/images/efoody.png" }} />
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
