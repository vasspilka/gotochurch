import { Component, View } from 'angular2/angular2';
import { Two } from './two';
import { Three } from './three';
import { RouterLink } from 'angular2/router';

@Component({
    selector: 'one'
})
@View({
    template: `
        <div [router-link]="['/Three']"> &blacktriangleleft; </div>
        <div>I am the One</div>
        <div [router-link]="['/Two']"> &blacktriangleright; </div>
        <div [router-link]="['/Home']"> &blacktriangledown; </div>
    `,
    directives: [ Two, Three, RouterLink ]
})
export class One {
}
