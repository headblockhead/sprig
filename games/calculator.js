/*
@title: calculator
@description: This game is a utility simulation designed as a calculator for the Sprig platform. It provides a user interface with a grid layout where a player moves a cursor to input numbers and operations to perform basic arithmetic calculations. The game supports functions like selecting numbers, executing operations, clearing the screen, and calculating results.
@author: Sameer Murthy
@tags: ['utility','simulation']
@addedOn: 2023-03-03

Github: @SameeraMurthy

WASD: Move Cursor
I: Backspace
J: Clear Screen
K: Select
L: Equals
*/

const 
one = "1",
two = "2",
three= "3",
four= "4",
five= "5",
six= "6",
seven= "7",
eight= "8",
nine= "9",
zero= "0",
pi= "p",
e= "e",
pointer= "P",
clear= "C",
backspace= "B",
solve= "S",
addition= "a",
subtraction= "s",
multiplication= "m",
division= "d",
exponent= "x",
root= "r",
point= "f",
rand= "o",
percent= "c",
black = "z",
halfblack = "q";

let opMap = { "a": "+", "s": "-", "m": "*", "d": "/", "x": "^", "r": "R", "c": "%"};

setLegend(
  [ pointer, bitmap`
..333333333333..
.3............3.
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
3..............3
.3............3.
..333333333333..`],
  [ one, bitmap`
................
................
.......CCC......
......CCCC......
.....CCCCC......
.....CC.CC......
........CC......
........CC......
........CC......
........CC......
........CC......
........CC......
.....CCCCCCC....
.....CCCCCCC....
................
................`],
  [ two, bitmap`
................
................
.....7777.......
....7777777.....
.........777....
..........77....
..........77....
......777777....
.....777777.....
....777.........
....77..........
....77..........
....77777777....
....77777777....
................
................`],
  [ three, bitmap`
................
................
....5555555.....
....55555555....
.........555....
..........55....
..........55....
......555555....
......55555.....
..........55....
..........55....
.........555....
....55555555....
....5555555.....
................
................`],
  [ four, bitmap`
................
................
........LL......
.......LLL......
......LLLL......
.....LLLLL......
....LLL.LL......
...LLL..LL......
...LL...LL......
...LLLLLLLLLL...
...LLLLLLLLLL...
........LL......
........LL......
........LL......
................
................`],
  [ five, bitmap`
................
................
....FFFFFFF.....
....FFFFFFF.....
....FF..........
....FF..........
....FFFF........
.....FFFFFF.....
........FFF.....
.........FF.....
........FFF.....
.......FFFF.....
....FFFFFF......
....FFFFF.......
................
................`],
  [ six, bitmap`
................
................
.....444444.....
....4444444.....
....44..........
...444..........
...44...........
...4444444......
...444444444....
...44....444....
...44.....44....
...444....44....
....44444444....
.....444444.....
................
................`],
  [ seven, bitmap`
................
................
....DDDDDDDDD...
....DDDDDDDDD...
..........DDD...
.........DDD....
........DDD.....
.......DDD......
......DDD.......
......DD........
.....DDD........
.....DD.........
.....DD.........
.....DD.........
................
................`],
  [ eight, bitmap`
................
................
.....888888.....
....88888888....
...88......88...
...88......88...
...88......88...
.....888888.....
....88888888....
...88......88...
...88......88...
...888....888...
....88888888....
.....888888.....
................
................`],
  [ nine, bitmap`
................
................
.....HHHHHH.....
....HHHHHHHH....
....HH....HH....
....HH.....HH...
....HHH....HH...
....HHHHHHHHH...
......HHHHHHH...
...........HH...
..........HHH...
.........HHH....
.....HHHHHH.....
.....HHHHH......
................
................`],
  [ zero, bitmap`
................
................
.....999999.....
....99999999....
...99.....999...
...999.....99...
...9999....99...
...99.99...99...
...99..99..99...
...99...99.99...
...99....9999...
...999....999...
....99999999....
.....999999.....
................
................`],
  [ addition, bitmap`
................
................
................
................
.......00.......
.......00.......
.......00.......
....00000000....
....00000000....
.......00.......
.......00.......
.......00.......
................
................
................
................`],
  [ subtraction, bitmap`
................
................
................
................
................
................
................
....00000000....
....00000000....
................
................
................
................
................
................
................`],
  [ multiplication, bitmap`
................
................
................
................
................
.....LL...00....
.....LLL.000....
......LLL00.....
.......L0L......
......00LLL.....
.....000.LLL....
.....00...LL....
................
................
................
................`],
  [ division, bitmap`
................
................
................
................
.......00.......
.......00.......
................
....00000000....
....00000000....
................
.......00.......
.......00.......
................
................
................
................`],
  [ clear, bitmap`
................
................
................
.....333333.....
....3333333.....
...333..........
...33...........
...33...........
...33...........
...33...........
...333..........
....3333333.....
.....333333.....
................
................
................`],
  [ root, bitmap`
................
................
................
................
........000000..
...0.0.0000000..
....0..000......
...0.0.00.......
..00..000.......
..000.00........
...00000........
....000.........
.....0..........
................
................
................`],
  [ solve, bitmap`
................
................
................
................
................
....33333333....
....33333333....
................
................
....33333333....
....33333333....
................
................
................
................
................`],
  [ exponent, bitmap`
................
................
................
.......000......
......00000.....
.....000.000....
....000...000...
....00.....00...
................
................
................
................
................
................
................
................`],
  [ backspace, bitmap`
................
................
................
................
................
....333333333...
...333.33.333...
..33333.33333...
..333333.3333...
...333.33.333...
....333333333...
................
................
................
................
................`],
  [ point, bitmap`
................
................
................
................
................
................
................
................
................
................
......000.......
......000.......
......000.......
................
................
................`],
  [ pi, bitmap`
................
................
................
...0000000000...
...0000000000...
.....00..00.....
.....00..00.....
.....00..00.....
.....00..00.....
.....00..000....
....000..000....
....000.........
................
................
................
................`],
  [ e, bitmap`
................
................
................
....0000000.....
....0000000.....
....00..........
....00..........
....00000.......
....00000.......
....00..........
....00..........
....0000000.....
....0000000.....
................
................
................`],
  [ rand, bitmap`
................
................
................
................
......5555......
.....55..55.....
.....5....5.....
.........55.....
........55......
.......55.......
................
.......55.......
.......55.......
................
................
................`],
  [ percent, bitmap`
................
................
................
................
...555....55....
...5.5...555....
...555..555.....
.......555......
......555.......
.....555..555...
....555...5.5...
....55....555...
................
................
................
................`],
  [ black, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [ halfblack, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
................
................
................
................
................
................
................
................`],
)

// Initialize Interface
const UI = map`
zzzzzzzzzz
zzzzzzzzzz
qqqqqqqqqq
.C.123.ax.
.B.456.sr.
.c.789.mp.
.o.f0S.de.
..........`;
setMap(UI);
addSprite(1, 3, pointer);

const display = str => {
  clearText();
  addText(str, { x: 2, y: 2, color: color`2`});
}

const displayOp = (str, cl) => {
  if (cl) clearText();
  addText(opMap[str], { x: 18, y: 2, color: color`1`});
}

display("_");

let Exp = {
  n1: "",
  op: "",
  n2: "",
  set: function(v) {
    if (this.op != "" && this.n1 != "") {
      this.n2 += v;
      display(this.n2);
    } else {
      this.n1 += v;
      display(this.n1);
    }
  },
  setOp: function(v) {
    if (this.n1 != "" && this.op != "" && this.n2 != "") {
        enter(v)
        displayOp(v);
    } else if (this.n1 != "") {
        this.op = v;
        display("");
        displayOp(v);
    }
  }
}

const operate = (n1, op, n2) => {
  n1 = parseFloat(n1);
  n2 = parseFloat(n2);
  let output = "";
  switch (op) {
    case "a":
      output = (n1 + n2);
      break;
    case "s":
      output = (n1 - n2);
      break;
    case "m":
      output = (n1 * n2);
      break;
    case "d":
      output = (n1 / n2);
      break;
    case "x":
      output = (n1 ** n2);
      break;
    case "r":
      output = (n1 ** (1/n2));
      break;
    case "c":
      output = (n1 / 100) * n2;
      break;
    default:
      output = n1;
  }
  return output.toString();
}

let enter = o => {
  let output = operate(Exp.n1, Exp.op, Exp.n2);
  display(output)
  Exp.n1 = output;
  Exp.op = o ? o : ""
  Exp.n2 = ""
}

const action = input => {
  switch (input) {
    case "f":
      input = ".";
      break;
    case "o":
      input = Math.floor(Math.random() * 10);
      break;
    case "p":
      input = "3.14159265";
      break;
  }
  switch (input) {
    case "S":
      enter();
      break;
    case "C":
      Exp.n1 = ""
      Exp.n2 = ""
      Exp.op = ""
      display("_");
      break;
    case "B":
      if (Exp.op != "") {
        Exp.n2 = Exp.n2.slice(0, -1)
        display(Exp.n2);
      } else {
        Exp.n1 = Exp.n1.slice(0, -1)
        display(Exp.n1);
      }
      break;
    case "a":
    case "m":
    case "d":
    case "r":
    case "c":
    case "x":
      Exp.setOp(input);
      break;
    case "s":
      if (Exp.n1 != "" && Exp.op != "" && Exp.n2 != "") {
        action("S");
      } else if (Exp.n1 != "" && Exp.op == "") {
        Exp.setOp(input);
      } else {
        Exp.set("-");
      }
      break;
    default:
      Exp.set(input);
      if (Exp.op != "") {
        displayOp(Exp.op, false);
      }
  }   
}

// SELECT KEY
onInput("k", () => {
  if (tilesWith(pointer)[0][1]) {
    action(tilesWith(pointer)[0][1].type);
  }
});

// CLEAR SCREEN
onInput("j", () => {
  action("C");
});

// BACKSPACE
onInput("i", () => {
  action("B");
});

// EQUALS ALIAS KEY
onInput("l", () => {
  action("S");
});

onInput("w", () => {
  if (getFirst(pointer).y > 3) {
    getFirst(pointer).y -= 1;
  }
})

onInput("a", () => {
  if (getFirst(pointer).x > 1) {
    getFirst(pointer).x -= 1;
  }
})

onInput("s", () => {
  if (getFirst(pointer).y < 6) {
    getFirst(pointer).y += 1;
  }
})

onInput("d", () => {
  if (getFirst(pointer).x < 8) {
    getFirst(pointer).x += 1;
  }
})