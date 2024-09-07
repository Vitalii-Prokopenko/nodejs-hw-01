import fs from 'node:fs/promises';
import { faker } from '@faker-js/faker';
import getAllContacts from './getAllContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const existContactsParsed = await getAllContacts();
  const newContact = faker.helpers.multiple(createFakeContact, {
    count: 1,
  });
  const updatedContacts = [...existContactsParsed, ...newContact];
  const updatedContactsStringified = JSON.stringify(updatedContacts, null, 2);
  writeContacts(updatedContactsStringified);
};

addOneContact();
