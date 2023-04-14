import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convocatoria } from '../INTERFACES/convocatoria';
import { FirestoreService } from '../SERVICIOS/firestore.service';

@Component({
  selector: 'app-anadir-partido',
  templateUrl: './anadir-partido.page.html',
  styleUrls: ['./anadir-partido.page.scss'],
})
export class AnadirPartidoPage implements OnInit {
  usuario: string;
  numeroPartidos: number;
  codigo: string;
  partidoEditando: Convocatoria;
  document: any = {
    usuario:"",
    data: {} as Convocatoria
  }
  arrayPartidos: any = [{
    id: "",
    data: {} as Convocatoria
   }];
  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) {
    this.partidoEditando = {} as Convocatoria;
   }
  
  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario']
      this.codigo = params['codigo'];});

    this.firestoreService.verEquipos("equipos", this.codigo, "Partidos").subscribe((resultado) => {
      this.arrayPartidos = [];
      resultado.forEach((partidos: any) => {
        this.arrayPartidos.push({
          id: partidos.payload.doc.id,
          data: partidos.payload.doc.data()
        });
      })
    });
    console.log(this.arrayPartidos.length);
  }

  anadir(){
    // Sacar el numero de partidos que hay en el equipo   
    console.log(this.arrayPartidos.length)
    this.numeroPartidos = this.arrayPartidos.length;
    console.log(this.numeroPartidos);
    let numeroFinal = this.numeroPartidos + 1;
    console.log(numeroFinal);
    let stringForm = numeroFinal.toString();
    console.log(stringForm);
    this.partidoEditando.finalizado = "No finalizado";
    this.partidoEditando.golesEquipo= 0;
    this.partidoEditando.golesRival= 0;
    this.partidoEditando.resumen= "No disponible";
    this.partidoEditando.codigo = stringForm;
    this.firestoreService.insertarEquipos("equipos", this.codigo, "Partidos", stringForm,this.partidoEditando).then(() => { // insertamos al cuerpo tecnico dentro de la coleccion equipos
      this.router.navigate(['/pagina-partido', {usuario: this.usuario, codigo: this.codigo}]);
    }, (error) => {
           console.error(error);
    });
  }

  volverPartido(){
    this.router.navigate(['/pagina-partido', {usuario: this.usuario, codigo: this.codigo}]);
  }

}
