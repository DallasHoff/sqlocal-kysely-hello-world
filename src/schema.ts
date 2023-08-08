import type { Generated } from 'kysely';

export type Database = {
	groceries: GroceriesTable;
};

export type GroceriesTable = {
	id: Generated<number>;
	name: string;
};