const hbs = require('hbs')

hbs.registerHelper('selectedHelper', function(value, test) {
    if (value == undefined) 
        return '';
    return value==test ? 'selected' : '';

});

module.exports = {
    hbs
}