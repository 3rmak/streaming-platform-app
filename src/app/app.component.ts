import { Component, OnInit } from '@angular/core';
import { SocketIoService } from '../shared/services/socket-io.service';
import { HttpApiService } from '../shared/services/http-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public newMessage = '';
  public newVideoLink = '';
  public messageList: string[] = [];
  title = 'streaming-platform-app';

  constructor(
    private socketIoService: SocketIoService,
    private http: HttpApiService
  ) {}

  ngOnInit() {
    this.socketIoService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
    });
  }

  sendMessage() {
    this.socketIoService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

  setVideoLink() {
    this.http.setVideoLink(this.newVideoLink).then();
    // console.log('this.newVideoLink', this.newVideoLink);
  }
}
