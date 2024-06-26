import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const claimPay = yup.object({
  paymentCode: yup.string().required("Enter payment code").min(6),
  email: yup
    .string()
    .required("Enter your email address")
    .email("Enter a valid email address"),
});

export const claimPaymentResolver = {
  resolver: yupResolver(claimPay),
};
