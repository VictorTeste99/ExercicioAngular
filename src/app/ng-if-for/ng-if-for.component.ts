import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-for',
  templateUrl: './ng-if-for.component.html',
  styleUrls: ['./ng-if-for.component.css']
})
export class NgIfForComponent implements OnInit {
  numero : number = 1;
  maior : number;
  menor : number;
  verify : number;
  verifyy : number;

  constructor() { }

  ngOnInit() {
  }

}
