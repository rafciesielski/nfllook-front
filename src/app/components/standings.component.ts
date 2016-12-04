import { Component, OnInit } from '@angular/core';
import { StandingsService, Standings } from '../services/standings.service';

@Component({
    templateUrl: 'app/components/standings.component.html',
    providers: [ StandingsService ]
})
export class StandingsComponent implements OnInit {

    public standings: Standings;

    constructor(
        private _standingsService: StandingsService
    ) { }

    ngOnInit() {
        this.standings = this._standingsService.get(12);
    }
}
