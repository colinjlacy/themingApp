/**
 * Created by colinjlacy on 7/2/16.
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class SettingsService {
    private theme: BehaviorSubject<String>;
    availableThemes: {className: string, prettyName: string}[];

    constructor() {
        this.theme = new BehaviorSubject('blue-theme');
        this.availableThemes = [
            {className: 'blue-theme', prettyName: 'Blue'},
            {className: 'red-theme', prettyName: 'Red'}
        ];
    }

    setTheme(val) {
        this.theme.next(val);
    }

    getTheme() {
        return this.theme.asObservable();
    }
}