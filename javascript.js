function encrypt(){
  let plaintext = prompt('Type plaintext here');
  let ciphertext = '';
  ciphertext = plaintext.replace(/b/g,'Q1').replace(/a/g,'Q2').replace(/c/g,'Q3').replace(/e/g,'Q4').replace(/h/g,'Q5').replace(/g/g,'Q6').replace(/d/g,'Q7').replace(/y/g,'Q8').replace(/k/g,'Q9').replace(/m/g,'Z1').replace(/i/g,'Z2');
  document.getElementById("ciphertext").innerHTML = ciphertext;
}


function decrypt(){
  let plaintext = prompt('Type encrypted text here')
  let ciphertext = '';
  ciphertext = plaintext.replace(/Q1/g,'b').replace(/Q2/g,'a').replace(/Q3/g,'c').replace(/Q4/g,'e').replace(/Q5/g,'h').replace(/Q6/g,'g').replace(/Q7/g,'d').replace(/Q8/g,'y').replace(/Q9/g,'k').replace(/Z1/g,'m').replace(/Z2/g,'i');
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
