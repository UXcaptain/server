import { GlideClient, GlideClusterClient, Logger } from '@valkey/valkey-glide';
import { logError } from './loggerFunctions.mjs';
// When Valkey is in standalone mode,
// add address of the primary node, and any replicas you'd like to be able to read from.

const valkeyOptions = {
  addresses: [
    {
      host: process.env.VALKEY_CACHE_HOST,
      port: process.env.VALKEY_CACHE_PORT,
    },
  ],
  clientName: 'uxmonkeys-cache',
};

// Check `GlideClientConfiguration/GlideClusterClientConfiguration` for additional options.
export const valkeyClient = await GlideClient.createClient(valkeyOptions);
  addresses: addresses,
  // if the server uses TLS, you'll need to enable it. Otherwise,
  // the connection attempt will time out silently.
  // useTLS: true,
  clientName: 'uxmonkeys-cache',
});
// The empty array signifies that there are no additional
