Package.describe({
  "summary": "Proper MongoDB aggregations support for Meteor",
  "version": "1.4.0",
  "git": "https://github.com/meteorhacks/meteor-aggregate.git",
  "name": "meteorhacks:aggregate"
});

Package.onUse(function(api) {
  configurePackage(api);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest', 'accounts-password', 'random'
  ], ['server']);

  // common before
  api.addFiles([
    'test.js'
  ], ['server']);
});

function configurePackage(api) {
  api.versionsFrom('METEOR@1.0');
  api.use(['mongo-livedata', 'meteorhacks:collection-utils@1.2.0'], ['server']);
  
  // common before
  api.addFiles([
    'index.js',
  ], ['server']);
}
