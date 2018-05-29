import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../services/agents.service';

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

  agentData = {
    name:{first: "Amir", last: "Liaquat"}
    };
  
  constructor(private _agentsService: AgentsService) { }

  ngOnInit() {
  }

  addAgent(data)
  {
    this._agentsService.setAgentsList(this.agentData);
  }

}
