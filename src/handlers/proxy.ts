import * as serverless from 'serverless-http';
import { createApp, Client, createProxyConfig } from '@unleash/proxy';

export const proxyHandler = async (event, context) => {
  const options = {
    unleashUrl: `${process.env.UNLEASH_SERVER_URL}/api`,
    unleashApiToken: process.env.UNLEASH_API_TOKEN,
    clientKeys: process.env.UNLEASH_CLIENT_SECRETS ? process.env.UNLEASH_CLIENT_SECRETS.split(',') : [],
    refreshInterval: process.env.UNLEASH_PROXY_REFRESH_INTERVAL,
  };

  const config = createProxyConfig(options);
  const client = new Client(config);

  const app = createApp(options, client);

  const handler = await new Promise<serverless.Handler>((resolve): void => {
    client.on('ready', () => {
      const handler = serverless(app);
      return resolve(handler);
    });
  });

  return handler(event, context);
};
