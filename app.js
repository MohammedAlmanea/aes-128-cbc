import fs from 'fs';
import crypto from 'crypto';

const plainText = 'This is a top secret.';
const cipherText =
  '764aa26b55a4da654df6b19e4bce00f4ed05e09346fb0e762583cb7da2ac93a2';
const iv = Buffer.from('aabbccddeeff00998877665544332211', 'hex');
const keysArr = fs.readFileSync('words.txt').toString().split('\n');
let counter = 0;
for (let key of keysArr) {
  counter++;
  while (key.length < 16) {
    key += '#';
  }

  if (key.length > 16) key = key.slice(0, 16);

  const Decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);

  const Decrypted = Decipher.update(cipherText, 'hex', 'utf-8');

  console.log(counter);
  if (
    Decrypted.toString()[0] === plainText[0] &&
    Decrypted.toString()[1] === plainText[1] &&
    Decrypted.toString()[2] === plainText[2]
  ) {
    console.log('*******************************************************');
    console.log('MATCH!!');
    console.log(`Key: "${key}" Was used for the encryption`);
    console.log(`${counter} keys was used to find the correct key!`);
    console.log('*******************************************************');
    break;
  }
}
