angular.module('starterApp')
       .controller('FormController3', FormController3);
function FormController3($scope) {
  $scope.schema =
                {
                  "type": "object",
                  "title": "Types",
                  "properties": {
                    "string": {
                      "type": "string",
                      "minLength": 3
                    },
                    "integer": {
                      "type": "integer"
                    },
                    "number": {
                      "type": "number"
                    },
                    "boolean": {
                      "type": "boolean"
                    }
                  },
                  "required": [
                    "number"
                  ]
                };

  $scope.form =
                [
                  "*",
                  {
                    "type": "submit",
                    "title": "OK"
                  }
                ];

  $scope.modell = {};

  $scope.onSubmit = function(form) {
    // First we broadcast an event so all fields validate themselves
    $scope.$broadcast('schemaFormValidate');
    console.log("The form is submitted");

    // Then we check if the form is valid
    if (form.$valid) {
      // ... do whatever you need to do with your data.
      console.log("form is valid");
      console.log('Current model', $scope.modell);


    }
    else{
      console.log("form is invalid");
    }
  }
}
