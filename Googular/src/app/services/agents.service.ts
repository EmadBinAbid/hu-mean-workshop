import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAgentsResults } from '../interfaces/get-agents-results';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  agentsList = [];
  //currentSelectedAgent = {};

  constructor(private _http: HttpClient) {
    this._http.get('https://randomuser.me/api/?results=50&seed=hu')
    .subscribe((response: GetAgentsResults) => 
    {
      this.agentsList = response.results;
    }); 
  }

  getAgentsList()
  {
    return this.agentsList;
  }

  setAgentsList(data)
  {
    this.agentsList.push(data);
  }

  /*sendCurrentAgentDetails(agent)
  {
    this.currentSelectedAgent = agent;
  }*/

  receiveCurrentAgentDetails(id)
  {
    for(var i=0; i<this.agentsList.length; i++)
    {
      if(this.agentsList[i].id === id)
      {
        return this.agentsList[i];
      }
    }
  }
}
