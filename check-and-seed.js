require('dotenv').config({ path: '../../.env' });

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const CANONICAL_TABLE = 'humans'; 

(async () => {
  try {
    const hasTable = await knex.schema.hasTable(CANONICAL_TABLE);
    if (!hasTable) {
      console.log(`[init] ${CANONICAL_TABLE} missing → running migrate + seed`);
      await knex.migrate.latest();
      await knex.seed.run();
    } else {
      const countResult = await knex(CANONICAL_TABLE).count('* as count').first();
      const rowCount = parseInt(countResult.count, 10);

      if (rowCount === 0) {
        console.log(`[init] ${CANONICAL_TABLE} exists but is empty → running seed`);
        await knex.seed.run();
      } else {
        console.log(`[init] ${CANONICAL_TABLE} exists with ${rowCount} rows → skipping seed`);
      }

      console.log(`[init] running migrate only (safe)`);
      await knex.migrate.latest();
    }
    console.log('[init] done.');
    process.exit(0);
  } catch (err) {
    console.error('[init] failed:', err);
    process.exit(1);
  } finally {
    await knex.destroy();
  }
})();
