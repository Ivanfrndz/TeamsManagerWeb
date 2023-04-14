import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from '../SERVICIOS/firestore.service';
import { Usuario } from '../INTERFACES/usuario';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  usuario: string;
  correo: string;
  mensaje: string;
  document: any = {
    usuario:"",
    data: {} as Usuario
  }
  constructor(private firestoreService: FirestoreService, private router: Router){}

  ngOnInit() {
  }

  recuperar() {
    this.firestoreService.consultarPorId("usuarios", this.usuario).subscribe((resultado) => {
      // Preguntar si se hay encontrado un document con ese ID
      if(resultado.payload.data() != null) {
        this.document.usuario = resultado.payload.id
        this.document.data = resultado.payload.data();
        
        if (this.usuario == this.document.data.usuario && this.correo == this.document.data.correo){
            this.router.navigateByUrl('/login');
        }
        else if (this.usuario == this.document.data.usuario && this.correo != this.document.data.correo){
            this.mensaje = "El correo no coincide con el usuario";
            this.document.data = {} as Usuario;
        }
      } else {
        // No se ha encontrado un document con ese ID. Vaciar los datos que hubiera
        this.document.data = {} as Usuario;
        this.mensaje = "No existe ese usuario vuelva a intentarlo";
      } 
    });
  }

}
