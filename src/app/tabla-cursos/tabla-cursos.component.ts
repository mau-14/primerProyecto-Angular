import { Component, OnInit} from '@angular/core';
import { cursos } from './mock';

@Component({
  selector: 'app-tabla-cursos',
  standalone: false,

  templateUrl: './tabla-cursos.component.html',
  styleUrl: './tabla-cursos.component.css'
})
export class TablaCursosComponent implements OnInit{

  public cursos?: any []

  ngOnInit(): void {
    this.cursos = cursos
  }

}
