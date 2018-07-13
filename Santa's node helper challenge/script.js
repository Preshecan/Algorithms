const fs = require('fs');

//q1: what floor does santa end up on, '(' is up one floor, ')' is down one floor
function question1slow(){
	fs.readFile('./hello.txt' , (err, data) =>{
	console.time('santaChallenge1slow')

	var array = data.toString();
	var brackets = array.split('');
	var floor = 0;

	for(var i = 0; i<brackets.length ; i++){
		if(brackets[i] === '('){
			floor++;
		}else if(brackets[i] === ')'){
			floor--;
		}
	}
	if(err){
		console.log(err);
	}
	console.log(floor);
	console.timeEnd('santaChallenge1slow');
	})
}

function question1faster(){
	fs.readFile('./hello.txt' , (err, data) =>{
	console.time('santaChallenge1fast')

	const array = data.toString();
	const brackets = array.split('');
	const answer = brackets.reduce((acc, currentValue) =>{
		if(currentValue === '('){
			return acc += 1;
		}else if(currentValue === ')'){
			return acc -= 1;
		}
	},0)
	if(err){
		console.log(err);
	}
	console.log("floor:", answer);
	console.timeEnd('santaChallenge1fast');
	})
}

//when does santa go into the basement for the first time
function question2slow(){
	fs.readFile('./hello.txt' , (err, data) =>{
	console.time('santaChallenge2slow')

	var array = data.toString();
	var brackets = array.split('');
	var floor = 0;

	for(var i = 0; i<brackets.length ; i++){
		if(brackets[i] === '('){
			floor++;
		}else if(brackets[i] === ')'){
			floor--;
		}
		if(floor<0){
			console.log('basement entered at:', i+1)
			console.timeEnd('santaChallenge2slow');
			return;
		}
	}
	if(err){
		console.log(err);
	}
	})
}

function question2faster(){
	fs.readFile('./hello.txt' , (err, data) =>{
	console.time('santaChallenge2fast')

	const array = data.toString();
	const brackets = array.split('');
	let accumulator = 0;
	let counter = 0;

	const answer = brackets.some((currentValue) =>{
		if(currentValue === '('){
			accumulator += 1;
		}else if(currentValue === ')'){
			accumulator -= 1;
		}
		counter += 1;
		if(accumulator < 0){
			return counter;	
		}
		
	},0)
	if(err){
		console.log(err);
	}
	console.log("basement entered at:", counter);
	console.timeEnd('santaChallenge2fast');
	})
}

question1slow()
question1faster()
question2slow()
question2faster()