import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div style="margin-top: 100px;">
      Você está no microfrontend que está construído em Angular 
    </div>
    <a [routerLink]="['/subroute1']" routerLinkActive="active">Angular rota 1</a>
    <a [routerLink]="['/subroute2']" routerLinkActive="active">Angular rota 2</a>

    <router-outlet></router-outlet>
  `,
})
export class App {
}
