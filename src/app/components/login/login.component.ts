import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public chatService: ChatService) { }

  login(cuenta: string){


this.chatService.login(cuenta);

  }

  logout(){
    this.chatService.logout();
  }

  ngOnInit(): void {
  }

}
