import { db } from './db';

async function main() {
  // Delete any previously added data
  await db.deleteFrom('groceries').execute();
  
  // Insert grocery items into the database
  const itemNames = ['Bread', 'Milk', 'Rice', 'Apples'];

  for (let name of itemNames) {
    await db.insertInto('groceries').values({ name }).execute();
  }

  // Fetch grocery items from the database
  const items = await db.selectFrom('groceries').selectAll().execute();
  console.table(items);

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
