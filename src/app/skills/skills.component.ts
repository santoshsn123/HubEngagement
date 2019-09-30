import { Component, OnInit, Input,forwardRef, HostBinding } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SkillsComponent),
      multi: true
    }
  ]
})
export class SkillsComponent implements ControlValueAccessor {
  chipsArray=[];
  externalId = '';
  skillsForm;
  @Input()
  set id(value: string) {
    this._ID = value;
    this.externalId = null;
  }
  @HostBinding('attr.id')
  
  registerOnChange(fn) {
    this.onChange = fn;
  }

  get id() {
    return this._ID;
  }

  private _ID = '';

  @Input('value') _value;
  @Input('placeholder') _placeholder;
  onChange: any = () => {};
  onTouched: any = () => {};

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  enterTheValue = () =>{
    if(!this.skillsForm.value)
    {
      alert("Please add skill and then press Enter Button");
      return;
    }
    this.chipsArray.push(this.skillsForm.value);
    this.skillsForm.reset();
    this.updateValue();
    this.onTouched();
  }
  updateValue = ()=>{
    this.value = this.chipsArray;
  }

  constructor() {
    this.skillsForm =new  FormControl('');
  }

 

  writeValue(value) {
    if (value) {
      this.value = value;
    }
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  removeSkill = (skill)=>{
    this.chipsArray.splice(this.chipsArray.indexOf(skill),1);
    this.updateValue();
  }
}
