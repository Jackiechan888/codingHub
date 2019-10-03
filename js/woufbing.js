const wheel = document.getElementById("wheel");
const alertBox = document.getElementById("alertBox");
const bread = document.getElementById("bread");
const screen = document.getElementById("screen");
const spinWheel = () => {
	console.log("asdfasdfasd")
	wheel.style.transitionDuration = "0s";
	wheel.style.transform = "rotateZ(0deg)";


	setTimeout(function() {
		randomSpin()
		
	}, 50)
}

const randomSpin = () => {

	let rs = Math.random()*12;
	rs = Math.floor(rs);
	rs *= 30;
	console.log(rs)
	let rrs = rs + 3600;

	wheel.style.transitionDuration = "1s";
	wheel.style.transform = `rotateZ(${rrs}deg)`;

	setTimeout(function(){
		getPrize(rs);
	},1000)


}

const getPrize = (a) => {
	if (a == 0){
		saggy("sad");
	}else if (a == 30){
		saggy("happy");
	}else if (a == 60){
		saggy("angry");
	}else if (a == 90){
		saggy("sad");
	}else if (a == 120){
		saggy("happy");
	}else if (a == 150){
		saggy("everything");
	}else if (a == 180){
		saggy("sad");
	}else if (a == 210){
		saggy("happy");
	}else if (a == 240){
		saggy("angry");
	}else if (a == 270){
		saggy("everything");
	}else if (a == 300){
		saggy("angry");
	}else if (a == 330){
		saggy("everything");
	}

}

const saggy = (sapy) => {
	// CHANGE THESE WORDS
	if (sapy == "sad"){
		var words = ["bread","cupcake","TERRRRRRy","cat","people","pinapple","luke","guitar","spellingmistake","circle","nettle","triangular","carcinoma","genes","sensitive","navigational"];
	}else if (sapy == "happy"){
		var words = ["drainage","eletated","lousy","hook","people","dumb","gubernatorial","breathing","redundant","melon"];
	}else if (sapy == "angry") {
		var words = ["bread","cupcake","TERRRRRRy","cat","people","pinapple","luke","guitar","spellingmistake"];
	} else {
		var words = ["bread","cupcake","TERRRRRRy","cat","people","pinapple","luke","guitar","spellingmistake"];
	}

	var slad = Math.floor(Math.random() * words.length);
	var svad = Math.floor(Math.random() * words.length);
	slad = words[slad];
	svad = words[svad];

	// CHANGE THESE SENTENCE STRUCTURES
	if (sapy == "sad"){
		bread.innerHTML = "i feel so " + slad + ", so why am I so " + svad + " now?";
	}else if (sapy == "happy"){
		bread.innerHTML = "i feel like dancing in the " + slad + " i could just  " + svad + " right now!";
	}else if (sapy == "angry") {
		bread.innerHTML = "go die in a " + slad + " you little " + svad +"!";
	} else {
		bread.innerHTML = slad + "! You're the best, though i want you to jump off a cliff and " + svad + "! You dirtly little " + slad;
	}
	openBtn();
}

// closebtn

const closeBtn = () => {
	alertBox.style.display = "none" ;
	screen.style.display = "none" ;

}
const openBtn =() => {
	alertBox.style.display = "block";
	screen.style.display = "block";

}
