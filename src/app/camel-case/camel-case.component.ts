import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-camel-case',
  templateUrl: './camel-case.component.html',
  styleUrls: ['./camel-case.component.css']
})
export class CamelCaseComponent implements OnInit {
  value_expression = "Santosh narwade here";
  camelcaseForm;
  constructor() { 
    this.camelcaseForm =new  FormControl('');
  }

  ngOnInit() {

  }

}
