import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CuerpoTecnico } from '../INTERFACES/cuerpo-tecnico';
import { Equipo } from '../INTERFACES/equipo';
import { FirestoreService } from '../SERVICIOS/firestore.service';
@Component({
  selector: 'app-formulario-inscripcion',
  templateUrl: './formulario-inscripcion.page.html',
  styleUrls: ['./formulario-inscripcion.page.scss'],
})
export class FormularioInscripcionPage implements OnInit {
  // Variables
  mensaje: string;
  usuario: string;
  tipo: string;
  rol: string;
  nombre: string;
  equipoEditando: Equipo;
  //document para añadir estadisticas cuerpo tecnico
  document3: any = {
    usuario: "",
    data: {} as CuerpoTecnico
  }
  document: any = {
    usuario:"",
    data: {} as Equipo
  }
  //Constructor 
  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService) {
    this.equipoEditando = {} as Equipo;
   }
  // Párametros que se guardan de la pantalla anterior
  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario'],
      this.tipo = params['tipo'];});
  }
  // Función para volver al home
  home(){
    this.router.navigate(['/home', {usuario: this.usuario}]);
  }
  // Función para sacar un código aleatorio
  codigoAleatorio() {
    let result = '';
    const characters = 'abcdefghijklmnñopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  // Asignamos a la variable codigo el codigo aleatorio generado de la funcion
  codigo = this.codigoAleatorio();
  // Función Crear Equipo
  crear(){
    this.rol = "entrenador";
    this.equipoEditando.tipo = this.tipo;
    this.equipoEditando.rol = this.rol;
    this.equipoEditando.codigoEquipo = this.codigo;
    if (this.equipoEditando.categoria == undefined || this.equipoEditando.ciudad == undefined || this.equipoEditando.codigoEquipo == undefined ||
        this.equipoEditando.descripcion == undefined || this.equipoEditando.liga == undefined || this.equipoEditando.nombre == undefined ||
        this.equipoEditando.rol == undefined || this.equipoEditando.tipo == undefined){
          this.mensaje = "Complete todos los campos antes de rellenar su solicitud";
          console.log(this.equipoEditando);   
        }
    else {
      this.firestoreService.comprobarEquipo("usuarios", this.usuario, "equipos", this.codigo).subscribe((resultado) => {
        if(resultado.payload.data() != null) 
        {
          this.mensaje = "Vuelva a intentarlo de nuevo";
          this.equipoEditando= {} as Equipo;
        }
        else 
        { 
          this.firestoreService.insertarConId("equipos",this.codigo,this.equipoEditando).then(() => {
          }, (error) => {
            console.error(error);
          });
          this.firestoreService.insertarEquipos("usuarios", this.usuario, "equipos",this.codigo, this.equipoEditando).then(() => {}, 
          (error) => {
              console.error(error);
              this.mensaje="Complete todos los campos porfavor"
          });
          this.document3.data.nombre = this.usuario;
          this.document3.data.rol = "entrenador";
          this.document3.data.ganados = 0;
          this.document3.data.perdidos = 0;
          this.document3.data.jugados = 0;
          this.firestoreService.insertarEquipos("equipos", this.codigo, "Cuerpo Tecnico", this.usuario, this.document3.data).then(() => { // insertamos al cuerpo tecnico dentro de la coleccion equipos
          }, (error) => {
            console.error(error);
          });
          this.router.navigate(['/pagina-equipo', {usuario: this.usuario, codigoEquipo: this.codigo}]);
        }
      });
    }
  } //Fin de la Función crear Equipo
}
