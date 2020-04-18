var FamilyMember = require('../models/family-member');

module.exports.getAllFamilyMembers = function(req, res) {
    FamilyMember.find(function(err, familyMembers) {
        if (err) {
            res.send(err);
        }
        res.json({familyMembers: familyMembers});
    });
};

module.exports.getFamilyMember = function(req, res) {
    const id = req.params.id;

    FamilyMember.findById(id, function(err, familyMember) {
        if (err) {
            res.send(err);
        }
        res.json(familyMember);
    });
};

module.exports.addFamilyMember = function(req,res) {
    var familyMember = new FamilyMember(req.body.familyMember);
    familyMember.save(function(err) {
        if (err) {
            res.send(err);
        }
        res.json(familyMember);
    });
};

module.exports.updateFamilyMember = function(req,res) {
    const id = req.params.id;

    const conditions = {_id: id}
    const update = req.body.familyMember;

    FamilyMember.update(conditions, update, function(err, success) {
        if (err) {
            res.send(err);
        }
        res.json(success);
    });
};

module.exports.deleteFamilyMember = function(req, res) {
    const id = req.params.id;

    FamilyMember.findByIdAndDelete(id, function(err, familyMember) {
        if (err) {
            res.send(err);
        }
        res.json(familyMember);
    });
};
