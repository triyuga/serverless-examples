import * as bunyan from 'bunyan';

const bunyanSeq = require('bunyan-seq');
const seqSettings = {
  serverUrl: process.env.SEQ_URL,
  level: process.env.SEQ_LEVEL || 'info',
};

export const logger = bunyan.createLogger({
  name: 'serverless-examples',
  streams: [
    {
      stream: process.stdout,
      level: 'debug',
    },
    bunyanSeq.createStream(seqSettings),
  ],
});

function enrich(data: any, email?: string) {
  return {
    ...data,
    __enrichment_environment: process.env.NODE_ENV || 'not set',
    __enrichment_pid: process.pid,
    __enrichment_application: 'lambda',
  };
}

export function logError(data: any, message: string) {
  logger.error(enrich(data), `[LAMBDA] ${message}`);
}

export function logWarn(data: any, message: string) {
  logger.warn(enrich(data), `[LAMBDA] ${message}`);
}

export function logInfo(data: any, message: string) {
  logger.info(enrich(data), `[LAMBDA] ${message}`);
}

export function logDebug(data: any, message: string) {
  logger.debug(enrich(data), `[LAMBDA] ${message}`);
}
