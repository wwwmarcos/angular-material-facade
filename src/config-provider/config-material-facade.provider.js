(function() {
  'use strict';

  /**
  * @desc factory to alter default configs
  * 
  * @author Marcos
  * @example 
  * 
  *   config.$inject = ['$configMaterialFacadeProvider'];
  *    function config($configMaterialFacadeProvider){
  *      $configMaterialFacadeProvider
  *        .inputText({
  *          messages : {
  *              required : 'Campo requerido'
  *            , maxlength: 'Tamanho maximo atingido'
  *            , minlength: 'Campo pequeno'
  *          }
  *        });
  *    };
  */
  angular
  .module('ConfigMaterialFacade', [])
  .provider('$configMaterialFacade', $configMaterialFacade);

  function $configMaterialFacade(){
    var provider = {
        inputText : inputText
      , inputEmail : inputEmail  
      , $get : $get
    },
    defaultConfig = {
        inputText : {
          messages : {
              required : 'This is required'
            , maxlength: 'Thats too long'
            , minlength: 'Thats too short'
          }
        }
      , inputEmail : {
          pattern : '/^.+@.+\..+$/" /'
         , maxLength : 100
         , minLength : 3
         , messages : {
              required : 'This is required'
            , pattern :  'Invalid email'
            , maxlength: 'Thats too long'
            , minlength: 'Thats too short'
          }
      }
    };
    return provider;

    function inputText(config){
      defaultConfig.inputText = config; 
      return this;
    };
 
    function inputEmail(config){
      defaultConfig.inputEmail = config; 
      return this;
    };

    function $get(){
      var service = {
        get : getConfig
      }
      return service;

      function getConfig(component){
        return angular.copy(defaultConfig[component]);
      };

    };
  };
})();