import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hys',
  templateUrl: './hys.component.html',
  styleUrls: ['./hys.component.css']
})
export class HysComponent implements OnInit{
  isLogged = false;
  habilidades: Skill[]=[]; //se llama al modelo que es un array

  constructor(private tokenService: TokenService, private sSkill:SkillService) { }

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidad():void{
    this.sSkill.lista().subscribe(data => {
      this.habilidades=data
    });
  }

  delete(id:number){
    if(id != undefined){
      this.sSkill.delete(id).subscribe(
        data =>{
          alert("Habilidad eliminada correctamente")
          this.cargarHabilidad();
        }, err =>{
          alert("no se pudo eliminar la habilidad");
        })
    }}

}