import { Component, OnInit, ViewChild } from '@angular/core';

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  @ViewChild('f') form:any;

  langs:string[] = ["English","Hindi","Sanskrit"];
  email:string = '';

  model:Signup = new Signup();
  // form:any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.form.value);
    this.form.reset();
  }

}

class Signup{
  constructor(public firstName:String = '',
              public lastName:String = '',
              public email:String = '',
              public password:String = '',
              public language:String = ''
  ){

  }
}
