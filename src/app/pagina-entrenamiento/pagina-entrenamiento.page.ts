import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convocatoria } from '../INTERFACES/convocatoria';
import { Firma } from '../INTERFACES/firma';
import { Usuario } from '../INTERFACES/usuario';
import { FirestoreService } from '../SERVICIOS/firestore.service';
@Component({
  selector: 'app-pagina-entrenamiento',
  templateUrl: './pagina-entrenamiento.page.html',
  styleUrls: ['./pagina-entrenamiento.page.scss'],
})
export class PaginaEntrenamientoPage implements OnInit {
  usuario: string;
  codigo: string;
  arrayEntrenamientos: any = [{
    id: "",
    data: {} as Convocatoria
   }];
   document: any = {
    codigo:"",
    data: {} as Firma
  }
  document2: any = {
    codigo:"",
    data: {} as Usuario
  }
  boton: string;
  boton2: string;
  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) { }
  ngOnInit() {
    this.boton2 = "false";
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario']
      this.codigo = params['codigo'];});

      this.firestoreService.comprobarEquipo("usuarios", this.usuario, "equipos", this.codigo).subscribe((resultado) => {
        this.document2.codigo = resultado.payload.id
        this.document2.data = resultado.payload.data();
        if (this.document2.data.rol == "entrenador"){
          this.boton = "false";
          this.boton2 = "true";
        }
        else if (this.document2.data.rol == "director deportivo"){
          this.boton2 = "true";
        }
      })
      
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
  anadirEntrenamiento(){
    this.router.navigate(['/anadir-entrenamiento', {usuario: this.usuario, codigo: this.codigo}]);
  }

  ver(entreno){
    this.router.navigate(['/entrenamiento', {usuario: this.usuario, codigo: this.codigo, entreno: entreno}]);
  }

  finalizar(){  
    console.log("Partido Finalizado");
  }

  volverPartido(){
    this.router.navigate(['/pagina-equipo', {usuario: this.usuario, codigoEquipo: this.codigo}]);
  }
}
