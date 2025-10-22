
// **** 1. i18n

// define the dictionary
$.i18n().load( {
    'fr' : {
      'key' : 'valueFr',
    },
    'en': {
        'key' : 'valueEn',
    }
})

// set the locale
$.i18n( {
    locale: 'en'
    //locale : navigator.language
} );

// **** 2. main code
// instanciate the model
// instanciate the controler

let model = new Model();

let controler = new Controler(model);

