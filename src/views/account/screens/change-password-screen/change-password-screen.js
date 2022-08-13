import React, {useContext, useState} from "react";
import { LoginBackground, LoginCover, LoginContainer, AuthInput, AuthButton, Title } from "./change-password-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { LoginContext } from "../../context/login.context";
import { IsLoading } from "../../../../components/loading/loading.component";
import {TextInput} from "react-native-paper";

export const ChangePasswordScreen = ({ navigation, route }) => {

  const { onChangePassword, loading } = useContext(LoginContext);
  const {email} = route.params;
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [secured, setSecured] = useState(true);

  return (
    <LoginBackground>
      <IsLoading loading={loading} />
      <LoginCover />
      <Title>Perfect Menu</Title>
      <LoginContainer>
        <AuthInput
          label="Verification Code"
          // value={}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(code) => setCode(code)}
        />
        <Spacer size="large">
          <AuthInput
            label="New Password"
            // value={}
            textContentType="password"
            secureTextEntry={secured}
            autoCapitalize="none"
            right={<TextInput.Icon name="eye" onPress={() => setSecured(!secured)} />}
            onChangeText={(password) => setPassword(password)}
          />
        </Spacer>
        
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            disabled={loading && true}
            onPress={() => onChangePassword(password, code, email, navigation)}
          >
            {loading ? 'Loading' : 'Change Password'}
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