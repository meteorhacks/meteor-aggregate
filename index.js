wrapAsync = (Meteor.wrapAsync)? Meteor.wrapAsync : Meteor._wrapAsync;
Mongo.Collection.prototype.aggregate = function(pipelines) {
  var coll = this._getCollection();
  return wrapAsync(coll.aggregate.bind(coll))(pipelines);
}