Package.describe({
  name: 'luxiaolin:phone-accounts',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/luxiaolin/accounts-phone',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "phone"         : "1.0.3",
  "twilio"        : "1.10.0",
  "stream-buffers": "0.2.5"
});
Package.onUse(function(api) {

  api.use('npm-bcrypt@=0.9.2', 'server');
  api.use('accounts-base@1.0.2', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base@1.0.2', ['client', 'server']);
  api.use('srp@1.0.2', ['client', 'server']);
  api.use('sha@1.0.2', ['client', 'server']);
  api.use('email@1.0.5', ['server']);
  api.use('random@1.0.2', ['server']);
  api.use('ejson@1.0.5', 'server');
  api.use('callback-hook@1.0.2', 'server');
  api.use('check@1.0.4');
  api.use('underscore@1.0.2');
  api.use('ddp@1.0.14', ['client', 'server']);
  api.addFiles('sms_server.js', 'server');
  api.addFiles('phone_server.js', 'server');
  api.addFiles('phone_client.js', 'client');
  api.export('SMS', 'server');
});

Package.onTest(function(api) {

});
