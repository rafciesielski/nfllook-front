import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StandingsComponent } from './components/standings.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ StandingsComponent ],
  bootstrap:    [ StandingsComponent ]
})
export class AppModule { }
