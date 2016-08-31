# input-email

Facade for angular-material md-input-container.


## Usage example:
```html
<input-email name="email" is-required="true" model="vm.email" label="Email"></input-email>
```

## Options:

| Atributte             | Required  |
| -------------         | --------- |
| name `'@'`            | true      |
| model `'='`           | true      |
| label `'@'`           | false     |
| isRequired `'='`      | false     |
| noAsterisk `'='`      | false     |
| isDisabled `'='`      | false     |
| minLength `'@'`       | false     |
| maxLength `'@'`       | false     |
| mdClass `'@'`         | false     |
| pattern `'@'`         | false     |
| requiredMsg `'@'`     | false     |
| minLengthMsg `'@'`    | false     |
| maxLengthMsg `'@'`    | false     |
| imailInvalidMsg `'@'` | false     |

## Full options usage example:
```html
<input-email name="email" pattern="/^.+@.+\..+$/" /"" model="vm.email" label="Email" is-required="true" no-asterisk="true" is-disabled="false" md-class="md-block" min-length="2" max-length="3" md-class="md-block"></input-email>
```

## Default errors messages:
| Error          | Message           |
| -------------  | ---------         |
|required        | 'This is required'|
|maxlength       | 'Thats too long'  |
|minlength       | 'Thats too short' |
|imailInvalidMsg | 'Invalid email'   |

### How do change the default config and messages?
Inject the `$configMaterialFacadeProvider` and call the inputText method.

Example:
```javascript

angular 
  .module('App', [])
  .config(config);
  
config.$inject = ['$configMaterialFacadeProvider'];
function config($configMaterialFacadeProvider){
  $configMaterialFacadeProvider
    .inputEmail({
        pattern : '/^.+@.+\..+$/" /'
        , maxLength : 3
        , minLength : 3
        , messages : {
            required : 'Campo obrigatório'
          , pattern :  'Email invalido'
          , minlength: 'O email deve ser menor'
          , maxlength: 'O Email deve ser maior'
        }
    });
};
```

Obs:
This directive use:
* [$templateCache](https://docs.angularjs.org/api/ng/service/$templateCache)
* [ngMessage](https://docs.angularjs.org/api/ngMessages/directive/ngMessage)