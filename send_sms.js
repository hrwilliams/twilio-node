require('dotenv').config();

// require the Twilio module and create a REST client
const client = require('twilio')(process.env.TwilioAccountSid, process.env.TwilioAuthToken);

client.messages.create(
  {
    to: '+15038410169',
    from: '+19714075467',
    body: 'hey ',
  },
  (err, message) => {
    console.log(message.sid);
  }
);
