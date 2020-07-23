import dotenv from 'dotenv';
import ZB from 'zeebe-node';
import mailgun from 'mailgun-js';

dotenv.config();

async function sendEmail() {
  const mg = mailgun({ apiKey: process.env.MG_APIKEY, domain: process.env.MG_DOMAIN });
  const data = {
    from: '<ksu-elbrus@ya.ru>',
    to: 'ksu-elbrus@ya.ru',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!',
  };
  const result = await mg.messages().send(data);
  return result;
}

// Job handler
async function handler(job, complete, worker) {
  worker.log('Task variables', job.variables);
  // Task worker business logic goes here
  const result = await sendEmail();
  console.log(result);
  const updateToBrokerVariables = {
    emailId: result.id,
  };
  complete.success(updateToBrokerVariables);
}
// Register job worker
const zbc = new ZB.ZBClient({
  camundaCloud: {
    clientId: process.env.ZEEBE_CLIENT_ID,
    clientSecret: process.env.ZEEBE_CLIENT_SECRET,
    clusterId: process.env.ZEEBE_CLUSTER_ID,
  },
});
const zbworker = zbc.createWorker('send-email', handler);

export default zbworker;
