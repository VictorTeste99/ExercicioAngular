import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componete',
  templateUrl: './segundo-componete.component.html',
  styleUrls: ['./segundo-componete.component.css']
})
export class SegundoComponeteComponent implements OnInit {
  numero : number;
  constructor() { }

  ngOnInit() {
  }

  obtemNumero(numero : number){

    this.numero = numero;
  }

}
