

const assert = require("assert");

//require("../lib/sample")
var CarFile = require('../lib/car');


describe('Test Car object', function() {
  var myCar = new CarFile.Car('Citron', '123', false);

  it('returns 42', function() {
    assert.equal( myCar.theAnswer(), 42);
  });

  it('has make', function(){

    assert.equal( myCar.make(), "Citron" );
  });

});
