import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app-react', () =>
  import ('../app-react/app-react.js'), pathPrefix('/app-react'));
singleSpa.registerApplication('app-angular', () =>
  import ('../app-angular/app.js'), pathPrefix('/app-angular'));

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}