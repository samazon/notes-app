console.log('Starting Notes.js');

const fs = require('fs');

var addNote = (title, body) => {
	notes = [];
	note = {
		title, 
		body
	}

	try {
		var notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString)
	}
	catch(e) {
	}

	var duplicateNote = notes.filter((note) => note.title === title);

	if (duplicateNote.length === 0 ) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	}
}

var getList = () => {
	console.log('showing all notes')
}
 
var getNote = (title) => {
	console.log('single note', title);
}

var removeNote = (title) => {
	console.log('removing note', title);
}

 module.exports = {
 	addNote,
 	getList,
 	getNote,
 	removeNote
 }