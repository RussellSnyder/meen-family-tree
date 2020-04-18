var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FamilyMemberSchema = new Schema({
    firstName: String,
    lastName: String
});


module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);