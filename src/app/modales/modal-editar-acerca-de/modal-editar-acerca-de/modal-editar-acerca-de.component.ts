import {  ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-modal-editar-acerca-de',
  templateUrl: './modal-editar-acerca-de.component.html',
  styleUrls: ['./modal-editar-acerca-de.component.css']
})
export class ModalEditarAcercaDeComponent implements OnInit{
  form:FormGroup;
  perso:persona;
  
  constructor(private formBuilder: FormBuilder,
              private sPersona:PersonaService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private cd:ChangeDetectorRef
    ) {
    //Creamos el grupo de controles para el formulario 
    this.form=this.formBuilder.group({
      id:[''],
      nombre:['',[Validators.required]],
      apellido:['',[Validators.required]],
      img:['',[Validators.required]],
      sobreMi:['',[Validators.required,Validators.minLength(20)]],
      titulo:['',[Validators.required]],
   })
   }

   ngOnInit(): void {
    this.cd.detectChanges();
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(data => {
      this.perso=data;
      this.cd.detectChanges();
    },err =>{
      alert("Error al cargar datos en editar sobre mi");
      this.router.navigate(['']);
    }
    )
  }

  get Nombre(){
    return this.form.get("nombre");
  }

  get Apellido(){
    return this.form.get("apellido");
  }

  get Titulo(){
    return this.form.get("titulo");
  }
  get Img(){
    return this.form.get("img");
  }

  get Banner(){
    return this.form.get("banner");
  }

  get SobreMi(){
    return this.form.get("sobreMi");
  }

  onUpdate():void{
    this.cd.detectChanges();
    this.sPersona.edit(this.form.value).subscribe(data => {
      alert("Persona modificada.");
      this.router.navigate(['']);
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

}