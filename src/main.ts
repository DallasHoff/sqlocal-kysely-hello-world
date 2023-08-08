import { db } from './db';

async function main() {
  // Prepare database table for demo
  await db.schema
    .createTable('groceries')
    .ifNotExists()
    .addColumn('id', 'integer', col => col.autoIncrement().primaryKey())
    .addColumn('name', 'text', col => col.notNull())
    .execute();
  await db.deleteFrom('groceries').execute();
  
  // Insert grocery items into the database
  const itemNames = ['Bread', 'Milk', 'Rice', 'Apples'];

  for (let name of itemNames) {
    await db.insertInto('groceries').values({ name }).execute();
  }

  // Fetch grocery items from the database
  const items = await db.selectFrom('groceries').selectAll().execute();

  // Create elements
  const h1 = document.createElement('h1');
  h1.innerText = 'Grocery List';
  const ul = document.createElement('ul');

  // Add a list item for each grocery item fetched from the database
  for (let item of items) {
    const li = document.createElement('li');
    li.innerText = item.name;
    ul.appendChild(li);
  }

  // Add elements to page
  document.body.appendChild(h1);
  document.body.appendChild(ul);
}

main();
