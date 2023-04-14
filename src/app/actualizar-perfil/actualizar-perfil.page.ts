import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../SERVICIOS/firestore.service';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.page.html',
  styleUrls: ['./actualizar-perfil.page.scss'],
})
export class ActualizarPerfilPage implements OnInit {

  usuario: string;
  nombre: string;
  apellidos: string;
  correo: string;

  nombre01: string;
  apellidos01: string;
  correo01: string;

  constructor(private firestoreService: FirestoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario']
       this.nombre = params['nombre']
       this.correo = params['correo']
       this.apellidos = params['apellidos'];});
  }

  volverHome(){
    this.router.navigate(['/perfil', {usuario: this.usuario}]);
  }

  /*
  cambiarUsuario(){
    this.router.navigate(['/cambiar-usuario', {usuario: this.usuario}]);
  }
  */

  cambiarPassword(){
    this.router.navigate(['/cambiar-password', {usuario: this.usuario}]);
  }
  
  actualizar(){
    if (this.nombre01 == undefined && this.apellidos01 == undefined && this.correo01 == undefined) 
    {
      this.firestoreService.modificarUsuario("usuarios", this.usuario, this.nombre, this.apellidos, this.correo);
      this.router.navigate(['/perfil', {usuario: this.usuario}]); 
    }

    else if (this.nombre01 != undefined && this.apellidos01 == undefined && this.correo01 == undefined)
    {
      this.firestoreService.modificarUsuario("usuarios", this.usuario, this.nombre01, this.apellidos, this.correo);
      this.router.navigate(['/perfil', {usuario: this.usuario}]);
    }

    else if (this.nombre01 != undefined && this.apellidos01 != undefined && this.correo01 == undefined) 
    {
      this.firestoreService.modificarUsuario("usuarios", this.usuario, this.nombre01, this.apellidos01, this.correo);
      this.router.navigate(['/perfil', {usuario: this.usuario}]);
    }   

    else if (this.nombre01 != undefined && this.apellidos01 == undefined && this.correo01 != undefined) 
    {
      this.firestoreService.modificarUsuario("usuarios", this.usuario, this.nombre01, this.apellidos, this.correo01);
      this.router.navigate(['/perfil', {usuario: this.usuario}]);
    }

    else if (this.nombre01 == undefined && this.apellidos01 != undefined && this.correo01 == undefined)
    {
      this.firestoreService.modificarUsuario("usuarios", this.usuario, this.nombre, this.apellidos01, this.correo);
      this.router.navigate(['/perfil', {usuario: this.usuario}]);
    }

    else if (this.nombre01 == undefined && this.apellidos01 == undefined && this.correo01 != undefined)
    {
      this.firestoreService.modificarUsuario("usuarios", this.usuario, this.nombre, this.apellidos, this.correo01);
      this.router.navigate(['/perfil', {usuario: this.usuario}]);
    }

    else if (this.nombre01 == undefined && this.apellidos01 != undefined && this.correo01 != undefined)
    {
      this.firestoreService.modificarUsuario("usuarios", this.usuario, this.nombre, this.apellidos01, this.correo01);
      this.router.navigate(['/perfil', {usuario: this.usuario}]);
    }

    else 
    {
      this.firestoreService.modificarUsuario("usuarios", this.usuario, this.nombre01, this.apellidos01, this.correo01);
      this.router.navigate(['/perfil', {usuario: this.usuario}]);
    }
  }
}
