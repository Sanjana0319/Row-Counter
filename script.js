// document.getElementById("count-el").innerText = 5;

// let count = 5;
// console.log(count);

// let myAge = 22;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let count = 5;
// count = count + 1;
// console.log(count);

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;
// bonusPoints = bonusPoints / 4;
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function increment() {
//   let count = 0;
//   count = count + 1;
//   console.log(count);
// }

// increment();

// let l1 = 10;
// let l2 = 11;
// let l3 You have tree new notifications= 12;

// function sum() {
//   let total = l1 + l2 + l3;
//   console.log(total);
// }
// sum();

// let n1 = 0;
// function a1() {
//   n1 = n1 + 1;
// }
// a1();
// a1();
// a1();
// console.log(n1);
//         O = 3

let countEl = document.getElementById("count-el");

let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
}

let saveEl = document.getElementById("save-el");
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
}

// let username = "Sanjana";
// let message = "You have tree new notifications";
// let mtu = message + ", " + username + "!";
// console.log(mtu);

// console.log(4 + 5)    =  9
// console.log("2" + "4")  =  24
// console.log("5" + 1)    =  51
// console.log(100 + "100")  = 100100

// let welcomeEl = document.getElementById("welcome-el");
// let nam = "Sanjana ";
// let greeting = "Welcome ";
// welcomwEl.innerText = nam + greeting;
//  o = Sanjana Welcome

// welcomwEl.innerText += "back";
// o = Sanjana Welcome back
