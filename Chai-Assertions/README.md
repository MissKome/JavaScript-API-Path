Chai is an assertion library for node js and can be paired with javascript framework.

Chai is classified into two

BDD (Behavior Driven Development)

 * Expect
 * Should

TDD (Test Driven Development)

 * Assert

 -Install chai :

Let's add Mocha and Chai packages to the package.json

npm install mocha chai --save-

node test/testfile.js

- Chai Configuration

chai.config.includeStack,: is false by default — if we want to see the full stack trace, we can set this to true

chai.config.showDiff,: is to include or exclude differences thrown by the assertion error. By default, it will be true.

chai.config.truncateThreshold: is to include or exclude differences thrown by the assertion error. By default, it will be true.
