import { SQLocalKysely } from 'sqlocal/kysely';
import { Kysely, Migrator } from 'kysely';
import type { Database } from './schema';

// Initialize Kysely with SQLocal dialect
const { dialect } = new SQLocalKysely('database.sqlite3');
const kysely = new Kysely<Database>({ dialect });

// Initialize Kysely migrator
const migrator = new Migrator({
	db: kysely,
	provider: {
		async getMigrations() {
			const { migrations } = await import('./migrations/');
			return migrations;
		},
	},
});

// Migrate the database
const migration = await migrator.migrateToLatest();

if (migration.error) {
  console.error(migration.error);
}

export const db = kysely;

