import QUnit from 'steal-qunit';
import { ViewModel } from './xedoken-number-input';

// ViewModel unit tests
QUnit.module('xedoken-number-input');

QUnit.test('Initializes the ViewModel', function() {
    var vm = new ViewModel();

    QUnit.equal(vm.attr('value'), 0,
        'Default value is 0');
    QUnit.equal(vm.attr('max'), 10,
        'Max value is 10');
    QUnit.equal(vm.attr('min'), 0,
        'Max value is number max value');
});

QUnit.test('.increment', function() {
    var vm = new ViewModel();

    vm.increment();
    QUnit.equal(vm.attr('value'), 1, 'Value Incremented');
});

QUnit.test('.decrement', function() {
    var vm = new ViewModel();

    vm.increment();
    vm.increment();
    vm.decrement();
    QUnit.equal(vm.attr('value'), 1, 'Value updated');
});