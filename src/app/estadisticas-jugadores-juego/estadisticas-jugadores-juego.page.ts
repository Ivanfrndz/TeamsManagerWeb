import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lol } from '../INTERFACES/lol';
import { Usuario } from '../INTERFACES/usuario';
import { FirestoreService } from '../SERVICIOS/firestore.service';

@Component({
  selector: 'app-estadisticas-jugadores-juego',
  templateUrl: './estadisticas-jugadores-juego.page.html',
  styleUrls: ['./estadisticas-jugadores-juego.page.scss'],
})
export class EstadisticasJugadoresJuegoPage implements OnInit {
  usuario: string;
  codigo: string;
  rol: string;
  nombre: string;
  document: any = {
    nombre:"",
    data: {} as Lol
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
