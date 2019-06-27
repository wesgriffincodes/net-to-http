const { createConnection } = require('net');

const from = 'yourMOM@gmail.com';
const to = 'themisguidedidiot@gmail.com';

const email = `From: "Monkey Brains Bobblehead" <${from}>
TO: "Alex" <${to}>
DATE: ${new Date()}
Subject: Hello from BOB!

Hello Alex, Sandra Bullock is greatest actress ever!\r\n.\r\n`;

const mailServerAddress = 'gmail-smtp-in.l.google.com';

const client = createConnection(25, mailServerAddress, () =>{
  console.log('connected');
});

const steps = [
  'HELO mobysucks.com\n',
  `MAIL FROM: <${from}>\n`,
  `RCPT TO:<${to}>\n`,
  'DATA\n',
  email,
  'QUIT\n'
];

let step = 0;

client.on('data', (data) => {
  console.log(data.toString());
  if(step === steps.length) return client.end();
  client.write(steps[step]);
  step++;
});
