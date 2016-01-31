import { Component, View } from 'angular2/angular2';
import { One } from './one';
import { Three } from './three';
import { RouterLink } from 'angular2/router';

@Component({
    selector: 'two'
})
@View({
    template: `
        <div [router-link]="['/One']"> &blacktriangleleft; </div>
        <div>I am the Son</div>
        <div [router-link]="['/Three']"> &blacktriangleright; </div>
    `,
    directives: [ RouterLink ]
})
export class Two {
}
