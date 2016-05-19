angular.module('starterApp')
       .controller('FormController2', FormController2);
function FormController2($scope) {
  $scope.schema =
                  {
                    "type": "object",
                    "title": "Comment",
                    "properties": {
                      "name": {
                        "title": "Name",
                        "type": "string",
                        feedback: true
                      },
                      "email": {
                        "title": "Email",
                        "type": "string",
                        "pattern": "^\\S+@\\S+$",
                        "description": "Email will be used for evil.",
                        feedback: true,
                        fieldHtmlClass: "has-feedback"
                      },
                      "comment": {
                        "title": "Comment",
                        "type": "string",
                        "maxLength": 2,
                        "validationMessage": "Don't be greedy!",
                        feedback: true

                      }
                    },
                    "required": [
                      "name",
                      "email",
                      "comment"
                    ]
                  } ;

  $scope.form =
                [
                "name",
                "email",
                {
                  "key": "comment",
                  "type": "textarea",
                  "placeholder": "Make a comment"
                },
                {
                  "type": "submit",
                  "style": "btn-info",
                  "title": "OK"
                }
              ];

  $scope.model = {};

  $scope.onSubmit = function(form) {
    // First we broadcast an event so all fields validate themselves
    $scope.$broadcast('schemaFormValidate');
    console.log("The form is submitted");

    // Then we check if the form is valid
    if (form.$valid) {
      // ... do whatever you need to do with your data.
      console.log("form is valid2");

    }
    else{
      console.log("form is invalid2");
    }
  }
}
