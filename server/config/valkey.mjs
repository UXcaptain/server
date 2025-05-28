import { GlideClient, Logger } from '@valkey/valkey-glide';
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

// The empty array signifies that there are no additional
