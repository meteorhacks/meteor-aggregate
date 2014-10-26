[![](https://api.travis-ci.org/meteorhacks/meteor-aggregations.svg)](https://travis-ci.org/meteorhacks/meteor-aggregations)

# meteorhacks:aggregations

A simple package to add proper aggregation support for Meteor. No hacks, but the way how it should be.

> Only works on server side

## Usage

```
meteor add meteorhacks:aggregations
```

Then Simple use `.aggregate` function like below.

```js
var result = coll.aggregate([
  {$group: {_id: null, resTime: {$sum: "$resTime"}}}
]);
```

## Why?

There are few other aggregation packages out there. But all of them are hacks (okay, I like hacks).
But they don't work with if someone pass a custom driver when creating the `Mongo.Collection`.

And this package is short and simple.