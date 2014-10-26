Tinytest.add('method signature', function(test) {
  var coll = new Mongo.Collection(Random.id());
  test.equal(typeof coll.aggregate, 'function');
});

Tinytest.add("let's aggregate", function(test) {
  var coll = new Mongo.Collection(Random.id());
  coll.insert({resTime: 20});
  coll.insert({resTime: 40});

  var result = coll.aggregate([
    {$group: {_id: null, resTime: {$sum: "$resTime"}}}
  ]);

  test.equal(result, [{_id: null, resTime: 60}]);
});