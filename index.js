wrapAsync = (Meteor.wrapAsync)? Meteor.wrapAsync : Meteor._wrapAsync;
Mongo.Collection.prototype.aggregate = function(pipelines) {
  var coll;
  if (this.rawCollection) {
    // >= Meteor 1.0.4
    coll = this.rawCollection();
  } else {
	// < Meteor 1.0.4
    coll = this._getCollection();
  }
  return wrapAsync(coll.aggregate.bind(coll))(pipelines);
}
