function encrypt(){
  let plaintext = prompt('Type plaintext here');
  let ciphertext = '';
  ciphertext = plaintext.replace('j','b').replace('a','e').replace('c','h').replace('g','t').replace('e','r').replace('r','c').replace('h','j');
  document.getElementById("ciphertext").innerHTML = ciphertext;
}


function decrypt(){
  let plaintext = prompt('Type encrypted text here')
  let ciphertext = '';
  ciphertext = plaintext.replace('b','j').replace('e','a').replace('h','c').replace('t','g').replace('r','e').replace('c','r').replace('j','h');
  document.getElementById("ciphertext").innerHTML = ciphertext;
}

function third_angle(){
	let angle_one = parseInt(prompt("What is the first angle?")); 
	let angle_two = parseInt(prompt("What is the secound angle?"));
	let angle_three = 180-(angle_one + angle_two);
	alert ("The 3rd angle is " + angle_three );
}
//Math.floor, modulus %
// function century(){
// centuryFromYear(2103)  returns (22)
// centuryFromYear(1865)  returns (19)
// centuryFromYear(1965)  returns (20)
// centuryFromYear(2019)  returns (21) 
// }
// if, else if, else if, else, for loop
function four_ten(){
	for(let i = 0; i < 101; i++ ){
		 if(i % 10 == 0 && i % 4 == 0){
			console.log ("four_ten")
		}
		else if(i % 10 == 0){
			console.log ("Ten")
		}
		else if (i % 4 == 0) {
			console.log ("Four")
		} else {
			console.log (i)
		}
	}
}
