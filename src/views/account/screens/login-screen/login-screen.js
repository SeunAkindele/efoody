import React, {useContext, useState} from "react";
import {TouchableOpacity} from "react-native";
import { LoginBackground, LoginCover, LoginContainer, AuthInput, AuthButton, Title, ErrorContainer } from "./login-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { Text } from "../../../../components/typography/text.component";
import {TextInput} from "react-native-paper";
import { LoginContext } from "../../context/login.context";
import { IsLoading } from "../../../../components/loading/loading.component";

export const LoginScreen = ({ navigation }) => {

  const { onLogin, loading } = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secured, setSecured] = useState(true);

  return (
    <LoginBackground>
      <IsLoading loading={loading} />
      <LoginCover />
      <Title>Perfect Menu</Title>
      <LoginContainer>
      <AuthInput
          label="E-mail"
          // value={}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
        />
        <Spacer size="large">
          <AuthInput
            label="Password"
            // value={}
            textContentType="password"
            secureTextEntry={secured}
            autoCapitalize="none"
            right={<TextInput.Icon name="eye" onPress={() => setSecured(!secured)} />}
            onChangeText={(password) => setPassword(password)}
          />
        </Spacer>
        
        <Spacer size="large">
          
            <TouchableOpacity onPress={() => navigation.navigate("VerifyEmail")}>
              <Text variant="error">Forgot Password?</Text>
            </TouchableOpacity>
          
        </Spacer>
        
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            disabled={loading && true}
            onPress={() => onLogin(email, password)}
          >
            {loading ? 'Loading' : 'Login'}
          </AuthButton>
        </Spacer>
      </LoginContainer>
      <Spacer size="large">
        <AuthButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </LoginBackground>
  );
}