import { Component, OnInit } from '@angular/core';

import {ReactiveFormsModule,FormControl} from "@angular/forms";

import 'rxjs/Rx';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  searchField:FormControl;
  searches:string[] = [];

  constructor() {
   }

  ngOnInit() {
    this.searchField = new FormControl();

    this.searchField.valueChanges
      .debounceTime(800)
      .distinctUntilChanged()
      .subscribe(term => {
        this.searches.push(term);
      })
  }

}
