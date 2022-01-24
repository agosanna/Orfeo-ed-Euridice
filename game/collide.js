function collideupdate(){

    geyserupdate();
    checkupdate();

//COLLIDE ORFEO --> tutte le interazioni di Orfeo con gli altri elementi

    game.physics.arcade.collide(orfeo, fiammone);
    game.physics.arcade.collide(orfeo, ponte);
    game.physics.arcade.collide(orfeo, stala_finale);
    game.physics.arcade.collide(orfeo, portale_floor);
    game.physics.arcade.collide(orfeo, platforms);
    game.physics.arcade.collide(orfeo, moveplatforms);
    game.physics.arcade.collide(orfeo, horMovePlatforms, function(obj1, platform){obj1.x += platform.deltaX;});
    game.physics.arcade.collide(orfeo, floor);
    game.physics.arcade.collide(orfeo, timePlatforms, function(player, tp) {
        if (tp.body.touching.up){
            game.time.events.add(Phaser.Timer.SECOND * 0.25, function () {
            tp.body.gravity.y = 800;
            })
        };
    });

    timePlatforms.children.forEach( function(tp) {
         if (tp.y > game.world.height+3000) {
             tp.body.gravity.y = 0;
             tp.body.velocity.y = 0;
             tp.body.y = tp.posY;
             tp.angle = 0;
             }
          });

    game.physics.arcade.collide(orfeo, wisp_Jump, function() {
      wisp_Jump.kill();
      maxJump = 2;
      text.children[6].visible = true;
    });
    game.physics.arcade.collide(orfeo, wisp_Rotate, function() {
      wisp_Rotate.kill();
      canDash = true;
      text.children[7].visible = true;
    });


  game.physics.arcade.collide(orfeo, lava, function() {gameOver_O()});
  game.physics.arcade.collide(orfeo, stala, function() {gameOver_O()});


  /*azioni che avvengono dopo che Euridice raccoglie le gocce magiche per aiutare Orfeo*/

    game.physics.arcade.collide(goccia_2, fiammone, function() {
      goccia_2.kill()
      game.time.events.add(Phaser.Timer.SECOND*1.5, function(){switchToOrfeo()})
      current = 0
      fiammone.animations.play('fiammonespento')
      game.time.events.add(Phaser.Timer.SECOND*1, function(){  fiammone.kill()})
    });



    game.physics.arcade.collide(goccia_3, stala_finale, function() {
      goccia_3.kill()
      game.time.events.add(Phaser.Timer.SECOND*0.5, function(){switchToOrfeo()})
      current = 0

      stala_finale.animations.play('stala_vanish')

     game.time.events.add(Phaser.Timer.SECOND*0.5, function(){  stala_finale.kill()})

    });


    game.physics.arcade.collide(goccia_1, lava, function() {
      goccia_1.kill()
      game.time.events.add(Phaser.Timer.SECOND*1.5, function(){switchToOrfeo()})
      current = 0
      ponte.body.setSize(511,192)
      ponte.visible = true
      ponte.animations.play('pontecreate')
    });


    //COLLIDE EURIDICE --> tutte le interazioni di Euridice con gli altri elementi

    holesupdate();

    game.physics.arcade.collide(euridice, goccia_1, function (){
      game.time.events.add(Phaser.Timer.SECOND*1.5, function(){goccia_1.x = 6272;
      goccia_1.y = 192;game.camera.follow(goccia_1, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);}, this);
      if (goccia_1.x = 6272, goccia_1.y = 192)
      {
          game.time.events.add(Phaser.Timer.SECOND*1, function(){
        goccia_1.body.velocity.y = 300
        goccia_1.animations.play('gocciafall');
      })
      }

    });


    game.physics.arcade.collide(euridice, goccia_2, function (){
      game.time.events.add(Phaser.Timer.SECOND*1.5, function(){goccia_2.x = 11136;
      goccia_2.y = 20; game.camera.follow(goccia_2, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);}, this);
      if (goccia_2.x = 11136, goccia_2.y = -300)
      {  fiammone.body.setSize(92, 150, 50, 233);
          game.time.events.add(Phaser.Timer.SECOND*2, function(){
        goccia_2.body.velocity.y = 300
        goccia_2.animations.play('gocciafall');
      })
      }

    });



    game.physics.arcade.collide(euridice, goccia_3, function (){
      game.time.events.add(Phaser.Timer.SECOND*0.5, function(){goccia_3.x = 17088;
      goccia_3.y = 128; euridice.x = 20000; game.camera.follow(goccia_3, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);}, this);
      if (goccia_3.x = 17088, goccia_3.y = 128)
      {
          game.time.events.add(Phaser.Timer.SECOND*1, function(){
        goccia_3.body.velocity.x = 200
        goccia_3.animations.play('gocciafall');
      })
      }

    });

    game.physics.arcade.collide(movable, rocce);
    game.physics.arcade.collide(euridice, rocce);
    game.physics.arcade.collide(euridice, waterPlatform, function(obj1, platform){    obj1.x += platform.deltaX;   });
    game.physics.arcade.collide(euridice, platformsB);
    game.physics.arcade.collide(euridice, portale_floor);
    game.physics.arcade.collide(euridice, floorB);
    game.physics.arcade.collide(movable, floorB);
    game.physics.arcade.collide(movable, platformsB);
    game.physics.arcade.collide(euridice, buttonup, function(){
      buttonpressed = true;

    });

    if (buttonpressed === true){
      buttonup.loadTexture('buttondown', 0);

      if (platformsB.children[2].x > 27136 ) {
        platformsB.children[2].body.velocity.x = -200
        buttonup.body.velocity.x = -200
      }

      if (platformsB.children[2].x  === 26240 ) {
        platformsB.children[2].body.velocity.x = 200
        buttonup.body.velocity.x = 200
      }

    }

      game.physics.arcade.collide(euridice, movePlatforms_b, function(obj1, platform){obj1.x += platform.deltaX,obj1.Y += platform.deltaY });

   game.physics.arcade.collide(euridice, movable, function (){

      moveObj = true;
      //if (moveObj === true){
      if (cursors.left.isDown) {
          euridice.animations.play('moveRight');

        }
      if (cursors.right.isDown) {
          euridice.animations.play('moveLeft');
    }

    game.physics.arcade.OVERLAP_BIAS = 20;

    });

    game.physics.arcade.collide(euridice, falce, function() {
        falce.kill();
        cut = true;
        text.children[10].visible = true;
    });



    game.physics.arcade.collide(euridice, water, function (){gameOver_E()});
    game.physics.arcade.collide(euridice, waterfall, function() {gameOver_E()});
    game.physics.arcade.collide(euridice, thorns_1, function() {
    runE = false
        if (c.isDown && cut === true) {
          if (thorns_1.body.touching.left) {
              euridice.animations.play('cutRight');
              }
              if (thorns_1.body.touching.right) {
                euridice.animations.play('cutLeft');
                  }
          thorns_1.animations.play('thornsCut');
          game.time.events.add(Phaser.Timer.SECOND*0.5, function(){thorns_1.kill()}, this);
        }
      });

      game.physics.arcade.collide(euridice, thorns_2, function() {
      runE = false
          if (c.isDown && cut == true) {
            if (thorns_2.body.touching.left) {
                euridice.animations.play('cutRight');
                }
                if (thorns_2.body.touching.right) {
                  euridice.animations.play('cutLeft');
                    }
            thorns_2.animations.play('thornsCut');
            game.time.events.add(Phaser.Timer.SECOND*0.5, function(){thorns_2.kill()}, this);
          }
        });

        game.physics.arcade.collide(rocce, euridice);
        game.physics.arcade.collide(rocce, movable);

        /*COLLIDE TRA UPDATE ED EURIDICE*/
        game.physics.arcade.collide(orfeo, euridice, function(o,e){ mytween3.resume(), game.time.events.add(Phaser.Timer.SECOND*3, function(){  mytween4.resume(), tastiRender.setAll('visible', true);
        tastiRender.setAll('alpha', 0);
        tastiRender.setAll('inputEnabled', true);  })});
  }
