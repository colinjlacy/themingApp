import { Component } from '@angular/core';
import { SettingsService } from './settings.service';

@Component({
    templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
    selected: String;
    availableThemes: {className: string, prettyName: string}[];

    constructor(private _settings: SettingsService) {
        this._settings.getTheme().subscribe(val => this.selected = val);
        this.availableThemes = this._settings.availableThemes;
    }

    public setTheme(e) {
        this._settings.setTheme(e);
    }
}
