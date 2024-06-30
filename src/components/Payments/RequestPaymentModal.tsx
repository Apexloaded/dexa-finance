"use client";

import React, { Fragment } from "react";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Button from "../Form/Button";
import { InfoIcon, XIcon } from "lucide-react";

import RequestPaymentForm from "./RequestPaymentForm";

type Props = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

function RequestPaymentModal({ isOpen, setIsOpen }: Props) {
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50  overflow-y-auto scrollbar-hide"
        onClose={closeModal}
      >
        <div className="min-h-screen bg-white md:bg-transparent md:px-4 text-center">
          <TransitionChild
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-dark/50" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="inline-block w-full max-w-xl max-h-svh md:max-h-[45rem] pb-5 md:pb-10 md:my-8 overflow-scroll scrollbar-hide text-left align-middle transition-all transform bg-white md:shadow-2xl rounded-2xl">
              <DialogTitle
                as="h3"
                className="text-lg px-4 py-2 flex top-0 sticky z-20 bg-white border-b border-light justify-between items-center leading-6 m-0 text-dark/80"
              >
                <div className="flex items-center gap-x-2">
                  <span className="font-bold">Request Payment</span>
                </div>
                <Button
                  shape={"CIRCLE"}
                  kind="clear"
                  type={"button"}
                  onClick={closeModal}
                  className={"hover:bg-medium/20"}
                >
                  <XIcon size={22} />
                </Button>
              </DialogTitle>
              <div className="flex flex-col gap-5 px-5 pt-2 ">
                <div className="flex items-center gap-x-1">
                  <InfoIcon size={16} className="text-info" />
                  <p className="text-info font-thin">
                    You can request payment through email
                  </p>
                </div>
                <RequestPaymentForm />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
}

export default RequestPaymentModal;
