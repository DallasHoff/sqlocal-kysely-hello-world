import type { Kysely, Migration } from 'kysely';

export const Migration20230913: Migration = {
	async up(db: Kysely<any>) {
		await db.schema
			.alterTable('groceries')
			.addColumn('quantity', 'integer', (cb) => cb.defaultTo(1).notNull())
			.execute();
		await db.updateTable('groceries').set({ quantity: 1 }).execute();
	},
	async down(db: Kysely<any>) {
		await db.schema
      .alterTable('groceries')
      .dropColumn('quantity')
      .execute();
	},
};