import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
  
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from 'src/environments/environment';

firebase.initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  storageRef = firebase.app().storage().ref();

  constructor(private angularFirestore: AngularFirestore) { }

  //Guardar el usuario
  usuario: string;

  guardarUserAutenticado(user) {
    this.usuario = user;
  }

  public getUserAutenticado() {
    return {
      usuario: this.usuario,
    };
  }

  // Insertar datos a una coleccion y a su propio documento   
  public insertarConId(coleccion, doc, datos){
    return this.angularFirestore.collection(coleccion).doc(doc).set(datos);
  }

  // Conseguir los datos de un documento dentro de una coleccion
  public consultarPorId(coleccion, documentId) {
    return this.angularFirestore.collection(coleccion).doc(documentId).snapshotChanges();
  }

  // Modificar nombre, apellidos y correo de la coleccion usuarios y el documento que quieras
  public modificarUsuario(coleccion, documentId, nombre1, apellidos1, correo1){
    return this.angularFirestore.collection(coleccion).doc(documentId).update({nombre: nombre1, apellidos: apellidos1, correo: correo1});
  }

  // Modificar contraseña de la coleccion usuarios y el documento que quieras
  public modificarPassword(coleccion, documentId, pass){
    return this.angularFirestore.collection(coleccion).doc(documentId).update({password: pass});
  }

  // Borrar un documento de una coleccion
  public cambiarUsuario(coleccion, documentId) {
    return this.angularFirestore.collection(coleccion).doc(documentId).delete();
  }

  // Insertar un documento dentro de la coleccion de un documento que esta dentro de una coleccion
  public insertarEquipos(coleccion, doc, coleccion2, doc2, datos){
    return this.angularFirestore.collection(coleccion).doc(doc).collection(coleccion2).doc(doc2).set(datos);
  }

  // Insertar en un documento que se encuentro dentro de la coleccion de un documento que a su vez se encuentra dentro de otra coleccion de 
  // otro documento que se encuentra en una coleccion
  public entrenamientos(coleccion, doc, coleccion2, doc2, coleccion3, doc3, datos){
    return this.angularFirestore.collection(coleccion).doc(doc).collection(coleccion2).doc(doc2).collection(coleccion3).doc(doc3).set(datos);
  }
  //NUEVOS
  public entrenamientos2(coleccion, doc, coleccion2, doc2, coleccion3, doc3){
    return this.angularFirestore.collection(coleccion).doc(doc).collection(coleccion2).doc(doc2).collection(coleccion3).doc(doc3).snapshotChanges();
  }

  public actualizarFinalizacion(coleccion, documentId, coleccion2, id, finalizar){
    return this.angularFirestore.collection(coleccion).doc(documentId).collection(coleccion2).doc(id).update({finalizado: finalizar});
  }

  public finalizar(coleccion, doc, coleccion2, doc2, resumen, golesEquipo, golesRival){
    return this.angularFirestore.collection(coleccion).doc(doc).collection(coleccion2).doc(doc2).update({resumen: resumen, golesEquipo: golesEquipo, golesRival: golesRival});
  }

  public finalizarEntreno(coleccion, doc, coleccion2, doc2, resumen){
    return this.angularFirestore.collection(coleccion).doc(doc).collection(coleccion2).doc(doc2).update({resumen: resumen});
  }


  // Conseguir los datos de una coleccion que se encuentra dentro de un documento que se encuentra dentro de una coleccion
  public verEquipos(coleccion, documentId, coleccion2) {
    return this.angularFirestore.collection(coleccion).doc(documentId).collection(coleccion2).snapshotChanges();
  }

  // Conseguir los datos de un documento que se encuentra dentro de la coleccion de un documento que esta en una colección
  public comprobarEquipo(coleccion, documentId, coleccion2, id) {
    return this.angularFirestore.collection(coleccion).doc(documentId).collection(coleccion2).doc(id).snapshotChanges();
  }

  // Borrar el documento que se encuentra dentro de la coleccion de un documento dentro de una coleccion
  public borrarEquipo(coleccion, documentId, coleccion2, documentid2){
    return this.angularFirestore.collection(coleccion).doc(documentId).collection(coleccion2).doc(documentid2).delete();
  }

  // Conseguir los datos de una coleccion dentro de un documento que se encuentra en la coleccion dentro de un documento dentro de una 
  // coleccion 
  public entrenamiento2(coleccion, documentId, coleccion2, id, coleccion3) {
    return this.angularFirestore.collection(coleccion).doc(documentId).collection(coleccion2).doc(id).collection(coleccion3).snapshotChanges();
  }

  // Borrar un documento que se encuentra dentro de la coleccion de un documento que se encuentra en la coleccion de un documento dentro de
  // una coleccion
  public borrarConvocado(coleccion, documentId, coleccion2, id, coleccion3, id2) {
    return this.angularFirestore.collection(coleccion).doc(documentId).collection(coleccion2).doc(id).collection(coleccion3).doc(id2).delete();
  }

  async subirImagen(usuario: string, imgBase64: any){
    try{
      let respueta = await this.storageRef.child("fotosPerfil/" + usuario).putString(imgBase64, 'data_url');
      console.log(respueta);
      return await respueta.ref.getDownloadURL();
    }catch(err){
      console.log(err);
      return null;
    }
  }

  public modificarFoto(coleccion, usuario, foto){
    return this.angularFirestore.collection(coleccion).doc(usuario).update({foto: foto });
  }
}
