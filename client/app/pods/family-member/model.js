import Model, { attr, belongsTo } from '@ember-data/model';

export default class FamilyMemberModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @belongsTo('family-member', { inverse: 'partner' }) partner;
  @belongsTo('family-member', { inverse: 'mother' }) mother;
  @belongsTo('family-member', { inverse: 'father' }) father;
}
