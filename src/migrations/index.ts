import { Migration } from 'kysely';
import { Migration20230912 } from './2023-09-12';
import { Migration20230913 } from './2023-09-13';

export const migrations: Record<string, Migration> = {
	'2023-09-12': Migration20230912,
  '2023-09-13': Migration20230913,
};