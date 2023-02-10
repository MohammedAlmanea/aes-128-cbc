# Introduction

Solution for task 7 in Secret-Key-Encryption lab

Needed technologies :
- Nodejs

## How to use
1. Clone this repo
2. Start the program with start script
```
npm run start
```
or
```
node app.js
```

## Task description
This task is mainly designed for students in Computer Science/Engineering or related fields, where programming is required.\
In this task, **you are given a plaintext and a ciphertext, and your job is to find the key that is used for the
encryption.**\
You do know the following facts:
- The aes-128-cbc cipher is used for the encryption.
- The key used to encrypt this plaintext is an English word shorter than 16 characters;\
the word can be found from a typical English dictionary.\
Since the word has less than 16 characters (i.e. 128 bits),
pound signs (#: hexadecimal value is 0x23) are appended to the end of the word to form a key of
128 bits.\
Your goal is to write a program to find out the encryption key.\
You can download a English word list from the Internet.\
The plaintext, ciphertext, and IV are listed in the following:
```
Plaintext (total 21 characters): This is a top secret.
Ciphertext (in hex format): 764aa26b55a4da654df6b19e4bce00f4ed05e09346fb0e762583cb7da2ac93a2
IV (in hex format): aabbccddeeff00998877665544332211
```



