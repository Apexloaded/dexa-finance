import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const deposit = yup.object({
  token: yup.string().required("Choose a token"),
  amount: yup
    .number()
    .positive("Enter a valid amount")
    .required("Enter deposit amount"),
});

export const depositResolver = {
  resolver: yupResolver(deposit),
};
