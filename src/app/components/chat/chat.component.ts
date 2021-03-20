import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { Mensaje } from '../../interfaces/chat.interface';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensaje: string;
  elemeto: any;
  constructor(public chatService: ChatService) {
   chatService.cargarmensajes().subscribe(
() => {
setTimeout(() => {

  this.elemeto.scrollTop = this.elemeto.scrollHeight;

}, 30);

}
   );



}


ngOnInit(): void {
  this.elemeto = document.getElementById('app-mensajes');
}

enviar_mensaje() {
  if (this.mensaje === undefined || this.mensaje === '') {
    return;
  }

  

  this.chatService.enviarMensaje(this.mensaje).then(
    ()=>{
     
      this.mensaje = '';
    }
    )
    .catch(() => {
      console.error('no se pudo enviar');
      this.mensaje = '';
    });
}

}
