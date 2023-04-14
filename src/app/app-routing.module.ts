import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: 'privacidad',
    loadChildren: () => import('./privacidad/privacidad.module').then( m => m.PrivacidadPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'actualizar-perfil',
    loadChildren: () => import('./actualizar-perfil/actualizar-perfil.module').then( m => m.ActualizarPerfilPageModule)
  },
  {
    path: 'cambiar-password',
    loadChildren: () => import('./cambiar-password/cambiar-password.module').then( m => m.CambiarPasswordPageModule)
  },
  {
    path: 'cambiar-usuario',
    loadChildren: () => import('./cambiar-usuario/cambiar-usuario.module').then( m => m.CambiarUsuarioPageModule)
  },
  {
    path: 'formulario-inscripcion',
    loadChildren: () => import('./formulario-inscripcion/formulario-inscripcion.module').then( m => m.FormularioInscripcionPageModule)
  },
  {
    path: 'pagina-equipo',
    loadChildren: () => import('./pagina-equipo/pagina-equipo.module').then( m => m.PaginaEquipoPageModule)
  },
  {
    path: 'unirse-equipo',
    loadChildren: () => import('./unirse-equipo/unirse-equipo.module').then( m => m.UnirseEquipoPageModule)
  },
  {
    path: 'participantes-equipo',
    loadChildren: () => import('./participantes-equipo/participantes-equipo.module').then( m => m.ParticipantesEquipoPageModule)
  },
  {
    path: 'estadisticas-miembros',
    loadChildren: () => import('./estadisticas-miembros/estadisticas-miembros.module').then( m => m.EstadisticasMiembrosPageModule)
  },
  {
    path: 'estadisticas-jugadores',
    loadChildren: () => import('./estadisticas-jugadores/estadisticas-jugadores.module').then( m => m.EstadisticasJugadoresPageModule)
  },
  {
    path: 'pagina-partido',
    loadChildren: () => import('./pagina-partido/pagina-partido.module').then( m => m.PaginaPartidoPageModule)
  },
  {
    path: 'pagina-entrenamiento',
    loadChildren: () => import('./pagina-entrenamiento/pagina-entrenamiento.module').then( m => m.PaginaEntrenamientoPageModule)
  },
  {
    path: 'anadir-entrenamiento',
    loadChildren: () => import('./anadir-entrenamiento/anadir-entrenamiento.module').then( m => m.AnadirEntrenamientoPageModule)
  },
  {
    path: 'anadir-partido',
    loadChildren: () => import('./anadir-partido/anadir-partido.module').then( m => m.AnadirPartidoPageModule)
  },
  {
    path: 'entrenamiento',
    loadChildren: () => import('./entrenamiento/entrenamiento.module').then( m => m.EntrenamientoPageModule)
  },
  {
    path: 'partido',
    loadChildren: () => import('./partido/partido.module').then( m => m.PartidoPageModule)
  },
  {
    path: 'estadisticas-jugadores-juego',
    loadChildren: () => import('./estadisticas-jugadores-juego/estadisticas-jugadores-juego.module').then( m => m.EstadisticasJugadoresJuegoPageModule)
  },
  {
    path: 'estadisticas-jugadores-baloncesto',
    loadChildren: () => import('./estadisticas-jugadores-baloncesto/estadisticas-jugadores-baloncesto.module').then( m => m.EstadisticasJugadoresBaloncestoPageModule)
  },
  {
    path: 'resultado-partido-futbol',
    loadChildren: () => import('./resultado-partido-futbol/resultado-partido-futbol.module').then( m => m.ResultadoPartidoFutbolPageModule)
  },
  {
    path: 'resultado-partido-lol',
    loadChildren: () => import('./resultado-partido-lol/resultado-partido-lol.module').then( m => m.ResultadoPartidoLolPageModule)
  },
  {
    path: 'resultado-partido-baloncesto',
    loadChildren: () => import('./resultado-partido-baloncesto/resultado-partido-baloncesto.module').then( m => m.ResultadoPartidoBaloncestoPageModule)
  },
  {
    path: 'resultado-entrenamiento',
    loadChildren: () => import('./resultado-entrenamiento/resultado-entrenamiento.module').then( m => m.ResultadoEntrenamientoPageModule)
  },  {
    path: 'confirmacion-salida',
    loadChildren: () => import('./confirmacion-salida/confirmacion-salida.module').then( m => m.ConfirmacionSalidaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
