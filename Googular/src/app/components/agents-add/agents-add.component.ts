import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../services/agents.service';
import { FormsModule } from '@angular/forms';

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

  agentData = {};
  
  constructor(private _agentsService: AgentsService) { }

  ngOnInit() {
  }

  addAgent()
  {
    this.agentData = {
      name: {first: this.inputFirstName, last: this.inputLastName},
      location: {street: this.inputStreet, city: this.inputCity, state: this.inputState, postcode: this.inputPostCode},
      accounts: {email: this.inputEmail}  
    };
    this._agentsService.setAgentsList(this.agentData);
  }

}
