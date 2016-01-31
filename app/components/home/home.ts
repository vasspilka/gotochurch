import { Component, View } from 'angular2/angular2';
import { RouterLink } from 'angular2/router';
import { One } from '../one';

@Component({
    selector: 'home'
})
@View({
    templateUrl: 'components/home/home.html',
    directives: [ One, RouterLink ]
})
export class Home {
}
