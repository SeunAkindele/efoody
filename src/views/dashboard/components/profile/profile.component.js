import React from "react";
import {Text} from "../../../../components/typography/text.component";
import { ucWord } from "../../../../components/utility/functions";
import {  DashboardProfile, User, DashboardProfileCover, Active } from "./profile.component.styles";

export const Profile = ({user}) => {
  return (
    <DashboardProfileCover>
      <DashboardProfile>
        <Text variant="small" color="black">{ucWord(user.location)}</Text><Active name="dot-single" />
      </DashboardProfile>
      <DashboardProfile>
        <Text variant="small" color="black">{ucWord(user.name)}</Text>
        <User name="user-circle-o" />
      </DashboardProfile>
    </DashboardProfileCover>
  )
}