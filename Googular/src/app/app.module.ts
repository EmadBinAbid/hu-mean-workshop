import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgentsComponent } from './components/agents/agents.component';
import { AgentsAddComponent } from './components/agents-add/agents-add.component';
import { AgentsListComponent } from './components/agents-list/agents-list.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {
    path: 'agents', 
    component: AgentsComponent,
    children: [
      {path: 'agents-add', component: AgentsAddComponent},
      {path: 'agents-list', component: AgentsListComponent}
    ]
  },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: PageNotFoundComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    AgentsComponent,
    AgentsAddComponent,
    AgentsListComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
