"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/auth.context";
import { useQuery } from "@tanstack/react-query";
import { fetchTxCount } from "@/actions/transaction.action";

type Props = {
  extra?: string;
};
function TxCount({ extra }: Props) {
  const [txCount, setTxCount] = useState<number>(0);
  const { isSmartWallet } = useAuth();

  const { data: txCountResponse } = useQuery({
    queryFn: () => fetchTxCount(),
    queryKey: ["tx-count"],
  });

  useEffect(() => {
    if (txCountResponse?.status == true) {
      setTxCount(txCountResponse.data);
    }
  }, [txCountResponse]);

  return (
    isSmartWallet &&
    txCount > 0 && (
      <p className="text-primary text-sm font-semibold">{txCount} Free {extra}</p>
    )
  );
}

export default TxCount;
