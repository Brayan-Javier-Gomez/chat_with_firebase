import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interfaces/chat.interface';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private fireColections: AngularFirestoreCollection<Mensaje>;

  public chats: Mensaje[] = [];

  public usuario = {
nombre: '',
uid: '',
  };

  constructor(private firestore: AngularFirestore,
              private auth: AngularFireAuth) {

                this.auth.authState.subscribe(user=>{
                  if (!user){
                    return;
                  }

                  this.usuario.nombre = user.displayName;
                  this.usuario.uid = user.uid;
                });


  }

  cargarmensajes() {

    this.fireColections = this.firestore.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc')
                                                                                .limit(20));
    return this.fireColections.valueChanges()
      .pipe(
        map((mensajes: Mensaje[]) => {
         
          this.chats = mensajes;

          this.chats = [];

          for (let mensaje of mensajes) {
            this.chats.unshift(mensaje);
          }

          return this.chats;
        })



      );
  }



  enviarMensaje(texto: string) {

    let mensaje: Mensaje = {
      nombre: this.usuario.nombre,
      message: texto,
      fecha: new Date().getTime(),
      uid: this.usuario.uid
    };

    return this.fireColections.add(mensaje);

  }

login(proveedor: string){

this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

}

logout(){
  this.auth.signOut();
  this.usuario = {
    nombre: '',
    uid: ''
  };
}


}
