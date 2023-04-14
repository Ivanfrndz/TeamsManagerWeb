import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Baloncesto } from '../INTERFACES/baloncesto';
import { Usuario } from '../INTERFACES/usuario';
import { FirestoreService } from '../SERVICIOS/firestore.service';

@Component({
  selector: 'app-estadisticas-jugadores-baloncesto',
  templateUrl: './estadisticas-jugadores-baloncesto.page.html',
  styleUrls: ['./estadisticas-jugadores-baloncesto.page.scss'],
})
export class EstadisticasJugadoresBaloncestoPage implements OnInit {
  usuario: string;
  codigo: string;
  rol: string;
  nombre: string;
  document: any = {
    nombre:"",
    data: {} as Baloncesto
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
