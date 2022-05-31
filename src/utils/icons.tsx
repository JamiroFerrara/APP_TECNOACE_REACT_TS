import * as React from "react";
import { Ionicons, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import {colors} from '../theme'

export const UserIcon = () => {
  return (
    <Ionicons
      name="person"
      color={colors.primary[100]}
      style={{ marginRight: 10 }}
      size={20}
    />
  );
};

export const PasswordIcon = () => {
  return (
    <MaterialCommunityIcons
      name="form-textbox-password"
      color={colors.primary[100]}
      style={{ marginRight: 10 }}
      size={20}
    />
  );
};

export const ArrowLeft = () => {
  return (
    <Octicons
      name="arrow-left"
      color={colors.primary[100]}
      style={{position: "absolute", left: 20}}
      size={25}
    />
  );
};
