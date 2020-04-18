const seeder = require('mongoose-seed');
const faker = require('faker');
const chunk = require('lodash/chunk');
const FamilyMember = require('./models/family-member.js')

const port = process.env.PORT || 3000;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/family-tree');

// // Connect to MongoDB via Mongoose
// seeder.connect('mongodb://localhost/family-tree', function() {
 
//   // Load Mongoose models
//   seeder.loadModels([
//     './models/family-member.js'
//   ]);
 
//   // Clear specified collections
//   seeder.clearModels(['FamilyMember'], function() {

//     seeder.populateModels(data, function() {
//       seeder.disconnect();
//     })
//     // Callback to populate DB once collections have been cleared
//     // seeder.populateModels(data, function(err, success) {
//     //   seeder.disconnect();
//     // });
 
//   });
// });
 
const createFamilyMember = (mother, father) => {
  const familyMember = new FamilyMember({
    firstName: faker.name.firstName(),
    lastName: father ? father.lastName : faker.name.lastName()
  })

  if (mother) {
    familyMember.mother = mother._id
  } 

  if (father) {
    familyMember.father = father._id
  } 

  return familyMember
}

const initialMother = createFamilyMember();
const initialFather = createFamilyMember();

initialMother.partner = initialFather._id
initialFather.partner = initialMother._id

const generation1 = [
  initialMother,
  initialFather
];

const createGeneration = (previousGeneration) => {
  const nextGeneration = [];

  chunk(previousGeneration, 2).forEach((parents) => {
    // 3 kids for each parent
    for (let i = 0; i <= 3; i++) {
      const person = createFamilyMember(parents[0], parents[1]); 
      const partner = createFamilyMember(); 

      person.partner = person._id;
      partner.person = partner._id;

      nextGeneration.push(person)  
      nextGeneration.push(partner)  
    }
  });

  return nextGeneration;
}


// Data array containing seed data - documents organized by Model


FamilyMember.deleteMany(function(err, success) {
  console.log(err, success)
})

FamilyMember.insertMany(generation1, function(err, gen1) {
  if (!err) {
    console.log('generation 1 saved!')
    console.log(gen1)
  }

  FamilyMember.insertMany(createGeneration(gen1), function(err, gen2) {
    if (!err) {
      console.log('generation 2 saved!')
      console.log(gen2)
    }

    FamilyMember.insertMany(createGeneration(gen2), function(err, gen3) {
      if (!err) {
        console.log('generation 3 saved!')
        console.log(gen3)
      }
      FamilyMember.insertMany(createGeneration(gen3), function(err, gen4) {
        if (!err) {
          console.log('generation 4 saved!')
          console.log(gen4)
        }
      })    
    })  
  })  

})
