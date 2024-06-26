import CryptoJS, { AES } from "crypto-js";

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET!;

export function encrypt(key: string) {
  return AES.encrypt(key, SECRET_KEY).toString();
}

export function decrypt(key: string) {
  return AES.decrypt(key, SECRET_KEY).toString(CryptoJS.enc.Utf8);
}
