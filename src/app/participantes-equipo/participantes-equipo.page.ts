import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonButton } from '@ionic/angular';
import { CuerpoTecnico } from '../INTERFACES/cuerpo-tecnico';
import { FirestoreService } from '../SERVICIOS/firestore.service';
import { Futbol } from '../INTERFACES/futbol';
import { Usuario } from '../INTERFACES/usuario';

@Component({
  selector: 'app-participantes-equipo',
  templateUrl: './participantes-equipo.page.html',
  styleUrls: ['./participantes-equipo.page.scss'],
})
export class ParticipantesEquipoPage implements OnInit {
  rol: string;
  usuario: string;
  codigo:string;
  @ViewChild('boton') botoncito: IonButton;
  //document para añadir estadisticas futbol
  arrayCuerpoTecnico: any = [{
    id: "",
    data: {} as CuerpoTecnico
   }];
  //document para añadir estadisticas cuerpo tecnico
  arrayJugadores: any = [{
    id: "",
    data: {} as Futbol
   }];
  //document para el boton
  document: any = {
    codigo:"",
    data: {} as Usuario
  }
  boton: string;
  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario']
      this.codigo = params['codigo'];});
    
      this.firestoreService.comprobarEquipo("usuarios", this.usuario, "equipos", this.codigo).subscribe((resultado) => {
        this.document.codigo = resultado.payload.id
        this.document.data = resultado.payload.data(); 
        this.rol = this.document.data.rol;
        if (this.document.data.rol == "entrenador"){
          this.boton = "false";
        }
      });
      // Cuerpo Técnico
      this.firestoreService.verEquipos("equipos", this.codigo, "Cuerpo Tecnico").subscribe((resultado) => {
        this.arrayCuerpoTecnico = [];
        resultado.forEach((equipos: any) => {
        this.arrayCuerpoTecnico.push({
          id: equipos.payload.doc.id,
          data: equipos.payload.doc.data()   
        });
      })
      });

      // Jugadores
      this.firestoreService.verEquipos("equipos", this.codigo, "Jugadores").subscribe((resultado) => {
        this.arrayJugadores = [];
        resultado.forEach((equipos: any) => {
          this.arrayJugadores.push({
            id: equipos.payload.doc.id,
            data: equipos.payload.doc.data() 
          });
        })
        });
  }

  eliminarDirectivo(nombreDirectivo){
    console.log(nombreDirectivo);
    this.firestoreService.borrarEquipo("equipos", this.codigo, "Cuerpo Tecnico", nombreDirectivo);
    this.firestoreService.borrarEquipo("usuarios", nombreDirectivo, "equipos", this.codigo);
  }

  eliminarJugador(nombreJugador){
    console.log(nombreJugador);
    this.firestoreService.borrarEquipo("equipos", this.codigo, "Jugadores", nombreJugador);
    this.firestoreService.borrarEquipo("usuarios", nombreJugador, "equipos", this.codigo);
  }

  estadisticasDirectivo(nombreDirectivo){
    this.router.navigate(['/estadisticas-miembros', {usuario: this.usuario, "codigo": this.codigo, "nombre": nombreDirectivo,
    "rol":"Cuerpo Tecnico"}]);
  }

  estadisticasJugador(nombreJugador){
    if (this.document.data.tipo == "Fútbol" || this.document.data.tipo == "Balonmano") {
    this.router.navigate(['/estadisticas-jugadores', {usuario: this.usuario, "codigo": this.codigo, "nombre": nombreJugador,
    "rol":"Jugadores"}]);
    }
    else if (this.document.data.tipo == "Baloncesto") {
      this.router.navigate(['/estadisticas-jugadores-baloncesto', {usuario: this.usuario, "codigo": this.codigo, "nombre": nombreJugador,
      "rol":"Jugadores"}]);
    }
    else {
      this.router.navigate(['/estadisticas-jugadores-juego', {usuario: this.usuario, "codigo": this.codigo, "nombre": nombreJugador,
      "rol":"Jugadores"}]);
    }
  }

  volverPaginaEquipo(){
    this.router.navigate(['/pagina-equipo', {usuario: this.usuario, "codigoEquipo": this.codigo}]);
  }
}
