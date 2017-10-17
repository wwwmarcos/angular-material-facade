# angular-material-facade

Facade for angular-material components

## under construction

## Install 
`yarn add angular-material-facade`

## Why?
Compare yourself:

This:

```html
<md-input-container class="md-block">
  <label>Description</label>
  <input md-maxlength="30" required md-no-asterisk name="description" ng-model="project.description">
  <div ng-messages="projectForm.description.$error">
    <div ng-message="required">This is required.</div>
    <div ng-message="md-maxlength">Thats too long.</div>
  </div>
</md-input-container>
```

Or:

```html
<input-text name="description" is-required="true" model="vm.description" label="Description"></input-text>
```

¯\_(ツ)_/¯


Available components:

* [input-text (facade for md-input-container)](https://github.com/marcosflorencio/angular-material-facade/tree/master/src/input-text)
* [input-email (facade for md-input-container with email validations)](https://github.com/marcosflorencio/angular-material-facade/tree/master/src/input-email)

