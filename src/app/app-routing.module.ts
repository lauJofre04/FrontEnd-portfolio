import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { HysComponent } from './components/hys/hys.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ModalEditarAcercaDeComponent } from './modales/modal-editar-acerca-de/modal-editar-acerca-de/modal-editar-acerca-de.component';
import { ModalEditarEduComponent } from './modales/modal-editar-edu/modal-editar-edu/modal-editar-edu.component';
import { ModalEditarExpComponent } from './modales/modal-editar-exp/modal-editar-exp/modal-editar-exp.component';
import { ModalEditarProyComponent } from './modales/modal-editar-proy/modal-editar-proy/modal-editar-proy.component';
import { ModalEditarSkillComponent } from './modales/modal-editar-skill/modal-editar-skill/modal-editar-skill.component';


//las rutas van ordenandas, al final va el error, primero el index 
const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent },
  {path: 'editAcercaDe/:id', component: ModalEditarAcercaDeComponent},
  {path: 'editExperiencia/:id', component: ModalEditarExpComponent},
  {path: 'editEducacion/:id', component: ModalEditarEduComponent},
  {path: 'editHys/:id', component: ModalEditarSkillComponent},
  {path: 'editProyecto/:id', component: ModalEditarProyComponent},
  {path:'experiencia', component: ExperienciaComponent},
  {path:'educacion', component: EducacionComponent},
  {path:'hys', component: HysComponent},
  {path:'proyectos', component: ProyectosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }