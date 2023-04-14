import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FirestoreService } from '../SERVICIOS/firestore.service';
import { Usuario } from '../INTERFACES/usuario';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Variables
  usuario: string;
  password: string;
  mensaje: string;
  document: any = {
    usuario:"",
    data: {} as Usuario
  }
  // Ojo para ver la contra
  @ViewChild('passwordEyeRegister', { read: ElementRef }) passwordEye: ElementRef;
  passwordTypeInput  =  'password';
  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
    const nativeEl = this.passwordEye.nativeElement.querySelector('input');
    const inputSelection = nativeEl.selectionStart;
    nativeEl.focus();
    setTimeout(() => {
      nativeEl.setSelectionRange(inputSelection, inputSelection);
    }, 1);
  }
  // Constructor
  constructor(private firestoreService: FirestoreService, private router: Router, private route: ActivatedRoute){}
  // Párametros que recibe de otras páginas
  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.usuario = params['usuario'], 
       this.password = params['password'];});
      
       this.firestoreService.guardarUserAutenticado(this.usuario);
  }
  // Función para iniciar sesión, se comprueba si existe usuario y si coincide usuario y password con la base de datos
  consultar() {
  this.firestoreService.consultarPorId("usuarios", this.usuario).subscribe((resultado) => {
    // Si el resultado del "Select" es diferente a null, significa que ese usuario existe entonces pasas al proceso de comprobación de usuario y password
    if(resultado.payload.data() != null) {
      this.document.usuario = resultado.payload.id
      this.document.data = resultado.payload.data();
      // Si usuario y password coincide con la base de datos te lleva a la página del home
      if (this.usuario == this.document.data.usuario && this.password == this.document.data.password){
          
          this.router.navigate(['/home', {usuario: this.usuario}]);
      }
      // Si la password no coincide con la de la base de datos te manda un mensaje para que tengas que volver a intentarlo
      else if (this.usuario == this.document.data.usuario && this.password != this.document.data.password){
          this.mensaje = "Contraseña incorrecta vuelva a intentarlo";
          this.document.data = {} as Usuario;
      }
    } else {
      // Si el usuario no existe en la base de datos te salta un mensaje para que tengas que volver a intentarlo
      this.document.data = {} as Usuario; 
      this.mensaje = "No existe ese usuario vuelva a intentarlo";
    } 
  });
} // Fin de la función
}
