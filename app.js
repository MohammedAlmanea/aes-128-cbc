// Import needed modules
import fs from 'fs';
import crypto from 'crypto';
// Use plain text, cipher text, iv that was given in the task 
const plainText = 'This is a top secret.';
const cipherText =
  '764aa26b55a4da654df6b19e4bce00f4ed05e09346fb0e762583cb7da2ac93a2';
const iv = Buffer.from('aabbccddeeff00998877665544332211', 'hex');
// Read file words.txt and save it in an array
const keysArr = fs.readFileSync('words.txt').toString().split('\n');

let counter = 0;
// Loop for each key in the array
for (let key of keysArr) {
  counter++;
  // If key is < 16 complete the rest with '#'
  // Since aes-128-cbc must have 16 byte key size
  while (key.length < 16) {
    key += '#';
  }
  // If key is larger than 16 slice first 16 digits 
  if (key.length > 16) key = key.slice(0, 16);
  // Use crypto module to created Decipher for needed algorithm with the given key and iv
  const Decipher = crypto.createDecipheriv('aes-128-cbc', key, iv);
  const Decrypted = Decipher.update(cipherText, 'hex', 'utf-8');
  // Prints the used key number
  console.log(counter);
  // If statement to check if the plain text from Decrypted equals the given plain text 
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
    // To exit the loop since the key is found
    break;
  }
}
