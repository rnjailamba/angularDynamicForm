angular.module('starterApp')
       .controller('FormController4', FormController4);
function FormController4($scope) {
  $scope.schema =
                  {
                    "type": "object",
                    "title": "Comment",
                    "properties": {
                      "name": {
                        "title": "Name",
                        "type": "string"
                      },
                      "email": {
                        "title": "Email",
                        "type": "string",
                        "pattern": "^\\S+@\\S+$",
                        "description": "Email will be used for evil."
                      },
                      "comment": {
                        "title": "Comment",
                        "type": "string",
                        "maxLength": 20,
                        "validationMessage": "Don't be greedy!"
                      }
                    },
                    "required": [
                      "name",
                      "email",
                      "comment"
                    ]
                  };

  $scope.form =
      [
        {
          "type": "help",
          "helpvalue": "<div class=\"alert alert-info\">Grid it up with bootstrap</div>"
        },
        {
          "type": "section",
          "htmlClass": "row",
          "items": [
            {
              "type": "section",
              "htmlClass": "col-xs-6",
              "items": [
                "name"
              ]
            },
            {
              "type": "section",
              "htmlClass": "col-xs-6",
              "items": [
                "email"
              ]
            }
          ]
        },
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
      ]  ;

  $scope.model4 = {};

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
