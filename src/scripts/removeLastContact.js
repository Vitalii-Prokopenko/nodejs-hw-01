import getAllContacts from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const existContactsParsed = await getAllContacts();
  existContactsParsed.pop();
  const updatedContactsStringified = JSON.stringify(
    existContactsParsed,
    null,
    2,
  );
  writeContacts(updatedContactsStringified);
};

removeLastContact();
