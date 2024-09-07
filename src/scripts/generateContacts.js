import { faker } from '@faker-js/faker';
import getAllContacts from './getAllContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  //   Read db.json
  const existContactsParsed = await getAllContacts()
  
  // create new contacts
  const newContacts = faker.helpers.multiple(createFakeContact, {
    count: number,
  });  

  // Update contacts
  const updatedContacts = [...existContactsParsed, ...newContacts];  
  const updatedContactsStringified = JSON.stringify(updatedContacts, null, 2);
  writeContacts(updatedContactsStringified);
};

generateContacts(3);
