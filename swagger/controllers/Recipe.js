'use strict';

var utils = require('../utils/writer.js');
var Recipe = require('../service/RecipeService');

module.exports.addRecipe = function addRecipe (req, res, next, body) {
  Recipe.addRecipe(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listRecipe = function listRecipe (req, res, next) {
  Recipe.listRecipe()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
