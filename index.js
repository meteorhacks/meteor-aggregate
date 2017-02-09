wrapAsync = (Meteor.wrapAsync)? Meteor.wrapAsync : Meteor._wrapAsync;
Mongo.Collection.prototype.aggregate = function(pipelines, options) {
  var coll;
  if (this.rawCollection) {
    // >= Meteor 1.0.4
    coll = this.rawCollection();
  } else {
	// < Meteor 1.0.4
    coll = this._getCollection();
  }
  return wrapAsync(coll.aggregate.bind(coll))(pipelines, options);
}

Mongo.Collection.prototype.aggregateAsync = function() {
  var collection;
  if (this.rawCollection) {
    // >= Meteor 1.0.4
    collection = this.rawCollection();
  } else {
	// < Meteor 1.0.4
    collection = this._getCollection();
  }
  return collection.aggregate.call(collection, arguments);
}
