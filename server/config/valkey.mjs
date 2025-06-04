import {
  TimeoutError, TimeUnit, GlideClient, Logger,
} from '@valkey/valkey-glide';
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
  requestTimeout: 30, //* In MS - Enough time for a cache miss or cache error
};

// Check `GlideClientConfiguration/GlideClusterClientConfiguration` for additional options.
export const valkeyClient = await GlideClient.createClient(valkeyOptions);

// The empty array signifies that there are no additional

export const getFromCache = async (key) => {
  try {
    // return; //* DEBUG

    const result = await valkeyClient.get(key);
    return result;
  } catch (error) {
    logError('Error getting from cache', error);
    return null;
  }
};

export const storeInCache = async (key, unstringifiedValue, ttlSeconds) => {
  try {
    // return; //* DEBUG

    return await valkeyClient.set(key, JSON.stringify(unstringifiedValue), {
      expiry: {
        type: TimeUnit.Seconds,
        count: ttlSeconds,
      },
    });
  } catch (error) {
    logError('Error storing in cache', error);
    return null;
  }
};

export const getTTLfromCache = async (key) => {
  try {
    // return; //* DEBUG
    const result = await valkeyClient.ttl(key);
    return result;
  } catch (error) {
    logError('Error getting TTL from cache', error);
    return null;
  }
};
