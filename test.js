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

Tinytest.add("aggregate on Meteor.users", function(test) {
  var coll = Meteor.users;
  coll.remove({});
  coll.insert({resTime: 20});
  coll.insert({resTime: 40});

  var result = coll.aggregate([
    {$group: {_id: null, resTime: {$sum: "$resTime"}}}
  ]);

  test.equal(result, [{_id: null, resTime: 60}]);
});

Tinytest.add("using some options", function(test) {
  var coll = new Mongo.Collection(Random.id());
  coll.insert({resTime: 20});
  coll.insert({resTime: 40});

  var options = {explain: true};
  var result = coll.aggregate([
    {$group: {_id: null, resTime: {$sum: "$resTime"}}}
  ], options);

  test.equal(typeof result[0]['$cursor'], 'object');
});

Tinytest.add("method mapReduce signature", function(test) {
  var coll = new Mongo.Collection(Random.id());
  test.equal(typeof coll.mapReduce, 'function');
});

Tinytest.add("let's mapReduce", function(test) {
  var coll = new Mongo.Collection(Random.id());
  coll.insert({group: 1, value: 10});
  coll.insert({group: 1, value: 100});
  coll.insert({group: 2, value: 1000});

  var mapFunction1 = function() {
    emit(this.group, this.value);
  };
  var reduceFunction1 = function(keyGroupId, values) {
    return Array.sum(values);
  };

  var result = coll.mapReduce(mapFunction1, reduceFunction1, { out: { inline: 1 } })

  test.equal(result, [{"_id":1,"value":110},{"_id":2,"value":1000}]);
});
