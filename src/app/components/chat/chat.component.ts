import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string;
  constructor() { }

  ngOnInit(): void {
  }

  enviar_mensaje(){
    console.log(this.mensaje);
  }

}
