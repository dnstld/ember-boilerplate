import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  async model() {
    let response = await fetch('https://jsonplaceholder.typicode.com/users');
    let parsed = await response.json();
    return parsed;
  }
}
