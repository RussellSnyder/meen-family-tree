import Route from '@ember/routing/route';

export default class FamilyMembersRoute extends Route {
  model() {
    return this.store.findAll('family-member');
  }
}
