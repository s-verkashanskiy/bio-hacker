import ZB from 'zeebe-node';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

async function deployProcess() {
  const zbc = new ZB.ZBClient({
    camundaCloud: {
      clientId: process.env.ZEEBE_CLIENT_ID,
      clientSecret: process.env.ZEEBE_CLIENT_SECRET,
      clusterId: process.env.ZEEBE_CLUSTER_ID,
    },
  });

  const buffer = fs.readFileSync(path.resolve('workers/bpmn/diagram_3.bpmn'));

  // Deploy from an in-memory buffer
  const result = await zbc.deployWorkflow({
    definition: buffer,
    name: 'diagram_3.bpmn',
  });

  console.log(result);
}

deployProcess();
