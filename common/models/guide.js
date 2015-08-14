const validatesLanguages = require('../validators/validatesLanguages');

module.exports = function(Guide) {

  Guide.validatesLengthOf('languages', {min: 1, message: 'You need to add 1 language at least'});
  Guide.validate('languages', validatesLanguages, {message: 'Languages are not in supported languages'});
};
