angular.module('starterApp')
       .controller('FormController5', FormController5);
function FormController5($scope) {
  $scope.schema =
              {
                "type": "object",
                "properties": {
                  "select": {
                    "title": "Select without titleMap",
                    "type": "string",
                    "tooltip":"Fdfd",
                    "enum": [
                      "हिंदी",
                      "हिंदी",
                      "c"
                    ],
                    // "minLength": 10,
                    // "default":"a",
                    // "default":"None",
                    "pattern": "^(?!None$)",
                    "validationMessage": "No option is selected!"

                  },
                  "select2": {
                    "title": "Select with हिंदी (old style)",
                    "type": "string",
                    "enum": [
                      "a",
                      "b",
                      "c"
                    ],
                    "validationMessage": "Don't be greedy!"

                  },
                  "noenum": {
                    "type": "string",
                    "title": "No enum, but forms says it's a select"
                  },
                  "array": {
                    "title": "Array with enum defaults to 'checkboxes'",
                    "type": "array",
                    "items": {
                      "type": "string",
                      "enum": [
                        "a",
                        "b",
                        "c"
                      ]
                    }
                  },
                  "array2": {
                    "title": "Array with titleMap",
                    "type": "array",
                    "default": [
                      "b",
                      "c"
                    ],
                    "items": {
                      "type": "string",
                      "enum": [
                        "a",
                        "b",
                        "c"
                      ]
                    }
                  },
                  "radios": {
                    "title": "Basic radio button example",
                    "type": "string",
                    "enum": [
                      "a",
                      "b",
                      "c"
                    ]
                  },
                  "radiobuttons": {
                    "title": "Radio buttons used to switch a boolean",
                    "type": "boolean",
                    "default": false
                  },
                  "required": [
                    "select2","select","noenum"
                  ]
                }

              }  ;

  $scope.form =
                [
                  "select",
                  {
                    "key": "select2",
                    "type": "select",
                    "titleMap": {
                      "हिंदी": "हिंदी",
                      "हिंदी": "हिंदी",
                      "c": "C"
                    }
                  },
                  {
                    "key": "noenum",
                    "type": "select",
                    "titleMap": [
                      {
                        "value": "a",
                        "name": "A"
                      },
                      {
                        "value": "b",
                        "name": "B"
                      },
                      {
                        "value": "c",
                        "name": "C"
                      }
                    ]
                  },
                  "array",
                  {
                    "key": "array2",
                    "type": "checkboxes",
                    "titleMap": [
                      {
                        "value": "a",
                        "name": "A"
                      },
                      {
                        "value": "b",
                        "name": "B"
                      },
                      {
                        "value": "c",
                        "name": "C"
                      }
                    ]
                  },
                  {
                    "key": "radios",
                    "type": "radios",
                    "titleMap": [
                      {
                        "value": "c",
                        "name": "C"
                      },
                      {
                        "value": "b",
                        "name": "B"
                      },
                      {
                        "value": "a",
                        "name": "A"
                      }
                    ]
                  },
                  {
                    "key": "radiobuttons",
                    "type": "radiobuttons",
                    "titleMap": [
                      {
                        "value": false,
                        "name": "No way"
                      },
                      {
                        "value": true,
                        "name": "OK"
                      }
                    ]
                  }
                ]    ;

  $scope.model5 = {};

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
