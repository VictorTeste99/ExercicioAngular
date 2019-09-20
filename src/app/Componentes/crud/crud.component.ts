import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Imagem } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  imagem : any;
  erro : any;
  constructor(private crudService : CrudService) { 
    this.getter();
  }

  ngOnInit() {}
  getter(){
    this.crudService.getFotos().subscribe(
      (data : Imagem) => {
        this.imagem = data;
        console.log('A variavel que recebemos',data);
        console.log('A variavel que prenchemos', this.imagem)
      }, (error : any) => {
        this.erro = error;
        console.log(error);
      }
    );
  }
}
