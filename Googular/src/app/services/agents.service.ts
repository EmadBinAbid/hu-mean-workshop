import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetAgentsResults } from '../interfaces/get-agents-results';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  agentsList = [];

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
}
