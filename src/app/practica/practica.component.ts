import { Component } from '@angular/core';
import { ServiciopracticaService } from '../serviciopractica.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-practica',
  imports: [NgFor],
  templateUrl: './practica.component.html',
  styleUrl: './practica.component.css'
})
export class PracticaComponent {
public datos:any[]=[];
constructor(private servicio:ServiciopracticaService){}
ngOnInit(): void{
  this.servicio.getDatos().subscribe(
    (datos)=>{
      this.datos=datos;
    });
  }
}
