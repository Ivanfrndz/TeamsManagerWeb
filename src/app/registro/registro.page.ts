import { Component, ElementRef, Type, ViewChild } from '@angular/core';
import { FirestoreService } from '../SERVICIOS/firestore.service';
import { Usuario } from '../INTERFACES/usuario';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  // Variables
  password2: string;
  checkbox: boolean;
  usuarioEditando: Usuario;
  user: string;
  mensaje: string;
  document: any = {
    usuario:"",
    data: {} as Usuario
  }
  // Ojo para ver la contra
  @ViewChild('passwordEyeRegister', { read: ElementRef }) passwordEye: ElementRef;
  passwordTypeInput  =  'password';
  passwordTypeInput2  =  'password';
  togglePasswordMode() {
    this.passwordTypeInput = this.passwordTypeInput === 'text' ? 'password' : 'text';
    const nativeEl = this.passwordEye.nativeElement.querySelector('input');
    const inputSelection = nativeEl.selectionStart;
    nativeEl.focus();
    setTimeout(() => {
      nativeEl.setSelectionRange(inputSelection, inputSelection);
    }, 1);
  }
  togglePasswordMode2() {
    this.passwordTypeInput2 = this.passwordTypeInput2 === 'text' ? 'password' : 'text';
    const nativeEl = this.passwordEye.nativeElement.querySelector('input');
    const inputSelection = nativeEl.selectionStart;
    nativeEl.focus();
    setTimeout(() => {
      nativeEl.setSelectionRange(inputSelection, inputSelection);
    }, 1);
  }
  // Constructor
  constructor(private firestoreService: FirestoreService, private router: Router, private route: ActivatedRoute) {
    this.usuarioEditando = {} as Usuario;
   }
  ngOnInit() {
    this.route.params.subscribe(params =>
      {this.checkbox = params['checkbox'],
      this.usuarioEditando.usuario = params['usuario'],
      this.usuarioEditando.nombre = params['nombre'],
      this.usuarioEditando.apellidos = params['apellidos'],
      this.usuarioEditando.password = params['password'],
      this.password2 = params['password2'],
      this.usuarioEditando.correo = params['correo'];});

      this.user = this.usuarioEditando.usuario;
  }
  // Función para crear los usuarios en la base de datos
  politicas(){
    if (this.usuarioEditando.nombre == undefined || this.usuarioEditando.apellidos == undefined || 
      this.usuarioEditando.correo == undefined || this.usuarioEditando.password == undefined ||
      this.usuarioEditando.usuario == undefined )
        {
          this.mensaje="Rellene todos los campos antes de aceptar las políticas de privacidad";
        }
    else 
    {
    this.router.navigate(['/privacidad', {usuario: this.usuarioEditando.usuario, nombre: this.usuarioEditando.nombre, apellidos: this.usuarioEditando.nombre,
    password: this.usuarioEditando.password, password2: this.password2, correo: this.usuarioEditando.correo}]);
    }
  }
  clicBotonInsertar() 
  { 
    if (this.usuarioEditando.nombre == undefined || this.usuarioEditando.apellidos == undefined || 
    this.usuarioEditando.correo == undefined || this.usuarioEditando.password == undefined ||
    this.usuarioEditando.usuario == undefined )
      {
        this.mensaje="Todos los campos son necesarios para completar su solicitud";
      }
    else
    { 
      this.firestoreService.consultarPorId("usuarios", this.user).subscribe((resultado) => {
        // Preguntar si se hay encontrado un document con ese ID
        if(resultado.payload.data() != null) 
        {
          this.document.usuario = resultado.payload.id;
          this.document.data = resultado.payload.data();
          this.mensaje = "Nombre de usuario ya en uso, intentelo con otro nombre";
        }
        else if (this.password2 != this.usuarioEditando.password) {
          this.mensaje = "Las contraseñas no coinciden";
        }
        else if (this.checkbox == true)
        {
            this.usuarioEditando.foto = 'https://firebasestorage.googleapis.com/v0/b/tfgijc.appspot.com/o/fotosPerfil%2Fadmin?alt=media&token=fe87d4c0-d16a-4ed6-9a47-896246b84bd2';
            this.firestoreService.insertarConId("usuarios", this.user, this.usuarioEditando).then(() => {
            this.router.navigateByUrl('/login');
            this.usuarioEditando= {} as Usuario;
          }, (error) => {
            console.error(error);
            this.mensaje="Complete todos los campos porfavor"
            });
        }
        else {
          this.mensaje="Acepta las políticas de privacidad antes de continuar"
        }
    });
  }
} // Fin de la función
}