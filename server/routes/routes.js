var quotes = require('../controllers/quote');
var familyMembers = require('../controllers/family-members');

module.exports = function(router) {
    router.route('/quotes')
        .post(function(req, res) { 
            quotes.addQuote(req,res); 
        })
        .get(function(req,res) { 
            quotes.getAllQuotes(req,res) 
        });

    router.route('/family-members')
        .post(function(req, res) { 
            familyMembers.addFamilyMember(req,res); 
        })
        .get(function(req,res) { 
            familyMembers.getAllFamilyMembers(req,res) 
        });

    router.route('/family-members/:id')
        .get(function(req,res) { 
            familyMembers.getFamilyMember(req,res) 
        })
        .put(function(req,res) { 
            familyMembers.updateFamilyMember(req,res) 
        })
        .delete(function(req,res) { 
            familyMembers.deleteFamilyMember(req,res) 
        })

    router.route('*').get(function(req, res) {
        res.sendfile('./public/index.html');
    });

};