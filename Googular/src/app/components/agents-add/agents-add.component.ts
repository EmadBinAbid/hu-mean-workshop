import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ga-agents-add',
  templateUrl: './agents-add.component.html',
  styleUrls: ['./agents-add.component.scss']
})
export class AgentsAddComponent implements OnInit {

  inputFirstName = '';
  inputLastName = '';
  inputStreet = '';
  inputCity = '';
  inputState = '';
  inputPostCode = '';
  inputEmail = '';
  
  constructor() { }

  ngOnInit() {
  }

}
