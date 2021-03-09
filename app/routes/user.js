import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  @service store;

  async model(params) {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    let parsed = await response.json();
    return parsed;
  }
}
