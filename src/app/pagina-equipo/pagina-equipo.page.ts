import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipo } from '../INTERFACES/equipo';
import { FirestoreService } from '../SERVICIOS/firestore.service';
import {Clipboard} from '@angular/cdk/clipboard';
import { IonCard } from '@ionic/angular';

@Component({
  selector: 'app-pagina-equipo',
  templateUrl: './pagina-equipo.page.html',
  styleUrls: ['./pagina-equipo.page.scss'],
})
export class PaginaEquipoPage implements OnInit {
  usuario: string;
  codigo: string;
  rol: string;
  document: any = {
    codigo:"",
    data: {} as Equipo
  }

  constructor(private route: ActivatedRoute, private router: Router, private firestoreService: FirestoreService, 
    private clipboard: Clipboard) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario']
      this.codigo = params['codigoEquipo'];});

    this.firestoreService.comprobarEquipo("usuarios", this.usuario, "equipos", this.codigo).subscribe((resultado) => {
      this.document.codigo = resultado.payload.id
      this.document.data = resultado.payload.data();    
    });    
    
  } // Fin ngOnInit
  copiarCodigo(){ 
    this.clipboard.copy(this.document.data.codigoEquipo);
  }
  volverHome(){
    this.router.navigate(['/home', {usuario: this.usuario}]);
  }
  // ver los participantes del equipo
  verParticipantes(){   
    this.router.navigate(['/participantes-equipo', {usuario: this.usuario, "codigo": this.codigo}]);
  }
  // ir a pagina de partido
  partidos(){   
    this.router.navigate(['/pagina-partido', {usuario: this.usuario, "codigo": this.codigo}]);
  }
  // ir a pagina de entrenamiento
  entrenamientos(){   
    this.router.navigate(['/pagina-entrenamiento', {usuario: this.usuario, "codigo": this.codigo}]);
  }
  // Función para desapuntarse del equipo
  irseEquipo(){ 
    this.rol= this.document.data.rol;
    this.router.navigate(['/confirmacion-salida', {usuario: this.usuario, rol: this.rol, codigo: this.codigo}]);
  }
}