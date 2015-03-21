wrapAsync = (Meteor.wrapAsync)? Meteor.wrapAsync : Meteor._wrapAsync;
Mongo.Collection.prototype.aggregate = function(pipelines) {
  var coll = MongoInternals.defaultRemoteCollectionDriver().mongo.db.collection(this._name);
  return wrapAsync(coll.aggregate.bind(coll))(pipelines);
}
