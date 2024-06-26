import { Environment, getCurrentEnvironment } from "@/config/env.config";

export default function isLocal() {
  const env = getCurrentEnvironment();
  return env === Environment.localhost;
}
