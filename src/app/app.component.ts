import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { ChatService } from './services/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  chats: Observable<any[]>;
  title = 'chatFirebase';
  constructor( public chatService: ChatService){

  }
  
}
