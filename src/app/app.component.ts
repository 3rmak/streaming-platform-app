import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../shared/services/socket-io.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public newMessage = '';
  public messageList: string[] = [];
  title = 'streaming-platform-app';

  constructor(private socketIoService: SocketIoService) {}

  ngOnInit() {
    this.socketIoService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    });
  }

  sendMessage() {
    this.socketIoService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
