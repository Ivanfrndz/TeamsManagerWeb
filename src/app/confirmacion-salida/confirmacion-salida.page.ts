import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../SERVICIOS/firestore.service';

@Component({
  selector: 'app-confirmacion-salida',
  templateUrl: './confirmacion-salida.page.html',
  styleUrls: ['./confirmacion-salida.page.scss'],
})
export class ConfirmacionSalidaPage implements OnInit {
  usuario: string;
  codigo: string;
  rol: string;

  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario']
      this.codigo = params['codigo']
      this.rol = params['rol'];});
  }

  irseEquipo(){
    if (this.rol == "Jugador"){
      this.firestoreService.borrarEquipo("equipos", this.codigo, "Jugadores", this.usuario);
      this.firestoreService.borrarEquipo("usuarios", this.usuario, "equipos", this.codigo);
      this.router.navigate(['/perfil', {usuario: this.usuario}]);
    } else {
      this.firestoreService.borrarEquipo("equipos", this.codigo, "Cuerpo Tecnico", this.usuario);
      this.firestoreService.borrarEquipo("usuarios", this.usuario, "equipos", this.codigo);
      this.router.navigate(['/perfil', {usuario: this.usuario}]);
    }
 }

  cancelar(){
    this.router.navigate(['/pagina-equipo', {usuario: this.usuario, codigoEquipo: this.codigo}]);
  }
}
