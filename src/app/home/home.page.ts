import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';
import { Equipo } from '../INTERFACES/equipo';
import { FirestoreService } from '../SERVICIOS/firestore.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // Variables
  usuario: string;
  tipo: string;
  codigo: string;
  
  arrayEquipos: any = [{
    id: "",
    data: {} as Equipo
   }];
  // Para coger el select de los tipo de deportes
  @ViewChild('deportes') deporteSelectRef: IonSelect;
   constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) {}
   // Coger los parámetros que mandan desde la ruta
  ngOnInit() {
    this.route.params.subscribe(params =>   
      {this.usuario = params['usuario'];});
    this.firestoreService.verEquipos("usuarios", this.usuario, "equipos").subscribe((resultado) => {
      this.arrayEquipos = [];
      resultado.forEach((equipos: any) => {
        this.arrayEquipos.push({
          id: equipos.payload.doc.id,
          data: equipos.payload.doc.data()
        });
      })
      });
  }
  // Función del boton de crear equipo  
  crearEquipo() { 
    this.deporteSelectRef.open();
  }
  // Cuando eliges el tipo de deporte al crear equipo donde te manda
  tipos($event){
      this.tipo = $event.target.value;
      this.router.navigate(['/formulario-inscripcion', {usuario: this.usuario, tipo: this.tipo}]);
  }
  // Función del icono que esta arriba a la derecha
  perfil(){ 
    this.router.navigate(['/perfil', {usuario: this.usuario}]);
  }
  //Función del boton de unirse a un equipo
  unirseEquipo(){
    this.router.navigate(['/unirse-equipo', {usuario: this.usuario}]);
  } // Fin funcion unirseEquipo
  // Función que te manda a la pestaña del equipo, se encuentra en el ion-card
  irEquipo(codigoEquip){
    this.router.navigate(['/pagina-equipo', {usuario: this.usuario, codigoEquipo: codigoEquip}]);
  }
}

