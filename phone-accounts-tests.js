// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by phone-accounts.js.
import { name as packageName } from "meteor/luxiaolin:phone-accounts";

// Write your tests here!
// Here is an example.
Tinytest.add('phone-accounts - example', function (test) {
  test.equal(packageName, "phone-accounts");
});
