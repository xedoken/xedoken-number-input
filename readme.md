# xedoken-number-input

[![Build Status](https://travis-ci.org//xedoken-number-input.png?branch=master)](https://travis-ci.org//xedoken-number-input)



## Usage

### ES6 use

With StealJS, you can import this module directly in a template that is autorendered:

```js
import plugin from 'xedoken-number-input';
```

### CommonJS use

Use `require` to load `xedoken-number-input` and everything else
needed to create a template that uses `xedoken-number-input`:

```js
var plugin = require("xedoken-number-input");
```

## AMD use

Configure the `can` and `jquery` paths and the `xedoken-number-input` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'xedoken-number-input',
		    	location: 'node_modules/xedoken-number-input/dist/amd',
		    	main: 'lib/xedoken-number-input'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/xedoken-number-input/dist/global/xedoken-number-input.js'></script>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
