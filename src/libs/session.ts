import { SignJWT, jwtVerify } from "jose";
import { SESSION_SECRET } from "@/config/constants";

const secretKey = SESSION_SECRET;
const key = new TextEncoder().encode(secretKey);
export async function encryptSession(payload: any, expires?: number) {
  const defaultExp = new Date().getTime() + 7 * 24 * 60 * 60;
  const exp = expires || defaultExp;
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(exp)
    .sign(key);
}

export async function decryptSession(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
