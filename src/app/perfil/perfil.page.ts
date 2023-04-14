import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActualizarPerfilPage } from '../actualizar-perfil/actualizar-perfil.page';
import { FirestoreService } from '../SERVICIOS/firestore.service';
import { Usuario } from '../INTERFACES/usuario';
import { url } from 'inspector';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  usuario: string;
  nombre: string;
  apellidos: string;
  correo: string;
  imagen: any[] = [];
  foto: string;
  

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
        this.apellidos = this.document.data.apellidos;
        this.correo = this.document.data.correo;
        this.nombre = this.document.data.nombre;
        this.foto = this.document.data.foto;
      }
    });
  }

  cambiarUsuario(){
    this.router.navigate(['/cambiar-usuario', {usuario: this.usuario}]);
  }

  cambiarPassword(){
    this.router.navigate(['/cambiar-password', {usuario: this.usuario}]);
  }

  actualizarPerfil(){
    this.router.navigate(['/actualizar-perfil', {usuario: this.usuario, nombre: this.nombre, apellidos: this.apellidos, correo: this.correo}]);
  }

  volverHome(){
    this.router.navigate(['/home', {usuario: this.usuario}]);
  }
  cerrarSesion() {
    this.router.navigate(['/login', {usuario: this.usuario, password: ""}]);
  }
  
  cargarImagen(event: any){
    let foto = event.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(foto[0]);
    reader.onloadend = () =>{ 
      this.imagen.push(reader.result);  
      this.firestoreService.subirImagen(this.usuario, reader.result).then(urlImagen =>{
        this.firestoreService.modificarFoto("usuarios", this.usuario, urlImagen);
      });  
    };
  }
}
