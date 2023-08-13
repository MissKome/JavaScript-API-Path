  describe('Mocha Hooks', () => {

    before('Execute Before All Tests',() => {
        console.log('Executing Before All Tests')
    });

    beforeEach('Execute Before Each Test',() => {
        console.log('Executing Before Each Tests')
    });

    after('Execute After All Test',() => {
        console.log('Executing After All Tests')
        
    });

    afterEach('Execute After Each Test',() => {
        console.log('Executing After Each Tests')
    });

    it('Mocha Hooks Test', () => {
        ConsoleLogEntry.log('This is a test for Mocha Hooks')
    });

  
  });