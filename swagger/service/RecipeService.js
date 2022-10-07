'use strict';


/**
 * adds a recipe item
 * Adds an item to the system
 *
 * body RecipeItem Recipe item to add (optional)
 * no response value expected for this operation
 **/
exports.addRecipe = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * recipe list
 * recipes 
 *
 * returns List
 **/
exports.listRecipe = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "id" : 0,
  "name" : "Onigiri",
  "cost" : 1000,
  "difficulty" : "Easy",
  "createAt" : "2022-08-28T09:12:33.001Z"
}, {
  "id" : 1,
  "name" : "Cutlet sandwich",
  "cost" : 1000,
  "difficulty" : "Normal",
  "createAt" : "2022-09-01T09:12:33.001Z"
}, {
  "id" : 2,
  "name" : "Onigiri 2",
  "cost" : 100,
  "difficulty" : "Easy",
  "createAt" : "2022-09-02T09:12:33.001Z"
}, {
  "id" : 3,
  "name" : "Super Onigiri 2",
  "cost" : 1000,
  "difficulty" : "Hard",
  "createAt" : "2022-09-03T09:12:33.001Z"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

