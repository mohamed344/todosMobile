import Constants from 'expo-constants';
import { io } from "socket.io-client";
export default io(Constants?.manifest?.extra?.SOCKET, {
    auth: {
        token: Constants?.manifest?.extra?.X_API_KEY
    }
});;


interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
    hello: () => void;
}

interface InterServerEvents {
    ping: () => void;
}

interface SocketData {
    name: string;
    age: number;
}


