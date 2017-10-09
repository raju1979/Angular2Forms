import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,ReactiveFormsModule,Validators} from "@angular/forms";

@Component({
  selector: 'model-form',
  templateUrl: './model-form.component.html',
  styleUrls: ['./model-form.component.css']
})
export class ModelFormComponent implements OnInit {

  myform:FormGroup;
  firstName:FormControl;
  lastName:FormControl;
  email:FormControl;
  password:FormControl;
  language:FormControl;

  langs:string[] = [
    'English','French','German'
  ]

  constructor() {
   }

   createFormControls(){

     this.firstName =new FormControl('',Validators.required);
     this.lastName =new FormControl('',Validators.required);
     this.email = new FormControl('',[
       Validators.required,Validators.pattern("[^ @]*@[^ @]*")
     ]);
     this.password = new FormControl('',[
       Validators.required,Validators.minLength(8)
     ]);
     this.language = new FormControl('');

   }

   createForm(){
     this.myform = new FormGroup({
       name:new FormGroup({
         firstName:this.firstName,
         lastName:this.lastName,
       }),
       email:this.email,
       password:this.password,
       language:this.language,
     })
   }

  ngOnInit() {

    this.createFormControls();
    this.createForm();

  };//

  onSubmit(){
    console.log(this.myform.value);
    this.myform.reset();
  }

}
