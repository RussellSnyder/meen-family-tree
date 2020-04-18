var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FamilyMemberSchema = new Schema({
    firstName: String,
    lastName: String,
    father: {
        type: Schema.Types.ObjectId,
        ref: 'FamilyMember'
    },
    mother: {
        type: Schema.Types.ObjectId,
        ref: 'FamilyMember'
    },
    partner: {
        type: Schema.Types.ObjectId,
        ref: 'FamilyMember'
    }
});


module.exports = mongoose.model('FamilyMember', FamilyMemberSchema);