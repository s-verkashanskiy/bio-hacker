import dotenv from 'dotenv';
import ZB from 'zeebe-node';
import webpush from 'web-push';

dotenv.config();

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

webpush.setVapidDetails(process.env.EMAIL, publicVapidKey, privateVapidKey);

async function sendPush(subscription, payload) {
  return webpush
    .sendNotification(subscription, payload)
    .catch((err) => console.log(err));
}

// Job worker
async function handler(job, complete, worker) {
  worker.log('Task variables', job.variables);
  // console.log('>>>>JOB VARS', job.variables.name);

  // keys from client
  const subscription = {
    endpoint: job.variables.data.pushSubscription.endpoint,
    expirationTime: null,
    keys: {
      p256dh: job.variables.data.pushSubscription.keys.p256dh,
      auth: job.variables.data.pushSubscription.keys.auth,
    },
  };
  // console.log('>>>>>>>SUBSCRIPTION', subscription);
  let bodyText = '';
  if (job.variables.shortUrl) {
    bodyText = `Пожалуйста, отметьте выполнение процедуры, перейдя по ссылке ->  ${job.variables.shortUrl}`;
  } else {
    bodyText = 'Спасибо за выбор программы Detox. Скоро вам придет уведомление о начале программы.';
  }
  // Message text
  const payload = JSON.stringify({
    title: 'Добро пожаловать в Biohacker',
    body: bodyText,
    icon:
      'http://biohackacademy.github.io/biofactory/graphics/biohack_academy_logo.png',
  });

  // Task worker business logic goes here
  const result = await sendPush(subscription, payload);
  // console.log(result);
  const updateToBrokerVariables = {
    pushDate: new Date(),
  };
  complete.success(updateToBrokerVariables);
}

const zbc = new ZB.ZBClient({
  camundaCloud: {
    clientId: process.env.ZEEBE_CLIENT_ID,
    clientSecret: process.env.ZEEBE_CLIENT_SECRET,
    clusterId: process.env.ZEEBE_CLUSTER_ID,
  },
});
const zbworker = zbc.createWorker('send-push', handler);

export default zbworker;
