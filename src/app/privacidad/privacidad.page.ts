import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.page.html',
  styleUrls: ['./privacidad.page.scss'],
})
export class PrivacidadPage implements OnInit {
  usuario: string;
  nombre: string;
  apellidos: string;
  password: string;
  password2: string;
  correo: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario'],
      this.nombre = params['nombre'],
      this.apellidos = params['apellidos'],
      this.password = params['password'],
      this.password2 = params['password2'],
      this.correo = params['correo'];});
  }

  aceptar(){ 
    this.router.navigate(['/registro', {checkbox: true, usuario:this.usuario, nombre: this.nombre, apellidos: this.apellidos, password: this.password,
    password2: this.password2, correo: this.correo}]);
  } // fin funcion aceptar
}
