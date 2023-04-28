import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';

import { SExperienciaService } from 'src/app/service/s-experiencia.service';


@Component({
  selector: 'app-modal-agregar-exp',
  templateUrl: './modal-agregar-exp.component.html',
  styleUrls: ['./modal-agregar-exp.component.css']
})
export class ModalAgregarExpComponent implements OnInit {
  form:FormGroup;
  experiencia! :Experiencia;
  constructor(private formBuilder: FormBuilder,
              private sExperiencia: SExperienciaService,
              private activatedRoute:ActivatedRoute,
              private router:Router
    ) { 
      //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      descripcion:['', [Validators.required]],
      empresa:[''],
      personaId:1
   })
    }
  
  
  ngOnInit(): void {
    /*const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data => {
      this.experiencia=data;
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )*/
  }

  

  get Puesto(){
    return this.form.get("puesto");
  }

  get Descripcion(){
    return this.form.get("descripcion");
  }
 
  


  onUpdate():void{
    this.sExperiencia.edit(this.form.value).subscribe(data => {
      alert("Experiencia modificada.");
      this.router.navigate(['']);
      window.location.reload()
    }
    )
  }

  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("falló en la carga, intente nuevamente");
      this.form.markAllAsTouched();
    }
  }

  limpiar():void{
    this.form.reset();
  }
  
}