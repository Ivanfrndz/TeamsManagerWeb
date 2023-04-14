import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../SERVICIOS/firestore.service';
import { Usuario } from '../INTERFACES/usuario';

@Component({
  selector: 'app-cambiar-usuario',
  templateUrl: './cambiar-usuario.page.html',
  styleUrls: ['./cambiar-usuario.page.scss'],
})

export class CambiarUsuarioPage implements OnInit {

  usuario: string;
  antiguo: string;
  nuevo: string;
  mensaje: string;

  document: any = {
    usuario:"",
    data: {} as Usuario
  }

  constructor(private firestoreService: FirestoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario'];});
  }

  volverHome(){
    this.router.navigate(['/perfil', {usuario: this.usuario}]);
  }

  actualizar(){
    if (this.antiguo == undefined || this.nuevo == undefined)
    {
      this.mensaje = "Complete todos los campos antes de completar la solicitud"
    }
    else if (this.antiguo == this.usuario) {
      this.firestoreService.consultarPorId("usuarios", this.usuario).subscribe((resultado) => {
        if(resultado.payload.data() != null) {
          this.document.usuario = resultado.payload.id
          this.document.data = resultado.payload.data();
          this.document.data.usuario = this.nuevo;
          this.firestoreService.consultarPorId("usuarios", this.nuevo).subscribe((resultado) => 
          {
            if (resultado.payload.data() == null){
              this.firestoreService.insertarConId("usuarios", this.nuevo, this.document.data);
              this.firestoreService.cambiarUsuario("usuarios", this.antiguo);
              this.router.navigate(['/perfil', {usuario: this.nuevo}]);
              this.document.data = {} as Usuario;
            }
            else 
            {
              this.mensaje = "El usuario nuevo ya existe, pruebe con otro"
            }
          });
        }  
      });
    }
    else 
    {
      this.mensaje = "El nombre de usuario antiguo no coincide con tu nombre de usuario";
    } 
  }

}
