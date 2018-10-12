console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

var argv = yargs.argv;
// console.log('yargs', argv)
// var command =  process.argv[2] //Old Way
var command = argv._[0];

if(command === 'add') {
	notes.addNote(argv.title, argv.body);
} else if(command === 'list') {
	notes.getList();
} else if(command === 'read') {
	notes.getNote(argv.title);
} else if(command === 'remove') {
	notes.removeNote(argv.title);
} else {
  console.log('command not recognized!')
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
