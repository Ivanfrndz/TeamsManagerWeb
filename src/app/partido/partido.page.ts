import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Convocatoria } from '../INTERFACES/convocatoria';
import { Firma } from '../INTERFACES/firma';
import { Usuario } from '../INTERFACES/usuario';
import { FirestoreService } from '../SERVICIOS/firestore.service';

@Component({
  selector: 'app-partido',
  templateUrl: './partido.page.html',
  styleUrls: ['./partido.page.scss'],
})
export class PartidoPage implements OnInit {
  usuario: string;
  codigo: string;
  entreno: string;
  mensaje: string;
  document: any = {
    codigo:"",
    data: {} as Convocatoria
  }
  document3: any = {
    codigo:"",
    data: {} as Convocatoria
  }
  arrayConvocados: any = [{
    id: "",
    data: {} as Firma
  }];
  document2: any = {
    codigo:"",
    data: {} as Usuario
  }
  boton: string;
  boton2: string;
  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) { }

  ngOnInit(){      
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario']
      this.codigo = params['codigo'], 
      this.entreno = params['entreno'];});

      this.firestoreService.comprobarEquipo("usuarios", this.usuario, "equipos", this.codigo).subscribe((resultado) => {
        this.document2.codigo = resultado.payload.id
        this.document2.data = resultado.payload.data();
        if (this.document2.data.rol == "entrenador"){
          this.boton = "false";
        }
      })  

      this.firestoreService.comprobarEquipo("equipos", this.codigo, "Partidos", this.entreno).subscribe((resultado) => {
        this.document.codigo = resultado.payload.id
        this.document.data = resultado.payload.data();  
        if (this.document.data.finalizado == "Finalizado"){
          this.boton2 = "true";
          this.mensaje = "Cambiar Resultado";
        }       
        else {
          this.mensaje = "Finalizar";
        }
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
      
      this.firestoreService.comprobarEquipo("usuarios", this.usuario, "equipos", this.codigo).subscribe((resultado) => {
        this.document2.codigo = resultado.payload.id
        this.document2.data = resultado.payload.data();

        if (this.document2.data.rol == "entrenador" || this.document2.data.rol == "director deportivo"){
          this.boton2 = "true";
        }
        else if (this.document2.data.rol == "Jugador"){
          this.boton2 = "false";
        }

      })
  } // FIN DEL NGONINIT

  firmarConvocatoria(fecha){
    this.document3.data.firma = "Si";
    this.document3.data.convocatoria = "si";
    this.document3.data.nombre = this.usuario;
    this.firestoreService.entrenamientos("equipos", this.codigo, "Partidos", fecha, "Convocados", this.usuario, this.document3.data);
  }
  
  borrar(fecha, jugador){
    this.firestoreService.borrarConvocado("equipos", this.codigo, "Partidos", fecha, "Convocados", jugador,);
  }

  volver(){
    this.router.navigate(['/pagina-partido', {usuario: this.usuario, "codigo": this.codigo}]);
  }

  finalizar(partido){  
    console.log("Partido Finalizado");
    this.firestoreService.actualizarFinalizacion("equipos", this.codigo, "Partidos", partido, "Finalizado");
    if(this.document2.data.tipo == "Fútbol" || this.document2.data.tipo == "Balonmano"){
      this.router.navigate(['resultado-partido-futbol', {usuario: this.usuario, codigo: this.codigo , entreno: partido}]);
    }else if(this.document2.data.tipo == "Baloncesto"){
      this.router.navigate(['resultado-partido-baloncesto', {usuario: this.usuario, codigo: this.codigo , entreno: partido}]);
    }else{
      this.router.navigate(['resultado-partido-lol', {usuario: this.usuario, codigo: this.codigo , entreno: partido}]);
    }
  }
    
}
