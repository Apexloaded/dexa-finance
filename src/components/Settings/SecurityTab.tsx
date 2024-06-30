import { useAuth } from "@/context/auth.context";
import React, { useState } from "react";
import Label from "../Form/Label";
import Input from "../Form/Input";
import { formatWalletAddress, timestampToDate } from "@/libs/helpers";
import { CheckCheck, CopyIcon } from "lucide-react";
import useClipBoard from "@/hooks/clipboard.hook";
import Button from "../Form/Button";
import Switch from "../Form/Switch";

function SecurityTab() {
  const { user } = useAuth();
  const [isEmailAuth, setEmailAuth] = useState<boolean>(false);
  const [isAuthApp, setAuthApp] = useState<boolean>(false);
  const { copy, isCopied } = useClipBoard();

  const toggleEmailAuth = () => {
    const value = !isEmailAuth;
    setEmailAuth(value);
    // setItem(StorageTypes.DEXA_HIDE_BAL, value);
    // dispatch(setHideBalance(value));
  };

  const toggleAuthApp = () => {
    const value = !isAuthApp;
    setAuthApp(value);
    // setItem(StorageTypes.DEXA_HIDE_BAL, value);
    // dispatch(setHideBalance(value));
  };

  return (
    <div className="w-full">
      <div className="bg-white max-w-4xl mx-auto mt-10 p-7">
        <div className="text-center max-w-md mx-auto">
          <p className="text-medium text-lg font-light">Secure Your Account</p>
          <p className="text-medium/60 font-light">
            Setup 2FA on your account to restrict unauthorized users from
            accessing your account
          </p>
        </div>
        <div className="max-w-xl mx-auto flex flex-col gap-y-7 my-8">
          <div className="flex gap-x-5 items-start">
            <Label
              title="Email Auth"
              className="w-24 md:w-32 text-right mt-1"
            />
            <div className="flex-1">
              <div className="flex items-center gap-x-2">
                <Switch
                  type="checkbox"
                  checked={isEmailAuth}
                  onChange={toggleEmailAuth}
                />
                <p
                  className={`${
                    isEmailAuth ? "text-primary" : "text-medium"
                  } font-extralight`}
                >
                  {isEmailAuth ? "Enabled" : "Disabled"}
                </p>
              </div>
              <p className="mt-3 text-medium font-light text-sm">
                You will be required to authenticate your transactions using OTP
                sent to your email <span className="text-primary">{user?.email}</span>.
              </p>
            </div>
          </div>
          <div className="flex gap-x-5 items-start">
            <Label
              title="Authenticator App"
              className="w-24 md:w-32 text-right mt-1"
            />
            <div className="flex-1">
              <div className="flex items-center gap-x-2">
                <Switch
                  type="checkbox"
                  checked={isAuthApp}
                  onChange={toggleAuthApp}
                />
                <p
                  className={`${
                    isAuthApp ? "text-primary" : "text-medium"
                  } font-extralight`}
                >
                  {isAuthApp ? "Enabled" : "Disabled"}
                </p>
              </div>
              <p className="mt-3 text-medium text-sm font-light">
                If you lose access to your authentication device, use any of
                your backup codes to login to your account. Generate new backup
                codes.
              </p>
            </div>
          </div>
          <div className="flex justify-end mt-3">
            <Button kind={"primary"} type="button" disabled={true}>
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecurityTab;
