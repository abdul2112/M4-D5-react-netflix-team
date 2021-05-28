import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const { readJSON, writeJSON } = fs;

const dataFolderPath = join(dirname(fileURLToPath(import.meta.url)), '../data');
console.log(dataFolderPath, '--utils ==> dataFolderPath');

// read media function
export const readMedia = async () =>
  await readJSON(join(dataFolderPath, 'media.json'));

// write media function
export const writeMedia = async (data) =>
  await writeJSON(join(dataFolderPath, 'media.json'), data);

// read reviews function
export const readReviews = async () =>
  await readJSON(join(dataFolderPath, 'reviews.json'));

// write reviews function
export const writeReviews = async (data) =>
  await writeJSON(join(dataFolderPath, 'reviews.json'), data);
