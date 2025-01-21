import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  posts: any[] = [];
  constructor(private servicio: DataService){} //Inyectar el servicio - inyeccion de dependencias
  ngOnInit() {
    this.servicio.getPosts().subscribe((data: any[]) => {
      this.posts = data; // Asignar datos recibidos al array 'posts'
      console.log(this.posts); // Mostrar los datos en consola
    });
  }
}
