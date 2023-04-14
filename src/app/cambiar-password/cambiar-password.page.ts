import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreService } from '../SERVICIOS/firestore.service';
import { Usuario } from '../INTERFACES/usuario';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.page.html',
  styleUrls: ['./cambiar-password.page.scss'],
})
export class CambiarPasswordPage implements OnInit {

  usuario: string;
  password: string;
  mensaje: string;

  pass01: string;
  pass02: string;
  pass03: string;

  document: any = {
    usuario:"",
    data: {} as Usuario
  }
  
  constructor(private firestoreService: FirestoreService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario'];});

      this.firestoreService.consultarPorId("usuarios", this.usuario).subscribe((resultado) => { 
        if(resultado.payload.data() != null) {
          this.document.usuario = resultado.payload.id
          this.document.data = resultado.payload.data();
          this.password = this.document.data.password;
        }
      });
  }

  volverHome(){
    this.router.navigate(['/perfil', {usuario: this.usuario}]);
  }

  modificar(){ 
    if (this.pass01 == undefined || this.pass02 == undefined || this.pass03 == undefined)
    {
      this.mensaje="Falta algún campo por rellenar"
    }
    else if (this.pass01 == this.pass02) {
      this.mensaje = "La contraseña antigua es igual que la nueva"
    }
    else if (this.pass01 != this.password)
    {
      this.mensaje="La Contraseña Antigua no coincide"
    } 
    else if (this.pass02 != this.pass03) 
    {
      this.mensaje = "Las contraseñas nuevas no coinciden"
    }
    else 
    {
      this.firestoreService.modificarPassword("usuarios", this.usuario, this.pass02);
      this.router.navigate(['/perfil', {usuario: this.usuario}]);
    }
  }
}
