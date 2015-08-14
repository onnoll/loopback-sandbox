'use strict';

var systemLanguages = ['de', 'en', 'es', 'fr', 'it', 'pt', 'ru'];

module.exports = function(err) {

  this.languages.some(function(language) {
    if (systemLanguages.indexOf(language) < 0) {
      return err();
    }
  });
};
