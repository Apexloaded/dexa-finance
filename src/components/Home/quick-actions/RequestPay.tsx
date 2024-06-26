import React from "react";
import Button from "../../Form/Button";

function RequestPay() {
  return (
    <div className="flex">
      <Button kind="primary" type="button" size="LARGE" className="w-full h-14 rounded-[0.5rem]">
        Request a payment
      </Button>
    </div>
  );
}

export default RequestPay;
