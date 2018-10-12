console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

// console.log(process.argv[2]);
var command = process.argv[2]

if(command === 'add') {
  console.log('ADDING LOOP CALLED!')
} else if(command === 'list') {
  console.log('READING ALL NOTES!')
} else if(command === 'read') {
  console.log('READ A SINGLE NOTE!')
} else if(command === 'remove') {
  console.log('REMOVING NOTES!')
} else {
  console.log('COMMAND NOT RECOGNIZED!')
} 

// const users = [
//     { name: 'b', age: 40 },
//     { name: 'A', age: 48 },
//     { name: 'a', age: 36 },
//     { name: 'B', age: 34 },
//   ];
  
// const sortedUsers = _.orderBy(users, [user => user.name.toLowerCase()], ['asc']);
// console.log(sortedUsers);

// var user = os.userInfo();
// // console.log(user);

// fs.appendFile('greetings.txt', `Hello ${user.username}!`, function(err) {
// 	if(err){
// 		console.log('Unable to write to file.');
// 	}
// });
