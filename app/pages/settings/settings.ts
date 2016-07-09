import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';

/*
 Generated class for the SettingsPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/settings/settings.html',
})
export class SettingsPage {
    availableThemes: {className: string, prettyName: string}[];

    constructor(private _events: Events) {
        this.availableThemes = [
            {className: 'blue-theme', prettyName: 'Blue'},
            {className: 'red-theme', prettyName: 'Red'}
        ]
    }

    public setTheme(e) {
        this._events.publish('themeChange', e);
    }
}
