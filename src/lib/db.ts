import pgPromise from 'pg-promise';
const pgp = pgPromise({});

export const db = pgp({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export const exit = () => {
  // Only forcefully close pool in development
  if (process.env.NODE_ENV === 'development') db.$pool.end();
};

export const format = pgp.as;
