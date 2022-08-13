import React, { useContext, useState, useEffect } from "react";
import { SafeArea } from "../../../../components/utility/safe-area.component";
import { SettingContext } from "../../context/setting.context";
import { ProfileInput, ProfileButton, ProfileContainer } from "./manage-profile.styles";
import { Spacer } from "../../../../components/spacer/spacer.component";
import { IsLoading } from "../../../../components/loading/loading.component";
import {TextInput} from "react-native-paper";

export const ProfileManagement = ({ route }) => {
  const {userphone, userAddress} = route.params;

  const { loading, manageProfile } = useContext(SettingContext);

  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState(userphone);
  const [address, setAddress] = useState(userAddress);
  const [secured, setSecured] = useState(true);
 
  return (
    <SafeArea>
      <IsLoading loading={loading} />
      <ProfileContainer>

        <Spacer size="large">
          <ProfileInput
            label="Change Password"
            textContentType="password"
            secureTextEntry={secured}
            autoCapitalize="none"
            right={<TextInput.Icon name="eye" onPress={() => setSecured(!secured)} />}
            onChangeText={(password) => setPassword(password)}
          />
        </Spacer>

        <Spacer size="large">
          <ProfileInput
            label={phone}
            keyboardType="tel"
            autoCapitalize="none"
            onChangeText={(u) => setPhone(u)}
          />
        </Spacer>

        <Spacer size="large">
          <ProfileInput
            label={address ? address : 'Address'}
            multiline
            numberOfLines={5}
            style={{height: 150}}
            autoCapitalize="none"
            onChangeText={(u) => setAddress(u)}
          />
        </Spacer>

        <Spacer size="large">
          <ProfileButton
            mode="contained"
            onPress={() => manageProfile(phone, password, address)}
          >
            Save
          </ProfileButton>
        </Spacer>
      </ProfileContainer>
    </SafeArea>
  );
};