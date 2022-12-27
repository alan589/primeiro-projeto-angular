import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  styles: ['li { text-transform: uppercase; }']
})
export class CursosComponent{
  nomePortal: string;
  cursos: string[];
  constructor(private cursosService: CursosService){
    this.nomePortal = "https://github.com/alan589";

    this.cursos = this.cursosService.getCursos();
  }

}
