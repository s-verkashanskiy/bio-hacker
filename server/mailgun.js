import mailgun from "mailgun-js";
const DOMAIN = "sandbox99baede0d78e4bf8a19854cb258433c0.mailgun.org";
const mg = mailgun({apiKey: "5e7bb7dd8e0dc8a4355097d20b816c05-ffefc4e4-540759df", domain: DOMAIN});
const data = {
	from: "ksu-elbrus@ya.ru>",
	to: "ksu-elbrus@ya.ru",
	subject: "Hello",
	text: "Testing some Mailgun awesomness!"
};
mg.messages().send(data, function (error, body) {
  if (error) {
    console.log(error);
  }
	console.log(body);
});

// You can see a record of this email in your logs: https://app.mailgun.com/app/logs.

// You can send up to 300 emails/day from this sandbox server.
// Next, you should add your own domain so you can send 10000 emails/month for free.
