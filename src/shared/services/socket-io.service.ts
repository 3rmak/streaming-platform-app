import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketIoService {
  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  private socket: Socket;

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  public sendMessage(message: string) {
    this.socket.emit('message', message);
  }

  public getNewMessage = () => {
    this.socket.on('message', message => {
      this.message$.next(message);
    });

    return this.message$.asObservable();
  };
}
