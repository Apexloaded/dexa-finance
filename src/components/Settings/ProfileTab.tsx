import { useAuth } from "@/context/auth.context";
import React from "react";
import Label from "../Form/Label";
import Input from "../Form/Input";
import { formatWalletAddress, timestampToDate } from "@/libs/helpers";
import { CheckCheck, CopyIcon } from "lucide-react";
import useClipBoard from "@/hooks/clipboard.hook";
import Button from "../Form/Button";

function ProfileTab() {
  const { user } = useAuth();
  const { copy, isCopied } = useClipBoard();

  return (
    <div className="w-full">
      <div className="bg-white max-w-4xl mx-auto mt-10 p-7">
        <div className="text-center">
          <p className="text-medium text-lg font-light">Your Profile</p>
        </div>
        <div className="max-w-xl mx-auto flex flex-col gap-y-7 my-8">
          <div className="flex gap-x-5 items-center">
            <Label title="Display Name" className="w-24 md:w-32 text-right" />
            <div className="grid grid-cols-1 flex-1">
              <Input
                type="text"
                className="border border-medium/40 focus:outline-primary text-dark/70 rounded-md"
                value={user?.name}
              />
            </div>
          </div>
          <div className="flex gap-x-5 items-center">
            <Label title="Username" className="w-24 md:w-32 text-right" />
            <div className="flex-1">
              <Input
                type="text"
                className="border border-medium/40 focus:outline-primary text-dark/70 rounded-md"
                value={user?.username}
              />
            </div>
          </div>
          <div className="flex gap-x-5 items-center">
            <Label title="Joined At" className="w-24 md:w-32 text-right" />
            <div className="flex-1">
              <p className="text-dark/70 font-bold">{user?.createdAt}</p>
            </div>
          </div>
          <div className="flex gap-x-5 items-center">
            <Label title="Default Wallet" className="w-24 md:w-32 text-right" />
            <div className="flex-1 flex gap-x-2 items-center">
              <p className="text-dark/70 font-bold inline md:hidden">{formatWalletAddress(`${user?.wallet}`)}</p>
              <p className="text-dark/70 font-bold hidden md:inline">{user?.wallet}</p>
              {isCopied ? (
                <CheckCheck size={16} className="text-primary" />
              ) : (
                user?.wallet && (
                  <CopyIcon
                    size={16}
                    className="cursor-pointer text-medium"
                    onClick={async () => await copy(`${user?.wallet}`)}
                  />
                )
              )}
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

export default ProfileTab;
