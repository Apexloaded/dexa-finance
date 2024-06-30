import { io } from "socket.io-client";
import { API } from "./config/constants";

const URL = `${API}`;

export const socket = io(URL);
