import React, { useState } from "react";
import Button from "../../Form/Button";
import RequestPaymentModal from "@/components/Payments/RequestPaymentModal";

function RequestPay() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className="flex">
        <Button
          kind="primary"
          type="button"
          size="LARGE"
          className="w-full h-14 rounded-[0.5rem]"
          onClick={() => setIsOpen(true)}
        >
          Request a payment
        </Button>
      </div>
      <RequestPaymentModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default RequestPay;
