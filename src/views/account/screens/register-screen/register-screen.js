import React, {useContext, useState, useEffect} from "react";
import {ScrollView} from "react-native";
import { RegisterBackground, RegisterCover, RegisterContainer, AuthInput, AuthButton, Title, BackButton } from "./register-screen.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import {TextInput} from "react-native-paper";
import { RegisterContext } from "../../context/register.context";
import { IsLoading } from "../../../../components/loading/loading.component";
import { Dropdown } from "../../../../components/dropdown/dropdown.component";

export const RegisterScreen = ({ navigation }) => {

  const {onRegister, loading, getLocations, locations} = useContext(RegisterContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [secured, setSecured] = useState(true);
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => getLocations(), []);

  return (
    <RegisterBackground>
     
      <IsLoading loading={loading} />
      <RegisterCover />
      <Title>Perfect Menu</Title>
      <RegisterContainer>
      <ScrollView>
        <AuthInput
          label="Full name"
          // value={}
          // textContentType="number"
          // keyboardType="tel"
          autoCapitalize="none"
          onChangeText={(name) => setName(name)}
        />
        <Spacer size="large">
        <AuthInput
          label="E-mail"
          // value={}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(email) => setEmail(email)}
        />
        </Spacer>
        <Spacer size="large">
        <AuthInput
          label="Phone number"
          // value={}
          // textContentType="number"
          // keyboardType="tel"
          autoCapitalize="none"
          onChangeText={(phone) => setPhone(phone)}
        />
        </Spacer>
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
      <Dropdown
          data={locations} onValueChange={ item => setLocation(item)} placeholder='Select Location *'
        />
        </Spacer>
        <AuthInput
          label="Full address"
          multiline
          numberOfLines={4}
          style={{height: 100}}
          autoCapitalize="none"
          onChangeText={(address) => setAddress(address)}
        />
      
        <Spacer size="large">
          <AuthButton
            icon="email"
            mode="contained"
            disabled={loading && true}
            onPress={() => onRegister(name, email, phone, password, location, address, navigation)}
          >
            {loading ? 'Loading' : 'Register'}
          </AuthButton>
        
        </Spacer>
        <Spacer size="large">
        <BackButton mode="contained" onPress={() => navigation.goBack()}>
          Back
        </BackButton>
      </Spacer>
        </ScrollView>
        
      </RegisterContainer>
     

    </RegisterBackground>
  );
}