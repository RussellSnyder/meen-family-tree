import Route from '@ember/routing/route';

export default class QuoteRoute extends Route {
  model() {
    return this.store.findAll('quote');
  }
}
