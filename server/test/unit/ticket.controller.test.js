const {createTicket} = require('../../controllers/ticket');

describe('Testing the controller responsible for creating the tickets', () => {
  it('createTicket should be a function', () => {
    expect(typeof createTicket).toBe('function');
  });
});
