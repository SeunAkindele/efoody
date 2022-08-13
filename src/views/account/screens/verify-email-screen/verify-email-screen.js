import React, {useContext, useState} from "react";
import { LoginBackground, LoginCover, LoginContainer, AuthInput, AuthButton, Title, ErrorContainer } from "./verify-email-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { LoginContext } from "../../context/login.context";
import { IsLoading } from "../../../../components/loading/loading.component";

export const VerifyEmailScreen = ({ navigation }) => {

  const { onVerifyEmail, loading } = useContext(LoginContext);

  const [email, setEmail] = useState("");

  return (
    <LoginBackground>
      <IsLoading loading={loading} />
      <LoginCover />
      <Title>Perfect Menu</Title>
      <LoginContainer>
      <Spacer size="large">
      <AuthInput
          label="Registered E-mail"
          // value={}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
        />
       </Spacer>
        
        <Spacer size="large">
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            disabled={loading && true}
            onPress={() => onVerifyEmail(email, navigation)}
          >
            {loading ? 'Loading' : 'Verify Email'}
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