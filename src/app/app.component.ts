import { Component } from '@angular/core';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi Primer App';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void{
    this.ArregloTarjetas = [
      {titulo:"video 1", subtitulo:"Sutitulo Video 1", nro:5},
      {titulo:"video 2", subtitulo:"Sutitulo Video 2", nro:6},
      {titulo:"video 3", subtitulo:"Sutitulo Video 3"},
    ]
  }
}
