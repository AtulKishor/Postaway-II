import dotenv from 'dotenv';

// Load the shared local env first, then override with test-specific values when needed.
dotenv.config({ path: '.env' });

if (process.env.NODE_ENV === 'test') {
  dotenv.config({ path: '.env.test', override: true });
}
