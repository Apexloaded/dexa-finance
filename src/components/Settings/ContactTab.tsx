import { useAuth } from "@/context/auth.context";
import React from "react";
import Label from "../Form/Label";
import Input from "../Form/Input";
import { formatWalletAddress, timestampToDate } from "@/libs/helpers";
import { CheckCheck, CopyIcon } from "lucide-react";
import useClipBoard from "@/hooks/clipboard.hook";
import Button from "../Form/Button";

function ContactTab() {
  const { user } = useAuth();
  const { copy, isCopied } = useClipBoard();

  return (
    <div className="w-full">
      <div className="bg-white max-w-4xl mx-auto mt-10 p-7">
        <div className="text-center max-w-md mx-auto">
          <p className="text-medium text-lg font-light">Contact</p>
          <p className="text-medium font-light">
            Dexapay will notify you about your transactions via email in the
            email address that you linked to your account below.
          </p>
        </div>
        <div className="max-w-xl mx-auto flex flex-col gap-y-7 my-8">
          <div className="flex gap-x-5 items-center">
            <Label
              title="Notification Email"
              className="w-24 md:w-32 text-right"
            />
            <div className="grid grid-cols-1 flex-1">
              <Input
                type="text"
                className="border border-medium/40 focus:outline-primary text-dark/70 rounded-md"
                value={user?.email}
                placeholder="Notifications"
              />
            </div>
          </div>
          <div className="flex gap-x-5 items-center">
            <Label title="General Email" className="w-24 md:w-32 text-right" />
            <div className="grid grid-cols-1 flex-1">
              <Input
                type="text"
                className="border border-medium/40 focus:outline-primary text-dark/70 rounded-md"
                value={user?.email}
                placeholder="General support"
              />
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

export default ContactTab;
