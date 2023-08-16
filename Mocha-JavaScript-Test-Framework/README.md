~Mocha is a JavaScript-based testing framework running on NodeJS and browser.

~Mocha is used to oranize and excute test cases.

~Mocha makes asynchronous testing to be simple and fun to execute.

...
~Mocha has two pre-bundled function calls; describe( ) and it () functions.

👉describe () : is a simple way to group our tests in mocha

👉it (): is a way to describe the individual test cases. 

...
~Mocha Hooks

👉before () : runs before all tests in the code block

👉after () : runs after all tests in the code block

👉beforeEach () : runs before each tests in the code block

👉afterEach () : runs after each tests in the code block

...
~Test Features

👉Exclusive Tests - allows us to execute only the specified test suite or a test case. It can be achieved by adding .only() function, and it can be added to both describe() and it() functions.

👉Inclusive Tests - This will tell Mocha to simply ignore these tests suites or test cases. This can be achieved by adding .skip(). 

👉Pending Tests - Pending tests will be included in the test results and marked as pending. A pending test is not considered as failed a test.

...
~Retry Tests: Used too execute the failed tests several times according to your requirements. Retry will not work with before() and after() hooks. But it can be used in beforeEach() and afterEach() hooks.

...
~Timeout Tests: used to tell Mocha for the timeouts. There are 3 levels where timeouts can be used.

👉Suite-level timeouts are used to throw out the test suits.

👉test-level timeouts are specific to the test case.

👉Hook-level timeouts can be used in the hooks.

...
~Reporters

Types of reporters

👉SPEC: Spec is the default reporter. It outputs a hierarchical view according to the test cases. 

(mocha --reporter spec)

👉DOT MATRIX:dot matrix reporter is a series of characters which represent the test cases. Failures are highlighted in the red exclamation mark, the pending tests with the blue comma and the slow tests as a yellow color. 

(mocha --reporter dot)

👉Other types of reporters are; NYAN, TAP, Landing Strip, List, Proress, JSON Stream, JSON, Min, Doc. 

(mocha --reporter nyan), (mocha --reporter json)
