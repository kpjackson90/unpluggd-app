const {createTicket} = require('../../controllers/ticket');
const Ticket = require('../../models/Ticket');
const Event = require('../../models/Event');
const User = require('../../models/User');
const httpMocks = require('node-mocks-http');

User.findOne = jest.fn();
Event.findById = jest.fn();
let req, res;
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
});

describe('Testing the controller responsible for creating the tickets', () => {
  it('createTicket should be a function', () => {
    expect(typeof createTicket).toBe('function');
  });

  it('Should return status code 400 if request user is not defined', () => {
    req.user = null;
    createTicket(req, res);
    expect(res.statusCode).toBe(400);
  });

  it('Function does a search for the user', () => {
    req.user = 'john';
    req.user.id = 4;
    let user_role = 'host';
    let params = {
      _id: req.user.id,
      user_role,
    };

    createTicket(req, res);
    expect(User.findOne).toBeCalledWith(params);
  });

  it('User is not a host, status should be 400', () => {
    User.findOne.mockReturnValue(false);
    createTicket(req, res);
    expect(res.statusCode).toBe(400);
  });

  //this test is failing.. investigate
  it.only('Event id is not valid, status should be 404', () => {
    req.user = 'john';
    req.user.id = 4;

    User.findOne.mockReturnValue(true);
    Event.findById.mockReturnValue(true);
    createTicket(req, res);
    expect(res.statusCode).toBe(404);
  });
});
