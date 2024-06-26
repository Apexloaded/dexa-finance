import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const register = yup.object({
  name: yup.string().required("Enter your display name"),
  username: yup.string().required("Enter your username"),
  terms: yup.boolean().oneOf([true], "You must agree to the terms"),
  bio: yup.string(),
});

export const registerResolver = {
  resolver: yupResolver(register),
};
