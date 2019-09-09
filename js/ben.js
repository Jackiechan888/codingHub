const tree1 = document.getElementById('tree1');
const tree2 = document.getElementById('tree2');
const tree4 = document.getElementById('tree4');
const tree3 = document.getElementById('tree3');
const tree5 = document.getElementById('tree5');
const tree6 = document.getElementById('tree6');
const tree7 = document.getElementById('tree7');
const tree8 = document.getElementById('tree8');
const tree9 = document.getElementById('tree9');

const allTrees = document.getElementsByClassName("tree")

const timeSlider = document.getElementById("timeSlider");

const getTree = () => {

	let parsed = parseInt(timeSlider.value)

	if (parsed == 0) {
		

		tree8.style.opacity = 0;
		tree9.style.opacity = 0;
		tree7.style.opacity = 0;
		tree6.style.opacity = 0;
		tree5.style.opacity = 0;
		tree4.style.opacity = 0;
		tree3.style.opacity = 0;
		tree2.style.opacity = 0;
		tree1.style.opacity = 0;
	} else if (parsed == 1) {
		tree8.style.opacity = 1;
		tree9.style.opacity = 1;
		tree7.style.opacity = 1;
		tree6.style.opacity = 0;
		tree5.style.opacity = 0;
		tree4.style.opacity = 0;
		tree3.style.opacity = 0;
		tree2.style.opacity = 0;
		tree1.style.opacity = 0;
	} else if (parsed == 2) {
		tree8.style.opacity = 1;
		tree9.style.opacity = 1;
		tree7.style.opacity = 1;
		tree6.style.opacity = 1;
		tree5.style.opacity = 1;
		tree4.style.opacity = 1;
		tree3.style.opacity = 0;
		tree2.style.opacity = 0;
		tree1.style.opacity = 0;
	} else if (parsed == 3) {
		tree8.style.opacity = 1;
		tree9.style.opacity = 1;
		tree7.style.opacity = 1;
		tree6.style.opacity = 1;
		tree5.style.opacity = 1;
		tree4.style.opacity = 1;
		tree3.style.opacity = 1;
		tree2.style.opacity = 1;
		tree1.style.opacity = 1;
	};


	
}