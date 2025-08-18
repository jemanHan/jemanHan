import { Socket, Server } from 'socket.io';
export declare class ChatGateway {
    server: Server;
    handleMessageToRoom(socket: Socket, data: any): void;
}
export declare class RoomGateway {
    private readonly chatGateway;
    constructor(chatGateway: ChatGateway);
    rooms: any[];
    server: Server;
    handleMessage(data: any): void;
    handleJoinRoom(socket: Socket, data: any): void;
}
