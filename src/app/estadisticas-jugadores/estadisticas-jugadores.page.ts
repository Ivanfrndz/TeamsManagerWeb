import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../SERVICIOS/firestore.service';
import { Futbol } from '../INTERFACES/futbol';
import { Usuario } from '../INTERFACES/usuario';

@Component({
  selector: 'app-estadisticas-jugadores',
  templateUrl: './estadisticas-jugadores.page.html',
  styleUrls: ['./estadisticas-jugadores.page.scss'],
})
export class EstadisticasJugadoresPage implements OnInit {

  usuario: string;
  codigo: string;
  rol: string;
  nombre: string;
  document: any = {
    nombre:"",
    data: {} as Futbol
  }
  document2: any = {
    nombre:"",
    data: {} as Usuario
  }
  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario']
      this.codigo = params['codigo']
      this.rol = params['rol']
      this.nombre = params['nombre'];});

      this.firestoreService.comprobarEquipo("equipos", this.codigo, this.rol, this.nombre). subscribe((resultado) => {
        this.document.nombre = resultado.payload.id;
        this.document.data = resultado.payload.data();
      });

      this.firestoreService.consultarPorId("usuarios", this.nombre). subscribe((resultado) => {
        this.document2.nombre = resultado.payload.id;
        this.document2.data = resultado.payload.data();
      });
  }

  volverParticipantes(){
    this.router.navigate(['/participantes-equipo', {usuario: this.usuario, "codigo": this.codigo}]);
  }

}