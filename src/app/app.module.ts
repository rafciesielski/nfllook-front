import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { NFLLookComponent } from './components/nfllook.component';
import { ContactComponent } from './components/contact.component';
import { StandingsComponent } from './components/standings.component';

const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'standings', component: StandingsComponent },
  { path: '', component: StandingsComponent },
  { path: '**', component: StandingsComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ NFLLookComponent, ContactComponent, StandingsComponent ],
  bootstrap:    [ NFLLookComponent ]
})
export class AppModule { }
