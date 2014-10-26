MongoInternals.Connection.prototype.aggregate = function(collectionName, pipelines) {
  var coll = this._getCollection(collectionName);
  return Meteor.wrapAsync(coll.aggregate, coll)(pipelines);
};

MongoInternals.RemoteCollectionDriver.prototype.open = function(name) {
  var self = this;
  var ret = {};
  [
    'find', 'findOne', 'insert', 'update', 'upsert',
    'remove', '_ensureIndex', '_dropIndex', '_createCappedCollection',
    'dropCollection', 'aggregate'
  ].forEach(function(n) {
    ret[n] = self.mongo[n].bind(self.mongo, name);
  });

  return ret;
};

Mongo.Collection.prototype.aggregate = function(pipelines) {
  return this._collection.aggregate(pipelines);
}