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
    .module('MaterialInputEmailDirective', [])
    .directive('inputEmail', inputEmail)
    .run(run);

    run.$inject = ['$templateCache']
    function run($templateCache){
      $templateCache
        .put('input-email.directive.html',
       '<ng-form name="inputEmailFacadeForm">'
     + ' <md-input-container class="{{mdClass}}">'
     + '     <label>{{label}}</label>'
     + '     <input data-ng-required="isRequired" type="email" md-no-asterisk="{{noAsterisk || false}}" name="{{name}}"'
     + '     data-ng-model="model" data-ng-pattern="{{pattern}}" maxlength={{maxLength}} minlength={{minLength}} />'
     + '     <div data-ng-messages="inputEmailFacadeForm[name].$error" data-ng-if="inputEmailFacadeForm[name].$dirty">'
     + '       <div data-ng-message="required">{{helper.messages.required}}</div>'
     + '       <div data-ng-message="pattern">{{helper.messages.pattern}}</div>'
     + '       <div data-ng-message="email">{{helper.messages.pattern}}</div>'
     + '       <div data-ng-message="minlength">{{helper.messages.minlength}}</div>'
     + '       <div data-ng-message="maxlength">{{helper.messages.maxlength}}</div>'
     + '     </div>'
     + '   </md-input-container>'
     + ' </ng-form>');
    };

    inputEmail.$inject = ['$configMaterialFacade']
    function inputEmail($configMaterialFacade){
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
          , pattern:    '@'
          /* messages overrides */
          , requiredMsg:  '@'
          , minLengthMsg: '@'
          , maxLengthMsg: '@'
          , imailInvalidMsg: '@'
        }
        , templateUrl : 'input-email.directive.html'
        , link : link
      };
      return directive;

      function link(scope, element, attrs){
        var defaultConfig = $configMaterialFacade.get('inputEmail');
        scope.helper = {
              pattern   : scope.pattern  || defaultConfig.pattern
            , maxLengt  : scope.maxLengt || defaultConfig.maxLengt
            , minLength : scope.maxLengt || defaultConfig.minLength
            , messages : {
                required : scope.requiredMsg       || defaultConfig.messages.required  
              , pattern :  scope.imailInvalidMsg   || defaultConfig.messages.pattern  
              , maxlength: scope.maxLengthMsg      || defaultConfig.messages.maxlength
              , minlength: scope.minLengthMsg      || defaultConfig.messages.minlength 
            }
        };
      };
    };
})();