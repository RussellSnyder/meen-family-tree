const seeder = require('mongoose-seed');
const faker = require('faker');
 
// Connect to MongoDB via Mongoose
seeder.connect('mongodb://localhost/family-tree', function() {
 
  // Load Mongoose models
  seeder.loadModels([
    './models/family-member.js'
  ]);
 
  // Clear specified collections
  seeder.clearModels(['FamilyMember'], function() {
 
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
 
  });
});
 
const fakeFamilyMemberData = [];
for (let i = 0; i < 20; i++) {
  fakeFamilyMemberData.push({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
  })  
}


// Data array containing seed data - documents organized by Model
const data = [
    {
        'model': 'FamilyMember',
        'documents': fakeFamilyMemberData
    }
];