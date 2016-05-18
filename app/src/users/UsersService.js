angular
    .module('starterApp')
    .service('sharedProperties', function () {
    var select1 = '';
    var select2 = '';

    return {
        getProperty1: function () {
            return select1;
        },
        setProperty1: function(value) {
            select1 = value;
        },
        getProperty2: function () {
            return select2;
        },
        setProperty2: function(value) {
            select2 = value;
        }
    };
    });
