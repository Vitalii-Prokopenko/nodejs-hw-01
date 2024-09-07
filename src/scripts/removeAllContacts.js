import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  const initialContacts = JSON.stringify([]);
  await writeContacts(initialContacts);
};

removeAllContacts();
