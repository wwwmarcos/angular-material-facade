# input-text

Facade for angular-material md-input-container.


## Usage example:
```html
<input-text name="description" is-required="true" model="vm.description" label="Description"></input-text>
```

## Options:

| Atributte           | Required  |
| -------------       | --------- |
| name `'@'`          | true      |
| model `'='`         | true      |
| label `'@'`         | false     |
| isRequired `'='`    | false     |
| noAsterisk `'='`    | false     |
| isDisabled `'='`    | false     |
| minLength `'@'`     | false     |
| maxLength `'@'`     | false     |
| mdClass `'@'`       | false     |
| requiredMsg `'@'`   | false     |
| minLengthMsg `'@'`  | false     |
| maxLengthMsg `'@'`  | false     |

## Full options usage example:
```html
<input-text name="person" model="vm.person" label="Name" is-required="true" no-asterisk="true" is-disabled="true" md-class="md-block" min-length="2" max-length="3" md-class="md-block"></input-text>
```

## Default errors messages:
| Error          | Message           |
| -------------  | ---------         |
|required        | 'This is required'|
|maxlength       | 'Thats too long'  |
|minlength       | 'Thats too short' |

### How do change this messages?
Inject the `$configMaterialFacadeProvider` and call the inputText method.

Example:
```javascript

angular 
  .module('MyBeatifulModule', [])
  .config(config);
  
config.$inject = ['$configMaterialFacadeProvider'];
function config($configMaterialFacadeProvider){
  $configMaterialFacadeProvider
    .inputText({
      messages : {
          required : 'Campo obrigatório'
        , maxlength: 'Tamanho maximo atingido'
        , minlength: 'Tamanho minimo não atingido'
      }
    });
};
```

Obs:
This directive use:
* [$templateCache](https://docs.angularjs.org/api/ng/service/$templateCache)
* [ngMessage](https://docs.angularjs.org/api/ngMessages/directive/ngMessage)