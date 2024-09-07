import { readContacts } from '../utils/readContacts.js';

const getAllContacts = async () => {
  return JSON.parse(readContacts);
};

console.log(await getAllContacts());

export default getAllContacts
