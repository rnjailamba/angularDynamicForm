angular.module('starterApp')
       .controller('FormController7', FormController7);
function FormController7($scope) {


  $scope.schema = {
     "type": "object",
     "title": "Album",
     "properties": {
       "image": {
         "title": "Image",
         "type": "array",
         "format": "singlefile",
         "x-schema-form": {
           "type": "array"
         },
         "pattern": {
           "mimeType": "image/*",
           "validationMessage": "Falscher Dateityp: "
         },
         "maxSize": {
           "maximum": "2MB",
           "validationMessage": "Erlaubte Dateigröße überschritten: ",
           "validationMessage2": "Aktuelle Dateigröße: "
         },
         "maxItems": {
           "validationMessage": "Es wurden mehr Dateien hochgeladen als erlaubt."
         },
         "minItems": {
           "validationMessage": "Sie müssen mindestens eine Datei hochladen"
         }
       },
       "images": {
         "title": "Images",
         "type": "array",
         "format": "multifile",
         "x-schema-form": {
           "type": "array"
         },
         "pattern": {
           "mimeType": "image/*,!.gif",
           "validationMessage": "Falscher Dateityp: "
         },
         "maxSize": {
           "maximum": "2MB",
           "validationMessage": "Erlaubte Dateigröße überschritten: ",
           "validationMessage2": "Aktuelle Dateigröße: "
         },
         "maxItems": {
           "validationMessage": "Es wurden mehr Dateien hochgeladen als erlaubt."
         },
         "minItems": {
           "validationMessage": "Sie müssen mindestens eine Datei hochladen"
         }
       }
     },
     "required": [
       "images"
     ]
   };

   $scope.form = [
   {
     "key": "image",
     "type": "nwpFileUpload",
     "endpoint": "https://angular-file-upload-cors-srv.appspot.com/upload"
   }, {
     "key": "images",
     "type": "nwpFileUpload",
     "endpoint": "https://angular-file-upload-cors-srv.appspot.com/upload"
   }];

  $scope.model7 = {};

  $scope.onSubmit = function(form) {
    // First we broadcast an event so all fields validate themselves
    $scope.$broadcast('schemaFormValidate');
    console.log("The form is submitted");

    // Then we check if the form is valid
    if (form.$valid) {
      // ... do whatever you need to do with your data.
      console.log("form is valid");

    }
    else{
      console.log("form is invalid");
    }
  }
}
