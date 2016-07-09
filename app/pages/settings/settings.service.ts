/**
 * Created by colinjlacy on 7/2/16.
 */
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';

@Injectable()
export class SettingsService {
    private theme: string;

    constructor(private _events: Events) {

        this.theme = this.theme || 'blue-theme';
    }

    setTheme(e) {
        this.theme = e;
        this._events.publish('themeChange', e);
    }

    getTheme() {
        return this.theme;
    }
}