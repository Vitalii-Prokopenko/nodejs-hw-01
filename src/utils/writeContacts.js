import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = data => fs.writeFile(PATH_DB, data, 'utf8');
  