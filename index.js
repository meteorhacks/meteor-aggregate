wrapAsync = (Meteor.wrapAsync)? Meteor.wrapAsync : Meteor._wrapAsync;
Mongo.Collection.prototype.aggregate = function(pipelines = [], options) {
  var coll;
  if (this.rawCollection) {
    // >= Meteor 1.0.4
    coll = this.rawCollection();
  } else {
	// < Meteor 1.0.4
    coll = this._getCollection();
  }
  if(parseInt(MongoInternals.NpmModules.mongodb.version) >= 3) {
    const cursor = wrapAsync(coll.aggregate, coll)(pipelines, options);
    return wrapAsync(cursor.toArray, cursor)();
  } else {
    return wrapAsync(coll.aggregate.bind(coll))(pipelines, options);
  }
}
Mongo.Collection.prototype.mapReduce = function(mapFunction, reduceFunction, options) {
  var coll;
  if (this.rawCollection) {
    // >= Meteor 1.0.4
    coll = this.rawCollection();
  } else {
	// < Meteor 1.0.4
    coll = this._getCollection();
  }
  return wrapAsync(coll.mapReduce.bind(coll))(mapFunction, reduceFunction, options);
}
