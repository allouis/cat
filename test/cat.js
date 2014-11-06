var test = require('tap');
var Cat = require('../build/Cat').Cat;

test('Cat', function (cat) {

  cat.test('Default name is Simon', function (t) {
    t.plan(1);
    var instance = new Cat();
    t.equals(instance.name, 'Simon', 'The default name is Simon');
  });

  cat.test('Constructor will set name', function (t) {
    t.plan(1);
    var name = Math.random().toString(36).slice(4, 8);
    var instance = new Cat(name);
    t.equals(instance.name, name, 'The constructor will set the name');
  });

  cat.test('meow method returns "MEOW"', function (t) {
    t.plan(1);
    var instance = new Cat();
    t.equals(instance.meow(), 'MEOW', 'meow() -> "MEOW"');
  });

  cat.test('eat method returns "nom nom nom"', function (t) {
    t.plan(1);
    var instance = new Cat();
    t.equals(instance.eat(), 'nom nom nom', 'eat() -> "nom nom nom"');
  });

  cat.test('sleep method will wait 1 second before executing callback', function (t) {
    t.plan(2);
    var instance = new Cat();
    var value;
    instance.sleep(function () {
      value = 1;
    });
    t.equals(value, undefined);
    setTimeout(function () {
      t.equals(value, 1, 'The value was set to 1 after 1000 milliseconds');
    }, 1000);
  });

});
