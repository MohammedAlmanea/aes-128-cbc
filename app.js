import fs from 'fs';
import crypto from 'crypto';

const plainText = 'This is a top secret.';
const cipherText =
  '764aa26b55a4da654df6b19e4bce00f4ed05e09346fb0e762583cb7da2ac93a2';
const ivString = Buffer.from('aabbccddeeff00998877665544332211', 'hex');
const keysArr = fs.readFileSync('words.txt').toString().split('\n');

for (let key of keysArr) {
  while (key.length < 16) {
    key += '#';
  }
  
  if (key.length > 16) key = key.slice(0, 16);
//   console.log(key.length);
//   const cipher = crypto.createCipheriv('aes-128-cbc', key, ivString);
  const cipher = crypto.createDecipheriv('aes-128-cbc', key, ivString);

  const encrypted = cipher.update(cipherText, 'hex', 'utf-8');
    // console.log(plainText);
    // console.log(encrypted.toString());


  if (
    encrypted.toString()[0] === plainText[0] &&
    encrypted.toString()[1] === plainText[1] &&
    encrypted.toString()[2] === plainText[2] 
  ) {
    console.log('*******************************************************');
    // console.log(encrypted.toString());
    // console.log(cipherText);
    console.log(plainText);
    console.log(encrypted.toString());
    console.log('KEY FOUND!');
    console.log(key);
    console.log('*******************************************************');
  }
}
