import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convocatoria } from '../INTERFACES/convocatoria';
import { Equipo } from '../INTERFACES/equipo';
import { Firma } from '../INTERFACES/firma';
import { FirestoreService } from '../SERVICIOS/firestore.service';

@Component({
  selector: 'app-resultado-partido-lol',
  templateUrl: './resultado-partido-lol.page.html',
  styleUrls: ['./resultado-partido-lol.page.scss'],
})
export class ResultadoPartidoLolPage implements OnInit {
  usuario: string;
  codigo: string;
  entreno: string;
  mensaje: string;
  document: any = {
    codigo:"",
    data: {} as Convocatoria
  }
  document2: any = {
    codigo:"",
    data: {} as Equipo
  }
  arrayConvocados: any = [{
    id: "",
    data: {} as Firma
  }];
  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario']
      this.codigo = params['codigo'], 
      this.entreno = params['entreno'];});

      this.firestoreService.comprobarEquipo("equipos", this.codigo, "Partidos", this.entreno).subscribe((resultado) => {
        this.document.codigo = resultado.payload.id
        this.document.data = resultado.payload.data();   
      }); 

      this.firestoreService.consultarPorId("equipos", this.codigo).subscribe((resultado) => {
        this.document2.codigo = resultado.payload.id
        this.document2.data = resultado.payload.data();   
      });
      
      this.firestoreService.entrenamiento2("equipos", this.codigo, "Partidos", this.entreno, "Convocados").subscribe((resultado) => {
        this.arrayConvocados = [];
        resultado.forEach((entrenamientos: any) => {
          this.arrayConvocados.push({
            id: entrenamientos.payload.doc.id,
            data: entrenamientos.payload.doc.data()
          });
        })
      }); 
  }
  
  finalizar(resumen, golesEquipo, golesRival){  
    if (resumen == undefined || golesEquipo == undefined || golesRival== undefined) {
      this.mensaje = "Complete todos los campos";
    }
    else {
      this.mensaje = "Guardando.."
      this.firestoreService.actualizarFinalizacion("equipos", this.codigo, "Partidos", this.entreno, "Finalizado");
      this.firestoreService.finalizar("equipos", this.codigo, "Partidos", this.entreno, resumen, golesEquipo, golesRival);
      this.router.navigate(['/partido', {usuario: this.usuario, "codigo": this.codigo, "entreno": this.entreno}]);
    }
  }

  volverPartido(){
    this.router.navigate(['/partido', {usuario: this.usuario, "codigo": this.codigo, "entreno": this.entreno}]);
  }

}
