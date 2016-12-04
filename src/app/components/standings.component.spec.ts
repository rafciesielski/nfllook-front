import { StandingsComponent } from './standings.component';

describe('StandingsComponent', () => {

    it('should have standings property', () => {
        this.standingsComponent = new StandingsComponent();
        expect(this.standingsComponent.standings).not.toBeNull();
    });

});
