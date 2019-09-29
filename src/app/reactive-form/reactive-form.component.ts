import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  profileForm;
  chipsArray=[];
  submitted:boolean=false;
  constructor(private formbuilder:FormBuilder) { 
    this.profileForm = this.formbuilder.group({
      firstName: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
      skills: [''],
    })
  }
  get f(){
    return this.profileForm.controls;
  }

  ngOnInit() {
  }

  onSubmit=()=> {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    alert("First Name : "+this.profileForm.value.firstName+"\n Email : "+this.profileForm.value.email+"\n Skills : "+this.chipsArray)
    
  }
  seetheValue =()=>{
    this.chipsArray.push(this.profileForm.value.skills);
    this.profileForm.controls.skills.reset();
  }
}
