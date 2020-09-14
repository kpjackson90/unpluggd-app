const {createTicket} = require('../../controllers/ticket');
const Ticket = require('../../models/Ticket');
const Event = require('../../models/Event');
const User = require('../../models/User');
const httpMocks = require('node-mocks-http');

User.findOne = jest.fn();
Event.findById = jest.fn();
Event.updateOne = jest.fn();
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
  req.user.id = '';
  User.findOne.mockReturnValue('');
  Event.findById.mockReturnValue('');
  Event.updateOne.mockReturnValue('');
  Ticket.create.mockReturnValue('');
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
    req.user.id = 4;
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

  it('first time creating ticket for event', async () => {
    req.user = 'john';
    req.user.id = 4;
    let quantityRemaining = 10;
    let quantityRequested = 10;
    User.findOne.mockReturnValue(true);

    Event.findById.mockReturnValue({
      quantityRemaining,
      quantityRequested,
    });

    await createTicket(req, res);
    expect(quantityRemaining - req.body.ticket_quantity).toEqual(
      req.ticketQuantityRemaining
    );
  });

  it('Ensure the ticket created is called with the correct arguments', async () => {
    req.user = 'john';
    req.user.id = 4;
    let quantityRemaining = 10;
    let quantityRequested = 10;
    const {
      ticket_name,
      ticket_type,
      ticket_access,
      ticket_quantity,
      event_id,
    } = req.body;

    let params = {
      ticket_name,
      ticket_type,
      ticket_access,
      ticket_quantity,
      event: event_id,
      host: req.user.id,
    };
    User.findOne.mockReturnValue(true);

    Event.findById.mockReturnValue({
      quantityRemaining,
      quantityRequested,
      tickets: ['ticket1', 'ticket2'],
    });

    Ticket.create.mockReturnValue({_id: '1234'});

    await createTicket(req, res);
    expect(Ticket.create).toBeCalledWith(params);
  });

  it('Ensure update is called ', async () => {
    req.user = 'john';
    req.user.id = 4;
    let quantityRemaining = 10;
    let quantityRequested = 10;
    const {
      ticket_name,
      ticket_type,
      ticket_access,
      ticket_quantity,
      event_id,
    } = req.body;

    let params = {
      ticket_name,
      ticket_type,
      ticket_access,
      ticket_quantity,
      event: event_id,
      host: req.user.id,
    };
    User.findOne.mockReturnValue(true);

    Event.findById.mockReturnValue({
      quantityRemaining,
      quantityRequested,
      tickets: ['ticket1', 'ticket2'],
      name: 'Test event',
    });

    Ticket.create.mockReturnValue({_id: '1234'});

    await createTicket(req, res);
    expect(Event.updateOne).toBeCalled();
  });

  it('Ticket is successfully created. Return status 201 with correct message ', async () => {
    req.user = 'john';
    req.user.id = 4;
    let quantityRemaining = 10;
    let quantityRequested = 10;
    const {
      ticket_name,
      ticket_type,
      ticket_access,
      ticket_quantity,
      event_id,
    } = req.body;

    let params = {
      ticket_name,
      ticket_type,
      ticket_access,
      ticket_quantity,
      event: event_id,
      host: req.user.id,
    };
    User.findOne.mockReturnValue(true);

    Event.findById.mockReturnValue({
      quantityRemaining,
      quantityRequested,
      tickets: ['ticket1', 'ticket2'],
      name: 'Test event',
    });

    Ticket.create.mockReturnValue({_id: '1234'});
    let message = {
      success: `${req.body.ticket_quantity} tickets were created for the event Test event`,
    };

    await createTicket(req, res);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res.statusCode).toEqual(201);
    expect(res._getJSONData()).toStrictEqual(message);
  });

  it('Error occured while creating the ticket. Should return status code of 422 with message', async () => {
    req.user = 'john';
    req.user.id = 4;
    let quantityRemaining = 10;
    let quantityRequested = 10;
    const {
      ticket_name,
      ticket_type,
      ticket_access,
      ticket_quantity,
      event_id,
    } = req.body;

    let params = {
      ticket_name,
      ticket_type,
      ticket_access,
      ticket_quantity,
      event: event_id,
      host: req.user.id,
    };

    User.findOne.mockReturnValue(true);

    Event.findById.mockReturnValue({
      quantityRemaining,
      quantityRequested,
      name: 'Test event',
    });

    let message = {
      error: 'Server cannot process your request due to errors',
    };

    await createTicket(req, res);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res.statusCode).toEqual(422);
    expect(res._getJSONData()).toStrictEqual(message);
  });
});
