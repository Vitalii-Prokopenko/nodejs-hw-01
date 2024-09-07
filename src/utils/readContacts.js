import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = await fs.readFile(PATH_DB, 'utf8');
     