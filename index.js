wrapAsync = Meteor.wrapAsync || Meteor._wrapAsync;
Mongo.Collection.prototype.aggregate = function(pipelines) {
  //         >= Meteor 1.0.4       < Meteor 1.0.4
  var coll = (this.rawCollection || this._getCollection)();
  return wrapAsync(coll().aggregate.bind(coll))(pipelines);
}
