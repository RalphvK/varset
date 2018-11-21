# Basics

Varset is a very simple way to bind data to HTML elements. It's not really databinding, but rather a convenient way to organise the updating of various pieces of content in the DOM.

# Usage

Elements are "bound" to a variable by adding the ```data-var="variableName"``` attribute. For example:

```html
<span data-var="name">James May</span>
```

In your javascript, instantiate the Varset class:

```javascript
var varset = new Varset();
```

By default, the constructor will scan the document for unique ```data-var``` variable names (or keys), but the constructor also accepts a data object if you wish to explicitly define the initial values, like so:

```javascript
var varset = new Varset({
    variable_1: 'This is the first variable.',
    variable_2: 'This is the right variable.'
});
```

## Getting and Setting variables

To update a variable, you can use the ```setVariable(key, value)``` method. This example changes all instances of the ```name``` variable to 'Jeremy Clarkson':

```javascript
varset.setVariable('name', 'Jeremy Clarkson');
```

If you wish to update all variables in the DOM to reflect the value to stored in the Varset data object, you can use:

```javascript
varset.updateInstances();
```

If you want to get the value of a single variable from the data object use:

```javascript
varset.getVariable('name');
```

Sometimes you might have a DOM that is changing. In that case, you can syncronise the Varset data object with the document, just like the constructor does if no data is provided, by using:

```javascript
varset.setKeysFromDocument();
```