- Firstly, create a package.json file in the folder

npm init -y

In your package.json file, add "mocha" as the tests. 
"scripts": {
    "test": "mocha"
  }

  Note: to display in a different reporter, for example, use "mocha --reporter "dot" 

- Secondly, add Mocha package to the package.json:

npm install mocha  --save-dev

- Finally, create a test file. We shall keep all testing files in a separate /test directory

mkdir test

- After creating the test file, and you have written the test. Use the command npm test to run the tests on your terminal.