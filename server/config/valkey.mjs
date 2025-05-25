import { GlideClient, GlideClusterClient, Logger } from '@valkey/valkey-glide';
// When Valkey is in standalone mode, add address of the primary node, and any replicas you'd like to be able to read from.
const addresses = [
  {
    host: 'uxmonkeys-cache',
    port: 6379,
  },
];

// Check `GlideClientConfiguration/GlideClusterClientConfiguration` for additional options.
export const valkeyClient = await GlideClient.createClient({
  addresses: addresses,
  // if the server uses TLS, you'll need to enable it. Otherwise, the connection attempt will time out silently.
  // useTLS: true,
  clientName: 'uxmonkeys-cache',
});
// The empty array signifies that there are no additional 
