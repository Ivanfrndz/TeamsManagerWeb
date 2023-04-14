import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convocatoria } from '../INTERFACES/convocatoria';
import { FirestoreService } from '../SERVICIOS/firestore.service';

@Component({
  selector: 'app-anadir-entrenamiento',
  templateUrl: './anadir-entrenamiento.page.html',
  styleUrls: ['./anadir-entrenamiento.page.scss'],
})
export class AnadirEntrenamientoPage implements OnInit {
  usuario: string;
  numeroEntrenos: number;
  codigo: string;
  entrenamientoEditando: Convocatoria;
  document: any = {
    usuario:"",
    data: {} as Convocatoria
  }
  arrayEntrenamientos: any = [{
    id: "",
    data: {} as Convocatoria
   }];
  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) {
    this.entrenamientoEditando = {} as Convocatoria;
   }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario']
      this.codigo = params['codigo'];});
      
      this.firestoreService.verEquipos("equipos", this.codigo, "Entrenamientos").subscribe((resultado) => {
        this.arrayEntrenamientos = [];
        resultado.forEach((entrenamientos: any) => {
          this.arrayEntrenamientos.push({
            id: entrenamientos.payload.doc.id,
            data: entrenamientos.payload.doc.data()
          });
        })
      });
      
  } // Fin ngOnInit
  anadir(){
    // Sacar el numero de entrenamientos que hay en el equipo   
    console.log(this.arrayEntrenamientos.length)
    this.numeroEntrenos = this.arrayEntrenamientos.length;
    console.log(this.numeroEntrenos);
    let numeroFinal = this.numeroEntrenos + 1;
    console.log(numeroFinal);
    let stringForm = numeroFinal.toString();
    console.log(stringForm);

    this.entrenamientoEditando.finalizado = "No finalizado";
    this.entrenamientoEditando.resumen = "No disponible";
    this.entrenamientoEditando.codigo = stringForm;
    this.firestoreService.insertarEquipos("equipos", this.codigo, "Entrenamientos", stringForm, this.entrenamientoEditando).then(() => { // insertamos al cuerpo tecnico dentro de la coleccion equipos
      this.router.navigate(['/pagina-entrenamiento', {usuario: this.usuario, codigo: this.codigo}]);
    }, (error) => {
        console.error(error);
    });
  }

  cancelar(){
    this.router.navigate(['/pagina-entrenamiento', {usuario: this.usuario, codigo: this.codigo}]);
  }
}
