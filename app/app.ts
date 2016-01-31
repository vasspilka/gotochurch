import { Home } from './components/home/home';
import { One } from './components/one';
import { Two } from './components/two';
import { Three } from './components/three';
import { Component, View } from 'angular2/angular2';
import { RouterLink, RouteConfig, RouterOutlet } from 'angular2/router';






@Component({
    selector: 'app'
})
@View({
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ RouterOutlet, RouterLink ]
})
@RouteConfig([
  { path: '/', component: Home, as: 'Home'},
  { path: '/one', component: One, as: 'One' },
  { path: '/two', component: Two, as: 'Two' },
  { path: '/three', component: Three, as: 'Three' }

])
export class App {
}
