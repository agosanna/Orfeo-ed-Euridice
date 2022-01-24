var game = new Phaser.Game(1024, 768, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
function gameOver_O() {
  if (immortal === false){
    cursors.inputEnabled = false;
    die = true;
    runO = false;
    orfeo.body.moves = false
    if (orfeo.body.touching.left && die === true && runO === false){
      orfeo.animations.play('dieLeft');
    }

    if (orfeo.body.touching.right && die === true && runO === false){
      orfeo.animations.play('dieRight');
    }
    if (orfeo.body.touching.up && die === true && runO === false){
      orfeo.animations.play('dieRight');
    }

    if (orfeo.body.touching.down && die === true && runO === false){
      orfeo.animations.play('dieRight');
    }
    game.camera.unfollow(orfeo)

    game.time.events.add(2000, function() {
    orfeo.visible = false
    orfeo.x = checkPoint_O.x;
    orfeo.y = checkPoint_O.y;
    orfeo.visible = true;
    cursors.inputEnabled = true;
    orfeo.body.moves = true
    game.camera.follow(orfeo)
    die = false;
    runO = true;
    })
      hit()
    }
    game.time.events.add(Phaser.Timer.SECOND*2, function(){immortal = false})
}

function gameOver_E() {

      dieE = true;
      runE = false;
      euridice.body.moves = false
      if (euridice.body.touching.left && dieE === true && runE === false){
        euridice.animations.play('dieLeft');
      }

      if (euridice.body.touching.right && dieE === true && runE === false){
        euridice.animations.play('dieLeft');
      }
      if (euridice.body.touching.up && dieE === true && runE === false){
        euridice.animations.play('dieLeft');
      }

      if (euridice.body.touching.down && dieE === true && runE === false){
        euridice.animations.play('dieLeft');
      }
      game.camera.unfollow(euridice)
      cursors.inputEnabled = false;
      game.time.events.add(2000, function() {
      euridice.visible = false
      euridice.x = checkPoint_E.x;
      euridice.y = checkPoint_E.y;
      euridice.visible = true;
      cursors.inputEnabled = true;
      euridice.body.moves = true
      game.camera.follow(euridice)
      dieE = false;
      runE = true;



      })
  };

function hit(o,c){

  orfeo.lifes = orfeo.lifes - 1;
  immortal = true;

  if (orfeo.lifes < 5)
      life.children[4].kill()

  if (orfeo.lifes < 4)
      life.children[3].kill()

  if (orfeo.lifes < 3)
      life.children[2].kill()

  if (orfeo.lifes < 2)
      life.children[1].kill()

  if (orfeo.lifes < 1){
      life.children[0].kill()
      gameOverRender = true
}

}


function switchToEuridice() {
orfeo.body.moves = false;
euridice.body.moves = true;
game.camera.unfollow(orfeo, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
game.camera.follow(euridice, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
life.setAll('alpha', 0.1)
switchCounter++

}

function switchToOrfeo() {
orfeo.body.moves = true;
if (switchCounter != 5){
euridice.body.moves = false;
}
else{
euridice.body.moves = true;
euridice.x = 20000
}
game.camera.unfollow(euridice, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
game.camera.follow(orfeo, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
life.setAll('alpha', 1)
switchCounter++

}


//ò
function update () {


  collideupdate()
  //console.log(euridice.body.velocity.x);

/*CHECKPOINT ORFEO*/

if (orfeo.x > 600 && checkPoint_O.x < 600) {
  checkPoint_O.y = 400
       checkPoint_O.x = 1880

   }
   if (orfeo.x > 6950 && checkPoint_O.x < 11400 ) {
          checkPoint_O.x = 7064
          checkPoint_O.y = 400
      }
      if (orfeo.x > 11400 && checkPoint_O.x < 26950 ) {
             checkPoint_O.x = 11616
             checkPoint_O.y = 400
         }

/*CHECKPOINT EURIDICE*/

 if (euridice.x < 27432 && checkPoint_E.x > 27432) {
           checkPoint_E.y = 200
           checkPoint_E.x = 27432

    }
    if (euridice.x < 25472 && checkPoint_E.x > 23512 ) {
           checkPoint_E.x = 25300
           checkPoint_E.y = 300
       }
       if (euridice.x < 23512 && checkPoint_E.x > 20000 ) {
              checkPoint_E.x = 23312
              checkPoint_E.y = 250
          }

/*SWITCH ORFEO*/

  if (   orfeo.x < 5850 && orfeo.x > 5550 && switchCounter !== 2 || orfeo.x < 11300 && orfeo.x > 10800 && switchCounter !== 4 ||  orfeo.x < 17150 && orfeo.x > 16650 && switchCounter !== 6) {

        switchEnable = true;
        spiritello.animations.stop('yellow')
        spiritello.animations.play('green')

    }
    else {
      switchEnable = false;
      spiritello.animations.stop('green')
      spiritello.animations.play('yellow')
    }


  if (e.justDown && current == 0 && switchEnable == true ){
    console.log("vai da euridice");
    switchToEuridice();
    current = 1;
    console.log(current);
  }

  if (switchCounter == 6){
  together = true;
}

  /*SWITCH EURIDICE*/

    if (euridice.x < 25664 && euridice.x > 25280  ||  euridice.x < 23680 && euridice.x > 23440  ||  euridice.x < 20480 && euridice.x > 20000 ) {
          switchEnable = true;
          spiritelloE.animations.stop('yellow')
          spiritelloE.animations.play('red')
    }

    else {
        switchEnable = false;
        spiritelloE.animations.stop('red')
        spiritelloE.animations.play('yellow')
    }



/*PLATFORMMOVABLE*/

if (movePlatforms_b2.y === 160+390) {
  movePlatforms_b2.body.velocity.y = - 300
}
if (movePlatforms_b2.y === 160) {
  movePlatforms_b2.body.velocity.y = 300
}

if (movePlatforms_b4.y === 256 + 160 ) {
  movePlatforms_b4.body.velocity.y = -300
}
if (movePlatforms_b4.y === 256 ) {
  movePlatforms_b4.body.velocity.y = 300
}

if (movePlatforms_b6.y === 256 + 160 ) {
  movePlatforms_b6.body.velocity.y = -300
}
if (movePlatforms_b6.y === 256 ) {
  movePlatforms_b6.body.velocity.y = 300
}




/*MOTI PERPETUI*/

    spiritello.x = Math.cos(game.time.totalElapsedSeconds())*5+orfeo.x -30
    spiritello.y = Math.sin(game.time.totalElapsedSeconds())*10+orfeo.y

    horMovePlatforms.x = Math.cos(game.time.totalElapsedSeconds())*150 + 15588;
    horMovePlatforms.y = 320;

    spiritelloE.x = Math.cos(game.time.totalElapsedSeconds())*5+euridice.x + 62
    spiritelloE.y = Math.sin(game.time.totalElapsedSeconds())*10+euridice.y


/*MOVIMENTO ORFEO*/

    var inTheAir = !(orfeo.body.onFloor() || orfeo.body.touching.down);
    var inTheAirE = !(euridice.body.onFloor() || euridice.body.touching.down);
  //  var moveObj = false;



        if (cursors.left.isDown && current === 0)
        {
            orfeo.body.velocity.x = -400;
            spiritello.x = Math.cos(game.time.totalElapsedSeconds())*5+orfeo.x +62

            if( dash === false && !inTheAir && die === false && runO === true)
                orfeo.animations.play('left');
            if (orfeo.x > 17856){
              euridice.body.velocity.x = 400;
              euridice.animations.play('right');
            }

        }
        else if (cursors.right.isDown && current === 0)
        {
            orfeo.body.velocity.x = 400;

            if(dash === false && !inTheAir && die === false && runO === true)
                orfeo.animations.play('right');
            if (orfeo.x > 17856){
                          console.log('euridice avvicinati');
                          console.log(euridice.body.moves);

                          euridice.body.velocity.x = -400;
                          euridice.animations.play('left');
                        }
        }
    else {
       orfeo.body.velocity.x = 0;
       if (orfeo.x > 17856){
         //console.log('euridice sta ferma');
         euridice.body.velocity.x = 0;
         euridice.animations.play('base')
       }

       if (!inTheAir && die === false) {
         orfeo.animations.play ('base')
       }
       else if (inTheAir && die === false &&  orfeo.body.velocity.x === 0) {
         orfeo.animations.play('jumpRight')
       }
       spiritello.y = Math.sin(game.time.totalElapsedSeconds())*10+orfeo.y
       spiritello.x = Math.cos(game.time.totalElapsedSeconds())*5+orfeo.x -20
        }

    /*MOVIMENTO EURIDICE*/

        if (cursors.left.isDown  && together === false && current === 1)
        {
            euridice.body.velocity.x = -400;
            if (!inTheAirE && moveObj === false && runE === true && dieE === false){
              euridice.animations.play('left');
            }
            }

        else if (cursors.right.isDown  && together === false && current === 1)
        {
            euridice.body.velocity.x = 400;
            spiritelloE.x = Math.cos(game.time.totalElapsedSeconds())*5+euridice.x -30;
            if (!inTheAirE && moveObj === false && runE === true && dieE === false){
              euridice.animations.play('right');
              }
            }
        else {
            if (current === 1){
            euridice.body.velocity.x = 0;
            }

            if (!inTheAirE && dieE === false && current===1) {
              euridice.animations.play('base')
            }
            else if (inTheAirE && dieE === false) {
              euridice.animations.play('jumpLeft')
            }
             }



        /*animazioni SALTO ORFEO*/

    if (!inTheAir && current === 0)
    {
        jump = 0;
    }

    else {
      if(cursors.left.isDown && dash === false && die === false && inTheAir){
        orfeo.animations.play('jumpLeft')
      }
      if(cursors.right.isDown && dash === false && die === false && inTheAir ){
        orfeo.animations.play('jumpRight')
      }

    }
      /*animazioni SALTO EURIDICE*/

      if (!inTheAirE && current === 1)
      {
          jump = 0;
      }

      else {
        if(cursors.left.isDown && dieE === false && inTheAirE){
          euridice.animations.play('jumpLeft')
        }
        if(cursors.right.isDown && dieE === false && inTheAirE){
          euridice.animations.play('jumpRight')
        }

      }

      /*SALTO*/

    if (jumpButton.justDown  )
    {
      if  (current === 1 && jump < 1 && !inTheAirE){
        euridice.body.velocity.y = -750;
        jump ++;
        console.log(jump);
      }

      if  (current === 0 && jump < maxJump){
        orfeo.body.velocity.y = -750;
        jump ++;
        console.log(jump);
      }
    }

/*DASH ORFEO*/

    if (cursors.down.justDown && canDash === true)
    {
      dash = true;
      game.time.events.add(Phaser.Timer.SECOND*0.5, function(){dash = false; orfeo.body.setSize(32, 70, 25, 10)}, this);
    }

    if (dash === true && cursors.left.isDown){
      orfeo.body.setSize(40, 40, 32, 40)
      orfeo.body.velocity.x = -800;
      orfeo.animations.play('rotateLeft')
    }

    if (dash === true && cursors.right.isDown){
          orfeo.body.setSize(40, 40, 32, 40)
      orfeo.body.velocity.x = 800;
      orfeo.animations.play('rotateRight')
    }

/*MOVE OBJECTS EURIDICE*/

if (!euridice.body.touching.left || !euridice.body.touching.right) {
    runE = true
  moveObj = false
};





    /*WATERFALL*/

          if (movable3.x < 25930) {
            waterfall_1.kill();
          }

          if (movable6.x < 20812) {
            waterfall_2.kill();
          }









hudupdate()




}

function render () {
}
