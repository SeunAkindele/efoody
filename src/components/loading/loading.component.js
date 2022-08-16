import React from "react";
// import { Colors } from "react-native-paper";
import { LoadingContainer, Loading } from "./loading.component.styles";

export const IsLoading = ({ loading }) => (
	<LoadingContainer>
		<Loading size={50} animating={loading} color={"#138000"} />
	</LoadingContainer>
);
