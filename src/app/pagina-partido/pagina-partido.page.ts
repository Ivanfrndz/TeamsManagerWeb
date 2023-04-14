import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convocatoria } from '../INTERFACES/convocatoria';
import { Firma } from '../INTERFACES/firma';
import { Usuario } from '../INTERFACES/usuario';
import { FirestoreService } from '../SERVICIOS/firestore.service';

@Component({
  selector: 'app-pagina-partido',
  templateUrl: './pagina-partido.page.html',
  styleUrls: ['./pagina-partido.page.scss'],
})
export class PaginaPartidoPage implements OnInit {
  usuario: string;
  codigo: string;
  arrayPartidos: any = [{
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
  //mensaje
  mensaje = "Firmar Convocatoria";
  //botones
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

      this.firestoreService.verEquipos("equipos", this.codigo, "Partidos").subscribe((resultado) => {
        this.arrayPartidos = [];
        resultado.forEach((partidos: any) => {
          this.arrayPartidos.push({
            id: partidos.payload.doc.id,
            data: partidos.payload.doc.data()
          });
        })
        });  
      
  } // Fin ngOnInit

  anadirPartido(){
    this.router.navigate(['/anadir-partido', {usuario: this.usuario, codigo: this.codigo}]);
  }
  
  ver(partido){
    this.router.navigate(['/partido', {usuario: this.usuario, codigo: this.codigo, entreno: partido}]);
  }

  volverPartido(){
    this.router.navigate(['/pagina-equipo', {usuario: this.usuario, codigoEquipo: this.codigo}]);
  }
}
