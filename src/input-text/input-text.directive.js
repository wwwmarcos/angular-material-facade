(function() {
  'use strict';
   
  /**
  * @desc facade for angular-material input component
  * 
  * @author Marcos
  * @example 
  * 
  * Full options:
  * <input-text name="person" model="vm.person" label="Name" is-required="true" no-asterisk="true" is-disabled="true" md-class="md-block" min-length="2" max-length="3" md-class="md-block"></input-text>
  *
  * Require options:
  * <input-text name="person" model="vm.person" label="Name"></input-text>
  */
   angular
    .module('MaterialInputTextDirective', [])
    .directive('inputText', inputText)
    .run(run);

    run.$inject = ['$templateCache']
    function run($templateCache){
      $templateCache
        .put('input-text.directive.html',
          '<ng-form name="inputFormFacade"> '
        + '  <md-input-container class={{mdClass}}>' 
        + '     <label>{{label}}</label>' 
        + '     <input name="{{name}}" data-ng-model="model" md-no-asterisk="{{noAsterisk || false}}" data-ng-required="{{isRequired}}"'
        + '     md-maxlength="{{maxLength}}" minlength="{{minLength}}" data-ng-disabled="{{isDisabled}}">' 
        + '     <div data-ng-messages="inputFormFacade[name].$error" data-ng-if="inputFormFacade[name].$dirty">' 
        + '       <div data-ng-message="required">{{helper.messages.required}}</div>' 
        + '       <div data-ng-message="md-maxlength">{{helper.messages.maxlength}}</div>' 
        + '       <div data-ng-message="minlength">{{helper.messages.minlength}}</div>' 
        + '     </div>' 
        + '   </md-input-container> '
        + '</ng-form>');
    };

    inputText.$inject = ['$configMaterialFacade']
    function inputText($configMaterialFacade){
      var directive = {
          restrict : 'E'
        , scope : {
            name : '@'
          , model: '='
          , label: '@'
          , isRequired: '='
          , noAsterisk: '='
          , isDisabled: '='
          , minLength:  '@'
          , maxLength:  '@'
          , mdClass:    '@'
          /* messages overrides */
          , requiredMsg:  '@'
          , minLengthMsg: '@'
          , maxLengthMsg: '@'
        }
        , templateUrl : 'input-text.directive.html'
        , link : link
      };
      return directive;

      function link(scope, element, attrs){
        var defaultConfig = $configMaterialFacade.get('inputText');
        scope.helper = {
             messages : {
                required : scope.requiredMsg   || defaultConfig.messages.required  
              , maxlength: scope.maxLengthMsg  || defaultConfig.messages.maxlength
              , minlength: scope.minLengthMsg  || defaultConfig.messages.minlength 
            }
        };
      };
    };
})();