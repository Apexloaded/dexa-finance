"use client";

import { SocketEvents } from "@/libs/enums";
import { socket } from "@/socket";
import { useEffect, useState } from "react";

function useSocket() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
      console.log("Connected");
      setIsConnected(true);
    }

    function onDisconnect() {
      console.log("Disconnected");

      setIsConnected(false);
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  const emit = <T>(event: SocketEvents, payload: T) => {
    socket.emit(event, payload);
  };

  return { emit };
}

export default useSocket;
