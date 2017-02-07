import QUnit from 'steal-qunit';
import plugin from './xedoken-number-input';

QUnit.module('xedoken-number-input');

QUnit.test('Initialized the plugin', function(){
  QUnit.equal(typeof plugin, 'function');
  QUnit.equal(plugin(), 'This is the xedoken-number-input plugin');
});
