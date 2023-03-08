function random(max,min){
    return Math.floor(Math.random()* (max-min +1))+min;
    }

var world = [
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          [1, 0, random(1, 4), random(-1, 4), random(1, 4), random(-1, 4), random(-1, 4), random(1, 4), random(-1, 4), random(1, 4), 1],
          [1, random(1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(1, 4), 1],
          [1, random(1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(1, 4), 1],
          [1, random(1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(1, 4), 1],
          [1, random(1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(1, 4), 1],
          [1, random(1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(1, 4), 1],
          [1, random(1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), 0, 1],
          [1, random(1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(-1, 4), random(1, 4), 1],
          [1, random(1, 4), random(1, 4), random(-1, 4), random(-1, 4), random(1, 4), random(-1, 4), random(1, 4), random(-1, 4), random(1, 4), 1],
          [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],

      ];

var worldDict = {
  0: 'blank',
  1: 'wall',
  2: 'sushi',
  3: 'onigiri',
}


function drawWorld() {
  output = "";
  for(var row = 0; row<world.length; row++) {
      output += "<div class = 'row'>"
      for (var x= 0; x < world[row].length; x++){
          output += "<div class = '" + worldDict[world[row][x]] + "'></div>"
      }
      output += "</div>"
  }
  document.getElementById('world').innerHTML = output;
}
drawWorld();


var ninjaman = {
  x: 1,
  y: 1
}

var enemy1 = {  //red
  x: 9,
  y: 9
} 
var enemy2 = { //pink
  x: 4,
  y: 9
} 
var enemy3 = { //blue
  x: 9,
  y: 3
} 
var score = 0;

var lives = 3;

function drawNinjaman() {
  document.getElementById("ninjaman").style.top = ninjaman.y * 40 + 'px'
  document.getElementById("ninjaman").style.left = ninjaman.x * 40 + 'px'
}
drawNinjaman()

function drawenemy1() {
  document.getElementById("enemy1").style.top = enemy1.y * 40 + 'px'
  document.getElementById("enemy1").style.left = enemy1.x * 40 + 'px'
}
drawenemy1()

function drawenemy2() {
  document.getElementById("enemy2").style.top = enemy2.y * 40 + 'px'
  document.getElementById("enemy2").style.left = enemy2.x * 40 + 'px'
}
drawenemy2()

function drawenemy3() {
  document.getElementById("enemy3").style.top = enemy3.y * 40 + 'px'
  document.getElementById("enemy3").style.left = enemy3.x * 40 + 'px'
}
drawenemy3()

document.onkeydown = function(e) {  // movement of ninja
  if(e.keyCode == 37){ //left
      if(world[ninjaman.y][ninjaman.x - 1] !=1){
          ninjaman.x--;
          enemy1.x++
          enemy3.x++
          
      }
  }
  if(e.keyCode == 39){ //right
      if(world[ninjaman.y][ninjaman.x + 1] !=1){
          ninjaman.x++;
          enemy1.x--
          enemy3.x--
      }
  }
  if(e.keyCode == 40){ //down
      if(world[ninjaman.y + 1][ninjaman.x] !=1){
          ninjaman.y++;
          enemy1.y--
          enemy2.y--
      }
  }
  if(e.keyCode == 38){ //up
      if(world[ninjaman.y - 1][ninjaman.x] !=1){
          ninjaman.y--;
          enemy1.y++
          enemy2.y++
      }
  }
  if (world[ninjaman.y][ninjaman.x] === 2) {  // update score of sushi
              world[ninjaman.y][ninjaman.x] = 0;

              score = score + 10
              document.getElementById('title').innerHTML = "Record" + score;
          } else if (world[ninjaman.y][ninjaman.x] === 3) { //update score of nigiri
              world[ninjaman.y][ninjaman.x] = 0;

              score = score + 5
              document.getElementById('title').innerHTML = "Record " + score;
          } if ((ninjaman.x === enemy1.x) && (ninjaman.y === enemy1.y) || (ninjaman.x === enemy2.x) && (ninjaman.y === enemy2.y) || (ninjaman.x === enemy3.x) && (ninjaman.y === enemy3.y)) {  //update score of ghost
              lives = lives - 1
              document.getElementById('lives').innerHTML = "Vidas " + lives;
          } else if (lives === 0) {
              document.write("Game over! tu Record es " + score + ". actualiza para volver a empesar.")
          }       

  drawNinjaman();
  drawWorld();
  drawenemy1();
  drawenemy2();
  drawenemy3();

}