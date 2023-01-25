import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    public image:string="https://img.freepik.com/foto-gratis/regalo-negro-envuelto-papel-tapiz-lazo-rojo_53876-160152.jpg?size=626&ext=jpg&ga=GA1.1.1870374646.1674431329";
    public Titulo:String = "Curso de Angular con interpolación";
    constructor() {}

    ngOnInit(): void {

    }
}
