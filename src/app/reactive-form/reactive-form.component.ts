import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm;
  chipsArray=[];
  submitted:boolean=false;
  constructor(private formbuilder:FormBuilder) { 
    this.reactiveForm = this.formbuilder.group({
      firstName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      skills: [''],
    })
  }
  get f(){
    return this.reactiveForm.controls;
  }

  ngOnInit() {
  }

  onSubmit=()=> {
    this.submitted = true;
    if (this.reactiveForm.invalid) {
      return;
    }
    alert("First Name : "+this.reactiveForm.value.firstName+"\n Email : "+this.reactiveForm.value.email+"\n Skills : "+this.chipsArray);
  }
  seetheValue =()=>{
    this.chipsArray.push(this.reactiveForm.value.skills);
    this.reactiveForm.controls.skills.reset();
  }
}
