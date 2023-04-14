import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuerpoTecnico } from '../INTERFACES/cuerpo-tecnico';
import { Equipo } from '../INTERFACES/equipo';
import { FirestoreService } from '../SERVICIOS/firestore.service';
import { Futbol } from '../INTERFACES/futbol';
import { Baloncesto } from '../INTERFACES/baloncesto';
import { Lol } from '../INTERFACES/lol';

@Component({
  selector: 'app-unirse-equipo',
  templateUrl: './unirse-equipo.page.html',
  styleUrls: ['./unirse-equipo.page.scss'],
})
export class UnirseEquipoPage implements OnInit {
  //variables
  usuario: string;
  codigoEquipito: string;
  mensaje: string;
  rol: string;
  //document para añadir el equipo
  document: any = {
    codigo:"",
    data: {} as Equipo
  }
  //document para añadir estadisticas futbol
  document2: any = {
    usuario: "",
     data: {} as Futbol
  }
  //document para añadir estadisticas eSports
  document4: any = {
    usuario: "",
    data: {} as Lol
  }
  //document para añadir estadisticas Baloncesto
  document5: any = {
    usuario: "",
    data: {} as Baloncesto
  }
  //document para añadir estadisticas cuerpo tecnico
  document3: any = {
    usuario: "",
    data: {} as CuerpoTecnico
  }
  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) { }
  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario'];});
  }
  roles($event){
    this.rol = $event.target.value;
  }
  Unirse(){
    if (this.codigoEquipito == undefined || this.rol == undefined){
      this.mensaje = "Complete los campos de la solitud por favor";
    }
    else {
      this.firestoreService.consultarPorId("equipos", this.codigoEquipito).subscribe((resultado) => {
        if(resultado.payload.data() != null) { // Comprobamos que el equipo con la id metida existe
          this.document.codigo = resultado.payload.id 
          this.document.data = resultado.payload.data(); // metemos todos los datos del equipo en this.document.data
          this.firestoreService.comprobarEquipo("usuarios", this.usuario, "equipos", this.codigoEquipito).subscribe((resultado2) => {

            // IF PARA COMPROBAR SI EL USUARIO ESTA DENTRO DE ESE EQUIPO  
            if(resultado2.payload.data() == null) { // comprobamos que ese usuario no esta dentro del equipo  
              this.document.data.rol = this.rol; // le damos el rol que ha elegido en el select
              this.firestoreService.insertarEquipos("usuarios", this.usuario,"equipos", this.codigoEquipito, this.document.data).then(() => {// insertamos el equipo dentro de la coleccion del usuario
                
                
                // IF ELSE PARA SABER SI ERES CUERPO TECNICO O JUGADOR
                if (this.document.data.rol == "entrenador" || this.document.data.rol == "director deportivo") {
                // Le damos valor a los campos de la coleccion cuerpo tecnico dentro de la coleccion equipos
                this.document3.data.nombre = this.usuario;
                this.document3.data.rol = this.document.data.rol;
                this.document3.data.ganados = 0;
                this.document3.data.perdidos = 0;
                this.document3.data.jugados = 0;
                this.firestoreService.insertarEquipos("equipos", this.codigoEquipito, "Cuerpo Tecnico", this.usuario, this.document3.data).then(() => { // insertamos al cuerpo tecnico dentro de la coleccion equipos
                  this.router.navigate(['/home', {usuario: this.usuario}]);
                }, (error) => {
                    console.error(error);
                });
              }   
              else if(this.document.data.tipo == "Fútbol" || this.document.data.tipo == "Balonmano") {
                // Le damos valor a los campos de la coleccion de jugadores dentro de la coleccion equipos
                this.document2.data.nombre = this.usuario;
                this.document2.data.minutos_jugados = 0;
                this.document2.data.goles = 0;
                this.document2.data.asistencias = 0;
                this.document2.data.titular = 0;
                this.document2.data.convocados = 0;
                this.document2.data.jugados = 0;
                this.firestoreService.insertarEquipos("equipos", this.codigoEquipito, "Jugadores", this.usuario, this.document2.data).then(() => { // insertamos a los jugadores dentro de la coleccion equipos
                  this.router.navigate(['/home', {usuario: this.usuario}]);
                }, (error) => {
                    console.error(error);
                });
              }
              else if(this.document.data.tipo == "League of Legends" || this.document.data.tipo == "Valorant" || this.document.data.tipo == "Counter Strike"){
                  // Le damos valor a los campos de la coleccion de jugadores dentro de la coleccion equipos
                  this.document4.data.nombre = this.usuario;
                  this.document4.data.kills = 0;
                  this.document4.data.asistencias = 0;
                  this.document4.data.muertes = 0;
                  this.document4.data.jugados = 0;
                  this.firestoreService.insertarEquipos("equipos", this.codigoEquipito, "Jugadores", this.usuario, this.document4.data).then(() => { // insertamos a los jugadores dentro de la coleccion equipos
                    this.router.navigate(['/home', {usuario: this.usuario}]);
                  }, (error) => {
                      console.error(error);
                  });
              }
              else if(this.document.data.tipo == "Baloncesto"){
                // Le damos valor a los campos de la coleccion de jugadores dentro de la coleccion equipos
                this.document5.data.nombre = this.usuario;
                this.document5.data.minutos_jugados = 0;
                this.document5.data.puntos = 0;
                this.document5.data.asistencias = 0;
                this.document5.data.titular = 0;
                this.document5.data.convocados = 0;
                this.document5.data.jugados = 0;
                this.firestoreService.insertarEquipos("equipos", this.codigoEquipito, "Jugadores", this.usuario, this.document5.data).then(() => { // insertamos a los jugadores dentro de la coleccion equipos
                  this.router.navigate(['/home', {usuario: this.usuario}]);
                }, (error) => {
                    console.error(error);
                });
              }
                }); 
              }
              

              // ELSE PARA COMPROBAR SI ESTAS EN ESE EQUIPO
            else {
              this.mensaje = "Ya estas dentro de este equipo";
            }
          });
        } 

        // ELSE PARA COMPROBAR SI EXISTE ESE EQUIPO
        else {
          this.mensaje = "No existe ese equipo";
        }
      });
    }// Fin else comprobacion si estan vacios
  }// Fin funcion Unirse
  home(){
    this.router.navigate(['/home', {usuario: this.usuario}]);
  } 
  
}
