import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './components/hys/hys.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { ModalAddSkillComponent } from './modales/modal-add-skill/modal-add-skill/modal-add-skill.component';
import { ModalAgregarExpComponent } from './modales/modal-agregar-exp/modal-agregar-exp/modal-agregar-exp.component';
import { ModalEditarAcercaDeComponent } from './modales/modal-editar-acerca-de/modal-editar-acerca-de/modal-editar-acerca-de.component';
import { ModalEditarEduComponent } from './modales/modal-editar-edu/modal-editar-edu/modal-editar-edu.component';
import { ModalEditarExpComponent } from './modales/modal-editar-exp/modal-editar-exp/modal-editar-exp.component';
import { ModalEditarProyComponent } from './modales/modal-editar-proy/modal-editar-proy/modal-editar-proy.component';
import { ModalEditarSkillComponent } from './modales/modal-editar-skill/modal-editar-skill/modal-editar-skill.component';
import { ModalEducacionComponent } from './modales/modal-educacion/modal-educacion/modal-educacion.component';
import { ModalLoginComponent } from './modales/modal-login/modal-login/modal-login.component';
import { ModalLogoutComponent } from './modales/modal-logout/modal-logout/modal-logout.component';
import { ModalProyectosAddComponent } from './modales/modal-proyectos-add/modal-proyectos-add/modal-proyectos-add.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    HysComponent,
    ProyectosComponent,
    ModalAddSkillComponent,
    ModalAgregarExpComponent,
    ModalEditarAcercaDeComponent,
    ModalEditarEduComponent,
    ModalEditarExpComponent,
    ModalEditarProyComponent,
    ModalEditarSkillComponent,
    ModalEducacionComponent,
    ModalLoginComponent,
    ModalLogoutComponent,
    ModalProyectosAddComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    CommonModule
  ],
  exports:[RouterModule],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }