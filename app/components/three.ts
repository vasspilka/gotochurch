import { Component, View } from 'angular2/angular2';
import { One } from './one';
import { Two } from './two';
import { RouterLink } from 'angular2/router';

@Component({
    selector: 'three'
})
@View({
    template: `
        <div [router-link]="['/Two']"> &blacktriangleleft; </div>
        <div>I am the Spirit</div>
        <div [router-link]="['/One']"> &blacktriangleright; </div>`,
    directives: [ RouterLink ]
})
export class Three {
}
