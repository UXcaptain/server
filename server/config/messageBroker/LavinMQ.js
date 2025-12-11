import { AMQPClient } from '@cloudamqp/amqp-client';
import { logError, logInfo } from '../loggerFunctions.js';
import { insertAnalysisEntryTranscriptionInDb } from '../../models/analysisEntryModel.js';

let connection;
let channel;
let transcriptionRequestedQueue;
let insightsRequestedQueue;

// Main AMQP setup function
export const connectToMessageBroker = async () => {
  try {
    // 1. Establish connection
    const amqp = new AMQPClient(process.env.LAVINMQ_HOST);
    connection = await amqp.connect(); // Establish connection to the message broker - one connection for all channels

    // 2. Open producer and consumer channels
    channel = await connection.channel(); // One channel for producing & consuming messages

    // 3. Declare exchanges & queues & bindings

    // 3.1 Declare exchanges

    const analysisExchange = await channel.exchangeDeclare('analysis_exchange', 'topic', {
      durable: true,
      passive: false,
      autoDelete: false,
      internal: false,
    });

    // 3.2  Declare queues
    transcriptionRequestedQueue = await channel.queue('transcription_requested_queue', {
      durable: true,
      passive: false,
      autoDelete: false,
      exclusive: false,
    });

    const transcriptionCompletedQueue = await channel.queue('transcription_completed_queue', {
      durable: true,
      passive: false,
      autoDelete: false,
      exclusive: false,
    });

    insightsRequestedQueue = await channel.queue('insights_requested_queue', {
      durable: true,
      passive: false,
      autoDelete: false,
      exclusive: false,
    });

    const insightsCompletedQueue = await channel.queue('insights_completed_queue', {
      durable: true,
      passive: false,
      autoDelete: false,
      exclusive: false,
    });

    // 3.3  Bind queues to exchange with routing keys

    await transcriptionRequestedQueue.bind('analysis_exchange', 'analysis.analysisEntry.transcription.requested', {
    });

    await insightsRequestedQueue.bind('analysis_exchange', 'analysis.analysisEntry.insights.requested', {
    });

    await insightsCompletedQueue.bind('analysis_exchange', 'analysis.analysisEntry.insights.completed', {
    });

    // Start consumers after successful connection

    await transcriptionCompletedQueue.subscribe({ noAck: false }, async (msg) => {
      try {
        const contentStr = msg.bodyToString(msg);
        const completedTranscriptionRequest = JSON.parse(contentStr);

        await insertAnalysisEntryTranscriptionInDb(completedTranscriptionRequest);

        /*
        const exampleReceivedMessage = {
          analysisEntryId: transcriptionJobDetails._id,
          transcriptionData: array of objects, each representing a segment of the transcription
          fullTranscript: 'lorem ipsum dolor sit amet, consectetur adipiscing elit'
        };
      */

        await msg.ack();
      } catch (error) {
        logError('Error processing transcription completed message', error);
        await msg.nack(true); // Requeue on failure
      }
    });

    await insightsCompletedQueue.subscribe({ noAck: false }, async (msg) => {
      try {
        await msg.ack();
      } catch (error) {
        await msg.nack(true); // Requeue on failure
      }
    });

    logInfo('monolith successfully connected to LavinMQ message broker');

    return {
      connection: connection, channel: channel, analysisExchange, transcriptionQueue: transcriptionRequestedQueue,
    };
  } catch (e) {
    logError('error connecting to message broker', e);
    e.connection?.close();
    return setTimeout(connectToMessageBroker, 1000); // will try to reconnect in 1s
  }
};

// function for publishing to transcription queue

export const publishToTranscriptionRequestedQueue = async (message) => {
  try {
    return await transcriptionRequestedQueue.publish(message);
  } catch (err) {
    return logError('error publishing transcription request', err);
  }
};

export const publishToInsightsRequestedQueue = async (message) => {
  try {
    return await insightsRequestedQueue.publish(message);
  } catch (err) {
    return logError('error publishing transcription request', err);
  }
};
