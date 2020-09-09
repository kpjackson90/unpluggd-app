const {createTicket} = require('../../controllers/ticket');
const Ticket = require('../../models/Ticket');
const Event = require('../../models/Event');
const User = require('../../models/User');
const httpMocks = require('node-mocks-http');

User.findOne = jest.fn();
Event.findById = jest.fn();
Ticket.create = jest.fn();

let req, res;
beforeEach(() => {
  req = httpMocks.createRequest({
    method: 'POST',
    url: '/api/ticket',
    body: {
      ticket_name: 'ticket name',
      ticket_type: 'test ticket',
      ticket_access: 'ticket access',
      ticket_quantity: 5,
      event_id: 1,
    },
  });
  res = httpMocks.createResponse();
  req.user = '';
  // req.user = 'john';
  // req.user.id = 4;
  // let user_role = 'host';
  // let params = {
  //   _id: req.user.id,
  //   user_role,
  // };
});

describe('Testing the controller responsible for creating the tickets', () => {
  it('createTicket should be a function', () => {
    expect(typeof createTicket).toBe('function');
  });

  it('Should return status code 400 if request user is not defined', async () => {
    req.user = undefined;
    await createTicket(req, res);
    expect(res.statusCode).toBe(400);
  });

  it('User is not defined. Should send a response to the user with appropriate message', async () => {
    req.user = undefined;
    responseBody = {
      error: 'Bad Request',
    };

    await createTicket(req, res);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(responseBody);
  });

  it('Search for user is called with the correct parameters (id and user_role). user should be a host', async () => {
    req.user = 'john';
    req.user.id = 4;
    let user_role = 'host';
    let params = {
      _id: req.user._id,
      user_role,
    };

    await createTicket(req, res);
    expect(User.findOne).toBeCalledWith(params);
  });

  it('User is not a host, status should be 400', async () => {
    req.user = 'john';
    req.user.id = 4;
    User.findOne.mockReturnValue(undefined);
    await createTicket(req, res);
    expect(res.statusCode).toEqual(400);
  });

  it('User is not a host. should respond to user with the appropriate error message', async () => {
    req.user = 'john';
    req.user._id = 4;
    let responseBody = {
      error: 'Only host can create a ticket',
    };
    User.findOne.mockReturnValue(undefined);
    await createTicket(req, res);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(responseBody);
  });

  it('The respective event is searched for ', async () => {
    req.user = 'john';
    req.user.id = 4;

    User.findOne.mockReturnValue(true);
    await createTicket(req, res);
    expect(Event.findById).toBeCalled();
  });

  it('Event is not found. Status is 404', async () => {
    req.user = 'john';
    req.user.id = 4;
    User.findOne.mockReturnValue(true);
    Event.findById.mockReturnValue(undefined);
    await createTicket(req, res);
    expect(res.statusCode).toEqual(404);
  });

  it('Event is not found. should respond to the user with the appropriate message', async () => {
    req.user = 'john';
    req.user.id = 4;
    let responseBody = {error: 'Event not found'};
    User.findOne.mockReturnValue(true);
    Event.findById.mockReturnValue(undefined);
    await createTicket(req, res);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(responseBody);
  });

  it('User tries to create more tickets that what they have in reserve', async () => {
    req.user = 'john';
    req.user.id = 4;
    let responseBody = {
      error: 'Only allowed to create 2 tickets for the event Test event',
    };
    User.findOne.mockReturnValue(true);
    Event.findById.mockReturnValue({quantityRemaining: 2, name: 'Test event'});
    await createTicket(req, res);
    expect(res.statusCode).toEqual(400);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(responseBody);
  });

  it('User cannot create anymore tickets', async () => {
    req.user = 'john';
    req.user.id = 4;
    let responseBody = {
      error: 'Cannot create anymore tickets for the event Test event',
    };
    User.findOne.mockReturnValue(true);
    Event.findById.mockReturnValue({quantityRemaining: 0, name: 'Test event'});
    await createTicket(req, res);
    expect(res.statusCode).toEqual(400);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res._getJSONData()).toStrictEqual(responseBody);
  });

  it('User already created tickets for the event. Calculating quantity remaining', async () => {
    req.user = 'john';
    req.user.id = 4;
    let quantityRemaining = 10;
    let quantityRequested = 20;
    User.findOne.mockReturnValue(true);
    const eventMockResult = Event.findById.mockReturnValue({
      quantityRemaining,
      quantityRequested,
    });

    await createTicket(req, res);
    expect(quantityRemaining - req.body.ticket_quantity).toEqual(
      req.ticketQuantityRemaining
    );
  });

  it('first time creating ticket for event', async () => {
    req.user = 'john';
    req.user.id = 4;
    let quantityRemaining = 10;
    let quantityRequested = 10;
    User.findOne.mockReturnValue(true);
    const eventMockResult = Event.findById.mockReturnValue({
      quantityRemaining,
      quantityRequested,
    });

    await createTicket(req, res);
    expect(quantityRemaining - req.body.ticket_quantity).toEqual(
      req.ticketQuantityRemaining
    );
  });

  it.only('first time creating ticket for event', async () => {
    req.user = 'john';
    req.user.id = 4;
    let quantityRemaining = 10;
    let quantityRequested = 10;
    User.findOne.mockReturnValue(true);

    Event.findById.mockReturnValue({
      quantityRemaining,
      quantityRequested,
    });

    Event.prototype.save;

    await createTicket(req, res);
    expect(quantityRemaining - req.body.ticket_quantity).toEqual(
      req.ticketQuantityRemaining
    );
  });
});
