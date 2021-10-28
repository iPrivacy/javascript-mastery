console.clear();
const keyA = document.getElementById("keyA");
const soundA = document.getElementById("soundA");
const keyS = document.getElementById("keyS");
const soundS = document.getElementById("soundS");
const keyD = document.getElementById("keyD");
const soundD = document.getElementById("soundD");
const keyF = document.getElementById("keyF");
const soundF = document.getElementById("soundF");
const keyG = document.getElementById("keyG");
const soundG = document.getElementById("soundG");
const keyH = document.getElementById("keyH");
const soundH = document.getElementById("soundH");
const keyJ = document.getElementById("keyJ");
const soundJ = document.getElementById("soundJ");
const keyK = document.getElementById("keyK");
const soundK = document.getElementById("soundK");
const keyL = document.getElementById("keyL");
const soundL = document.getElementById("soundL");

// keyA.addEventListener("click", function () {
//   console.log("KeyA was clicked");
// });

console.log('Key K: ' + keyK);
console.log('Sound K: ' + soundK);

let keysAndSounds = [
  {
    id: "a",
    value: soundA,
    key: keyA,
  },
  {
    id: "s",
    value: soundS,
    key: keyS,
  },
  {
    id: "d",
    value: soundD,
    key: keyD,
  },
  {
    id: "f",
    value: soundF,
    key: keyF,
  },
  {
    id: "g",
    value: soundG,
    key: keyG,
  },
  {
    id: "h",
    value: soundH,
    key: keyH,
  },
  {
    id: "j",
    value: soundJ,
    key: keyJ,
  },
  {
    id: "k",
    value: soundK,
    key: keyK,
  },
  {
    id: "l",
    value: soundL,
    key: keyL,
  },
];

// const listeners = ['click', 'keydown'];
// keyS.listeners.forEach(element => {
//     inputElement.addEventListener(element, functionToPlay)
// });
// // Function that gets keys or ids from dom

// const playSound = (musicKey) => {
//     console.log('Playing Sound')
// musicKey.play();
// }

keyA.addEventListener("click", () => {
  console.log(soundA);
  soundA.play();
  console.log("KeyA was clicked");
});

document.body.addEventListener("keyup", (e) => {
  var keyCode = e.key;
  console.log("Letter " + keyCode + " was pressed.");
  keysAndSounds.map((keycode) => {

    if (keycode.id == keyCode) {
      keycode.value.play();
    } else {
      console.log("Nothing went through");
    }
  });
});

keysAndSounds.map((keycode) => {
    keycode.key.addEventListener('click', ()=>{
        keycode.value.play();
    })
})

let x = window.matchMedia("(max-width: 800px)")
const lineBreak = document.getElementsByTagName('Br')

const handleScreenChange = (x) => {
    if(x.matches){
        lineBreak.re
    }
}

console.log(lineBreak);