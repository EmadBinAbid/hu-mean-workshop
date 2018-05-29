import { Component, OnInit } from '@angular/core';
import { AgentsService } from '../../services/agents.service';

@Component({
  selector: 'ga-agents-list',
  templateUrl: './agents-list.component.html',
  styleUrls: ['./agents-list.component.scss']
})
export class AgentsListComponent implements OnInit {

  agentsList = [];

  constructor(private _agentsService: AgentsService) { 
    
  }

  ngOnInit() {
    this.agentsList = this._agentsService.getAgentsList();
  }

}
