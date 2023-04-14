import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonMenu } from '@ionic/angular';
import { Equipo } from './INTERFACES/equipo';
import { Usuario } from './INTERFACES/usuario';
import { FirestoreService } from './SERVICIOS/firestore.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // usuario: string;
  // document: any = {
  //   usuario:"",
  //   data: {} as Usuario
  // }
  // arrayEquipos: any = [{
  //   id: "",
  //   data: {} as Equipo
  //  }];
  // email: string;
  // user;
  // @ViewChild('menu') menucito: IonMenu;
  // constructor(private router: Router, private route: ActivatedRoute, private firestoreService: FirestoreService) {}
  
  // ngOnInit() {
  //   this.route.params.subscribe(params =>
  //     {this.usuario = params['usuario'];});
  // }

  // cosas(){
  //   this.user = this.firestoreService.getUserAutenticado();
  //   this.usuario = this.user.usuario;
  //       // Sacar informacion personal
  //  this.firestoreService.consultarPorId("usuarios", this.usuario).subscribe((resultado) => {
  //   this.document.usuario = resultado.payload.id
  //   this.document.data = resultado.payload.data();
  //   this.email = this.document.data.correo;
  // });
  // // sacar los equipos del usuario
  // this.firestoreService.verEquipos("usuarios", this.usuario, "equipos").subscribe((resultado) => {
  //   this.arrayEquipos = [];
  //   resultado.forEach((equipos: any) => {
  //     this.arrayEquipos.push({
  //       id: equipos.payload.doc.id,
  //       data: equipos.payload.doc.data()
  //     });
  //   })
  //   });
  // }
  // perfil(){
  //   this.router.navigate(['/perfil', {usuario: this.usuario}]);
  //   this.menucito.close();
  // } 
  // verEquipo(team){
  //   console.log(team);
  // }
  // cerrarSesion() {
  //   this.router.navigate(['/login', {usuario: this.usuario, password: ""}]);
  //   this.menucito.close();
  // }
}

