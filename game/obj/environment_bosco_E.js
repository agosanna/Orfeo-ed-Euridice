function environmentBoscopreload(){

    /*WATERPLATFORM*/
   game.load.image('Waterplatform','assets/movable/tronco-acqua.png')


   /*ROCCIA*/
   game.load.image('roccia_1', 'assets/sfondo bosco/roccia_1.png');
   game.load.image('roccia_2', 'assets/sfondo bosco/roccia_2.png');

     /*GOCCIA*/
     game.load.spritesheet('goccia', 'assets/magic/goccia.png', 64, 64);


     /*WATER*/
     game.load.spritesheet('water1', 'assets/water/water1.png', 1986, 200);
     game.load.spritesheet('water2', 'assets/water/water2.png', 449, 200);
     game.load.spritesheet('water3', 'assets/water/water3.png', 704, 200);
     game.load.spritesheet('waterfall', 'assets/water/waterfall.png', 270, 640);

     /*FLOOR e ROOF*/
     game.load.image('floorB1', 'assets/floorBosco/floorB1.png');
     game.load.image('floorB2', 'assets/floorBosco/floorB2.png');
     game.load.image('floorB3', 'assets/floorBosco/floorB3.png');
     game.load.image('floorB4', 'assets/floorBosco/floorB4.png');
     game.load.image('floorB5', 'assets/floorBosco/floorB5.png');
     game.load.image('floorB6', 'assets/floorBosco/floorB6.png');
     game.load.image('floorB7', 'assets/floorBosco/floorB7.png');
     game.load.image('floorB8', 'assets/floorBosco/floorB8.png');
     game.load.image('floorB9', 'assets/floorBosco/floorb9.png');
     game.load.image('gradino', 'assets/floorBosco/gradino.png');
     game.load.image('roof1', 'assets/floorBosco/roof1.png');
     game.load.image('roof2', 'assets/floorBosco/roof2.png');
     game.load.image('roof3', 'assets/floorBosco/roof3.png');
     game.load.image('roof4', 'assets/floorBosco/roof4.png');
     game.load.image('tree1', 'assets/floorBosco/tree1.png');
     game.load.image('tree2', 'assets/floorBosco/tree2.png');

     /*PLATFORM*/
     game.load.image('platformB1', 'assets/platformsBosco/platformB1.png');
     game.load.image('platformB1.5', 'assets/platformsBosco/platformB1.5.png');
     game.load.image('platformB2', 'assets/platformsBosco/platformB2.png');
     game.load.image('platformB2v', 'assets/platformsBosco/platformB2v.png');
     game.load.image('platformB4', 'assets/platformsBosco/platformB4.png');
     game.load.image('platformB5', 'assets/platformsBosco/platformB5.png');
     game.load.image('platformB6', 'assets/platformsBosco/platformB6.png');
     game.load.image('platformB6b', 'assets/platformsBosco/platformB6b.png');
     game.load.image('platformB8', 'assets/platformsBosco/platformB8.png');
     game.load.image('platformB10', 'assets/platformsBosco/platformB10.png');
     game.load.image('platformB11.5', 'assets/platformsBosco/platformB11.5.png');
     game.load.image('buttonup', 'assets/platformsBosco/buttonup.png');
     game.load.image('buttondown', 'assets/platformsBosco/buttondown.png');
     game.load.image('platformBmagic', 'assets/platformsBosco/platformBmagic.png');

     /*MOVABLE OBJECTS*/
     game.load.image('movable1', 'assets/movable/movable1.png');
     game.load.image('movable2', 'assets/movable/movable2.png');
     game.load.image('movable3', 'assets/movable/movable3.png');
     game.load.image('movable4', 'assets/movable/movable4.png');
     game.load.image('movable5', 'assets/movable/movable5.png');
     game.load.image('movable6', 'assets/movable/movable6.png');
     game.load.image('movable7', 'assets/movable/movable7.png');



     /*OBSTACLES*/
     game.load.spritesheet('thorns', 'assets/obstaclesB/thorns.png', 160, 224);
     game.load.image('falce', 'assets/obstaclesB/falce.png');

   }



   function environmentBoscocreate(){

   /*ROCCIA*/

     rocce = game.add.physicsGroup();
     roccia1 = rocce.create(26733,263,'roccia_1')
     roccia2 = rocce.create(28544,550,'roccia_2')
     roccia3 = rocce.create(24456,391,'roccia_1')
     roccia4 = rocce.create(24657,552,'roccia_2')
     game.physics.arcade.enable(rocce);
     rocce.setAll('body.immovable', true);




     /*WATER*/

     water = game.add.physicsGroup();

     water1 = water.create(25660, 576, 'water1');
     water2 = water.create(24832, 576, 'water2');
     water3 = water.create(20672, 576, 'water3');

     game.physics.arcade.enable(water);
     water.setAll('body.immovable', true);

     water1.body.setSize(1986, 184, 0, 16);
     water2.body.setSize(449, 184, 0, 16);
     water3.body.setSize(704, 184, 0, 16);

     water1.animations.add('water1', [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
     water2.animations.add('water2', [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
     water3.animations.add('water3', [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
     water1.animations.play('water1');
     water2.animations.play('water2');
     water3.animations.play('water3');


     /*WATERPLATFORM*/
     waterPlatform = game.add.physicsGroup();
     waterPlatform.enableBody = true;

     waterPlatform1 = waterPlatform.create(25500, 560, 'Waterplatform');
     waterPlatform2 = waterPlatform.create(25500 , 560, 'Waterplatform');
     waterPlatform3 = waterPlatform.create(25500, 560, 'Waterplatform');
     waterPlatform4 = waterPlatform.create(25500, 560, 'Waterplatform');
     waterPlatform5 = waterPlatform.create(25500, 560, 'Waterplatform');
     waterPlatform6 = waterPlatform.create(20500, 560, 'Waterplatform');
     waterPlatform7 = waterPlatform.create(20500, 560, 'Waterplatform');
     waterPlatform.children.forEach( function (wp) {

       wp.body.immovable = true;

       var tween =  game.add.tween(wp).to( {y: wp.y+5}, 1000, "Linear", true, 0, -1,true);

     });

   /*WATERPLATFORM_TWEEN*/
     game.time.events.add(Phaser.Timer.SECOND * 3, function () {
       var tween1 = game.add.tween(waterPlatform5).to( {x: waterPlatform5.x +2000}, 15000, "Linear",true);
       tween1.repeat(10000,0 );
     })

     game.time.events.add(Phaser.Timer.SECOND * 6, function () {
       var tween2 = game.add.tween(waterPlatform4).to( {x: waterPlatform4.x +2000}, 15000, "Linear",true);
       tween2.repeat(10000,0 );
     })

     game.time.events.add(Phaser.Timer.SECOND * 9, function () {
       var tween3 = game.add.tween(waterPlatform3).to( {x: waterPlatform3.x +2000}, 15000, "Linear",true);
       tween3.repeat(10000,0 );
     })

     game.time.events.add(Phaser.Timer.SECOND * 12, function () {
       var tween4 = game.add.tween(waterPlatform2).to( {x: waterPlatform2.x +2000}, 15000, "Linear",true);
       tween4.repeat(10000,0 );
     })

     game.time.events.add(Phaser.Timer.SECOND * 15, function () {
         var tween5 = game.add.tween(waterPlatform1).to( {x: waterPlatform1.x +2000}, 15000, "Linear",true);
         tween5.repeat(10000,0 );
     })

     game.time.events.add(Phaser.Timer.SECOND * 2, function () {
         var tween6 = game.add.tween(waterPlatform6).to( {x: waterPlatform6.x +758}, 4000, "Linear",true);
         tween6.repeat(10000,0 );
     })
     game.time.events.add(Phaser.Timer.SECOND * 4, function () {
         var tween7 = game.add.tween(waterPlatform7).to( {x: waterPlatform7.x +758}, 4000, "Linear",true);
         tween7.repeat(10000,0 );
     })










     /*WATERFALL*/
     waterfall = game.add.physicsGroup();

     waterfall_1 = waterfall.create(25913, 0, 'waterfall');
     waterfall_2 = waterfall.create(20793, 0, 'waterfall');

     waterfall_1.body.setSize(128, 640, 71, 0);
     waterfall_2.body.setSize(128, 640, 71, 0);

     game.physics.arcade.enable(waterfall);
     waterfall.setAll('body.immovable', true);

     waterfall.callAll('animations.add', 'animations', 'fall', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
     waterfall.callAll('animations.play', 'animations', 'fall');



     /*GOCCIA*/

     gocce = game.add.physicsGroup();

       goccia_1 = gocce.create(25580, 370, 'goccia');
       goccia_2 = gocce.create(23600, 250, 'goccia');
       goccia_3 = gocce.create(20064, 590, 'goccia');

     game.physics.arcade.enable(gocce);
     gocce.setAll('body.immovable', true);
     gocce.callAll('animations.add', 'animations', 'gocciacreate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10, true);
     gocce.callAll('animations.add', 'animations', 'gocciafall', [6, 7, 8, 9, 10, 11, 12, 13], 7, true);
     gocce.callAll('animations.play', 'animations', 'gocciacreate');


     /*PLATFORM*/

     platformsB = game.add.physicsGroup();

     platformsB.create(26400, 288, 'platformB6');
     platformsB.create(26402, 176, 'movable7');
     platformsB.create(26240, 416, 'platformB1');
     platformsB.create(25888, 96, 'platformB8');
     platformsB.create(25888, -16, 'movable7');
     platformsB.create(23872, 416, 'platformB10');
     platformsB.create(24004, 160, 'platformB5');
     platformsB.create(22688, 160, 'platformB11.5');
     platformsB.create(22848, 320, 'platformB6b');
     platformsB.create(22848, 352, 'platformB2v');
     platformsB.create(22686, 352, 'platformB1.5');
     platformsB.create(21250, 128, 'platformB4');
     platformsB.create(20770, 288, 'platformB11.5');
     platformsB.create(20770, 174, 'movable7');

     platformsB.children[13].alpha = 0;

     game.physics.arcade.enable(platformsB);
     platformsB.setAll('body.immovable', true);



     /*BUTTON*/

     buttonup = game.add.sprite(26252, 402, 'buttonup');

     buttonup.scale.x = 0.30;
     buttonup.scale.y = 0.30;
     game.physics.arcade.enable(buttonup);
     buttonup.body.immovable = true;




     /*FLOOR e ROOF*/

     floorB = game.add.physicsGroup();

     floorB.create(27774, 576, 'floorB1');
     floorB.create(27392, 352, 'floorB2');
     floorB.create(25280, 448, 'floorB3');
     floorB.create(23680, 576, 'floorB4');
     floorB.create(23440, 320, 'floorB5');
     floorB.create(22688, 672, 'floorB6');
     floorB.create(21376, 576, 'floorB7');
     floorB.create(20480, 448, 'floorB8');
     floorB.create(20292, 192, 'floorB9');
     floorB.create(23362, 640, 'gradino');
     floorB.create(23104, 640, 'gradino');
     floorB.create(23768, 0, 'roof1');
     floorB.create(23422, 0, 'roof2');
     floorB.create(20800, 0, 'roof3');
     floorB.create(20292, 0, 'roof4');
     floorB.create(22560, 0, 'tree1');
     floorB.create(21504, 0, 'tree2');

     game.physics.arcade.enable(floorB);
     floorB.setAll('body.immovable', true);



     /*MOVABLE OBJECTS*/

     movable = game.add.physicsGroup();
     movable.enableBody = true;
     movable.create(28096, 480, 'movable1');
     movable.create(26640, 227, 'movable2');
     movable3 = movable.create(26176, 2, 'movable3');
     movable.create(24000, 16, 'movable1');
     movable.create(23184, 602, 'movable4');
     movable.create(22944, 488, 'movable5');
     movable6 = movable.create(21248, 0, 'movable6');
     movable.create(20576, 336, 'movable7');
     game.physics.arcade.enable(movable);

   /*MOVABLE OBJECT PHYSICS*/
     movable.children.forEach( function (m) {
       m.body.moves = true
       m.body.drag.x = 5
       m.body.gravity.y = 1000
       m.body.maxVelocity.x = 10

     });




     /*THORNS*/

     thorns = game.add.physicsGroup();

       thorns_1 = thorns.create(24000, 192, 'thorns');
       thorns_2 = thorns.create(23008, -64, 'thorns');

     game.physics.arcade.enable(thorns);
     thorns.setAll('body.immovable', true);
     thorns.callAll('animations.add', 'animations', 'thornsCut', [0, 1, 2, 3, 4, 5, 6, 7], 10, false);

   /*FALCE*/

     falce = game.add.sprite(24160, 64, 'falce');
     game.physics.arcade.enable(falce);
     falce.body.immovable = true;


     /*MOVEPLATFORMS*/

     movePlatforms_b = game.add.physicsGroup()
     movePlatforms_b2 = movePlatforms_b.create(25024, 160, 'platformB2');
     movePlatforms_b3 = movePlatforms_b.create(24448, 160, 'platformB2');
     movePlatforms_b4 = movePlatforms_b.create(23336, 256, 'platformB1');
     movePlatforms_b5 = movePlatforms_b.create(22208, 448, 'platformB1');
     movePlatforms_b6 = movePlatforms_b.create(22080, 256, 'platformB1');
     movePlatforms_b7 = movePlatforms_b.create(22208, 160, 'platformB1');
     movePlatforms_b8 = movePlatforms_b.create(21632, 288, 'platformB1');
     movePlatforms_b9 = movePlatforms_b.create(21632, 128, 'platformB1');

     game.physics.arcade.enable(movePlatforms_b);
     movePlatforms_b.setAll('body.immovable', true);

     /*MOVEPLATFORMS_TWEEN*/

     var tween_03 =  game.add.tween(movePlatforms_b3).to( {x: movePlatforms_b3.x + 350}, 2000, "Linear", true, 0, -1,true);
     var tween_05 =  game.add.tween(movePlatforms_b5).to( {x: movePlatforms_b5.x + 192}, 2500, "Linear", true, 0, -1,true);
     var tween_07 =  game.add.tween(movePlatforms_b7).to( {x: movePlatforms_b7.x + 192}, 2500, "Linear", true, 0, -1,true);
     var tween_08 =  game.add.tween(movePlatforms_b8).to( {x: movePlatforms_b8.x + 256}, 2500, "Linear", true, 0, -1,true);
     var tween_09 =  game.add.tween(movePlatforms_b9).to( {x: movePlatforms_b9.x + 320}, 2500, "Linear", true, 0, -1,true);
   }
