import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-modal-editar-exp',
  templateUrl: './modal-editar-exp.component.html',
  styleUrls: ['./modal-editar-exp.component.css']
})
export class ModalEditarExpComponent implements OnInit{
  form:FormGroup;
  experiencia !:Experiencia;
  constructor(private formBuilder: FormBuilder,
              private sExperiencia: SExperienciaService,
              private activatedRoute:ActivatedRoute,
              private router:Router,
              private cd:ChangeDetectorRef
    ) { 
      //Creamos el grupo de controles para el formulario 
    this.form= this.formBuilder.group({
      id:[''],
      puesto:['',[Validators.required]],
      inicio:[''],
      fin:[''],
      descripcion:['', [Validators.required]],
      imagen:[''],
      url:[''],
      empresa:[''],
      esTrabajoActual:[''],
      personaid:1,
   })
    }
  
  
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(data => {
      this.experiencia=data;
      this.cd.detectChanges();
    },err =>{
      alert("Error al cargar datos");
      this.router.navigate(['']);
    }
    )
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