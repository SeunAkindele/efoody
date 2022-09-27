import React, { useContext, useState, useEffect } from "react";
import { RegisterBackground, RegisterCover, RegisterContainer, AuthInput, AuthButton } from "./register-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { TextInput } from "react-native-paper";
import { RegisterContext } from "../../context/register.context";
import { IsLoading } from "../../../../components/loading/loading.component";
import { Dropdown } from "../../../../components/dropdown/dropdown.component";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FooterActions, LoginFooter } from "../login-screen/login-screen.styles";
import { Text } from "../../../../components/typography/text.component";

export const RegisterScreen = ({ navigation }) => {
	const { onRegister, loading, getLocations, locations } = useContext(RegisterContext);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [phone, setPhone] = useState("");
	const [secured, setSecured] = useState(true);
	const [location, setLocation] = useState("");
	const [address, setAddress] = useState("");

	// useEffect(() => getLocations(), []);

	return (
		<RegisterBackground>
			<IsLoading loading={loading} />
			<RegisterContainer>
				<Spacer size="large">
					<LoginFooter>
						<FooterActions onPress={() => navigation.goBack()}>
							<MaterialCommunityIcons name="chevron-left" size={20} color="#138000" />
							<Text variant="tag">Previous</Text>
						</FooterActions>
					</LoginFooter>
				</Spacer>
				<Spacer size="large">
					<AuthInput label="Full name" underlineColor="#138000" activeUnderlineColor="#138000" autoCapitalize="none" onChangeText={(name) => setName(name)} />
				</Spacer>
				<Spacer size="large">
					<AuthInput label="E-mail" underlineColor="#138000" activeUnderlineColor="#138000" textContentType="emailAddress" keyboardType="email-address" autoCapitalize="none" onChangeText={(email) => setEmail(email)} />
				</Spacer>
				<Spacer size="large">
					<AuthInput label="Phone number" underlineColor="#138000" activeUnderlineColor="#138000" autoCapitalize="none" onChangeText={(phone) => setPhone(phone)} />
				</Spacer>
				<Spacer size="large">
					<AuthInput label="Password" underlineColor="#138000" activeUnderlineColor="#138000" textContentType="password" secureTextEntry={secured} autoCapitalize="none" right={<TextInput.Icon name="eye" color="#138000" onPress={() => setSecured(!secured)} />} onChangeText={(password) => setPassword(password)} />
				</Spacer>
				<Spacer size="large">
					<Dropdown data={[]} onValueChange={(item) => setLocation(item)} placeholder="Select Location *" />
				</Spacer>
				<Spacer size="large">
					<AuthInput underlineColor="#138000" activeUnderlineColor="#138000" label="Full address" multiline numberOfLines={4} style={{ height: 100 }} autoCapitalize="none" onChangeText={(address) => setAddress(address)} />
				</Spacer>
				<Spacer size="large">
					<AuthButton mode="contained" disabled={loading && true} onPress={() => onRegister(name, email, phone, password, location, address, navigation)}>
						{loading ? "Loading" : "Register"}
					</AuthButton>
				</Spacer>
			</RegisterContainer>
		</RegisterBackground>
	);
};
