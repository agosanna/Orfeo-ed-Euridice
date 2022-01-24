function environmentpreload(){




//FIAMMONE
  game.load.spritesheet('fiammone','assets/magic/Fiamma_animazione.png', 192, 383.6136)




  /*ANIMATIONORFEOHELP*/
  game.load.spritesheet('ponte','assets/magic/creazione_ponte.png', 511, 192)

  /*PLATFORM*/
  game.load.image('platform1', 'assets/platforms/Platform1.png');
  game.load.image('platform2', 'assets/platforms/Platform2.png');
  game.load.image('platform3', 'assets/platforms/Platform3.png');
  game.load.image('platform5', 'assets/platforms/Platform5.png');
  game.load.image('platform8', 'assets/platforms/Platform8.png')
  game.load.image('platform2v', 'assets/platforms/Platform2v.png');
  game.load.image('platform1time', 'assets/platforms/platform1time.png');
  game.load.image('platform2time', 'assets/platforms/platform2time.png');
  game.load.image('platform3time', 'assets/platforms/platform3time.png');


  /*LAVA*/
  game.load.spritesheet('lava60mod', 'assets/lava/lava60mod.png', 3800, 200);
  game.load.spritesheet('lava75mod', 'assets/lava/lava75mod.png', 4800, 200);


  // GROTTAPERPORTALE
  game.load.image('grottasx', 'assets/magic/grotta_finalesx.png')
  game.load.image('grottadx', 'assets/magic/grotta_finaledx.png')



  /*FLOOR*/
  game.load.image('terreno3', 'assets/floor/terreno_03.png')
  game.load.image('terreno5', 'assets/floor/terreno_05.png')
  game.load.image('terreno6', 'assets/floor/terreno_06.png')
  game.load.image('terreno2', 'assets/floor/terreno_02.png')
  game.load.image('terreno4', 'assets/floor/terreno_04.png')
  game.load.image('terreno1', 'assets/floor/terreno_01.png')
  game.load.image('terreno7', 'assets/floor/terreno_07.png')
  game.load.image('terreno7.1', 'assets/floor/terreno_07.1.png')
  game.load.image('terreno10', 'assets/floor/terreno_10.png')
  game.load.image('terreno10.1', 'assets/floor/terreno_10.1.png')
  game.load.image('terreno11', 'assets/floor/terreno_11.png')
  game.load.image('terreno12', 'assets/floor/terreno_12.png')
  game.load.image('terreno13', 'assets/floor/terreno_13.png')
  game.load.image('terreno14', 'assets/floor/terreno_14.png')
  game.load.image('terreno14.1', 'assets/floor/terreno_14.1.png')
  game.load.image('terreno14.2', 'assets/floor/terreno_14.2.png')
  game.load.image('floor3x1', 'assets/floor/floor3x1.png')
  game.load.image('floor4x2', 'assets/floor/floor4x2.png')
  game.load.image('floor6x1', 'assets/floor/floor6x1.png')
  game.load.image('floor7x1', 'assets/floor/floor7x1.png')
  game.load.image('floor7x2', 'assets/floor/floor7x2.png')
  game.load.image('terreno9', 'assets/floor/terreno_09.png')
  game.load.image('floor8x5', 'assets/floor/floor8x5.png')
  game.load.image('terreno14', 'assets/floor/terreno_14.png')
  game.load.image('floor11x4', 'assets/floor/floor11x4.png')
  game.load.image('terreno8', 'assets/floor/terreno_08.png')
  game.load.image('floor19', 'assets/floor/floor19.png')
  game.load.image('floor12', 'assets/floor/floor12.png')
  game.load.image('floor3', 'assets/floor/floor3.png')
  game.load.image('floor15', 'assets/floor/floor15.png')
  game.load.image('floor6', 'assets/floor/floor6.png')
  game.load.image('floorfinale','assets/floor/muro_finale.png')
  game.load.image('basegeyser', 'assets/floor/basegeyser.png')
  //da continuare


  /*OBSTACLE*/
  game.load.image('stala1.5up', 'assets/obstacles/stala1.5up.png')
  game.load.image('stala1.5down', 'assets/obstacles/stala1.5down.png')
  game.load.image('stala3up', 'assets/obstacles/stala3up.png')
  game.load.image('stala4up', 'assets/obstacles/stala4up.png')
  game.load.spritesheet('stalafinale','assets/magic/stala_scompaiono.png', 127.8, 120)

  game.load.spritesheet('geyser', 'assets/obstacles/geyser.png', 64, 320)
  game.load.image('geyserBB', 'assets/obstacles/geyserBB.png');




}

function environmentcreate(){

  /*LAVA*/

  lava = game.add.physicsGroup();


  lava1 = lava.create(0, 586, 'lava75mod');
  lava2 = lava.create(4500, 586, 'lava60mod');
  lava3 = lava.create(8500, 586, 'lava60mod');
  lava4 = lava.create(12400, 586, 'lava75mod');

  lava1.body.setSize(4800, 184, 0, 16);
  lava2.body.setSize(3800, 184, 0, 16);
  lava3.body.setSize(3800, 184, 0, 16);
  lava1.body.setSize(4800, 184, 0, 16);

  lava1.animations.add('lava1', [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
  lava2.animations.add('lava2', [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
  lava3.animations.add('lava3', [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);
  lava4.animations.add('lava4', [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10, true);

  lava1.animations.play('lava1');
  lava2.animations.play('lava2');
  lava3.animations.play('lava3');
  lava4.animations.play('lava4');

  game.physics.arcade.enable(lava);
  lava.setAll('body.immovable', true);





//FIAMMONE
fiammone = game.add.sprite(11124, 195,'fiammone');
fiammone.visible = true
fiammone.animations.add('fiammonefuocoso', [4,5,6,7,8], 10, true);
fiammone.animations.add('fiammonespento', [6,7,8,9,10,11,12], 10, false);
fiammone.animations.play('fiammonefuocoso');
game.physics.arcade.enable(fiammone);
fiammone.body.immovable = true;



  /*BUBBLES*/

  bubblesGroup1 = game.add.group();
  bubblesGroup2 = game.add.group();
  bubblesGroup3 = game.add.group();

  for (var i = 0; i < 50; i++)
    {bubblesGroup1.create(game.rnd.integerInRange(0, 17200), 608, 'bubbles24')}
    game.physics.arcade.enable(bubblesGroup1);
    bubblesGroup1.callAll('animations.add', 'animations', 'pop1', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22], 15, true);

  for (var i = 0; i < 50; i++)
    {bubblesGroup2.create(game.rnd.integerInRange(0, 17200), 608, 'bubbles48')}
    game.physics.arcade.enable(bubblesGroup2);
    bubblesGroup2.callAll('animations.add', 'animations', 'pop2', [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 0, 1, 2, 3, 4, 5, 6], 15, true);

  for (var i = 0; i < 50; i++)
    {bubblesGroup3.create(game.rnd.integerInRange(0, 17200), 608, 'bubbles24')}
    game.physics.arcade.enable(bubblesGroup3);
    bubblesGroup3.callAll('animations.add', 'animations', 'pop3', [14, 15, 16, 17, 18, 19, 20, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 15, true);

  bubblesGroup1.callAll('animations.play', 'animations', 'pop1');
  bubblesGroup2.callAll('animations.play', 'animations', 'pop2');
  bubblesGroup3.callAll('animations.play', 'animations', 'pop3');


  /*movablePLATFORMS*/

  moveplatforms = game.add.physicsGroup();

  moveplatforms.create(6144 + 2480, 416, 'platform3')
  moveplatforms.create(3712, 160, 'platform2')
  moveplatforms.create(11264+2688 , 480, 'platform1');

  game.physics.arcade.enable(moveplatforms);

  moveplatforms.setAll('body.immovable', true);
  moveplatforms.setAll('body.collideWorldBounds', true);
  moveplatforms.setAll('body.bounce.y', 1);
  moveplatforms.setAll('body.velocity.y', -240);

  //horizzontalmovePlatform

  horMovePlatforms = game.add.sprite(15424, 224, 'platform3');
  game.physics.arcade.enable(horMovePlatforms);
  horMovePlatforms.body.immovable = true;
  var tween_001 =  game.add.tween(horMovePlatforms).to( {x: horMovePlatforms.x + 308}, 3000, "Linear", true, 0, -1,true);




  /*OBSTACLES*/

  stala = game.add.physicsGroup();
  stala.enableBody = true;

  stala.create(6144+1792 , 160, 'stala1.5up');
  stala.create(6144+1984 , 384, 'stala1.5down');
  stala.create(6144+2334 , 384, 'stala1.5down');
  stala.create(6144+4448 , 192, 'stala1.5down');

  stala.create(11264+864 , 300, 'stala3up');
  stala.create(11264+1738 , 64, 'stala3up');
  stala.create(11264+2708 , 64, 'stala3up');
  stala.create(11264+3530 , 96, 'stala4up');
  stala.create(11264+3776 , 192, 'stala3up');
  stala.create(11264+4800 , 112, 'stala1.5up');


  stala.setAll('body.immovable',true);

  stala.children[0].body.setSize(80, 64, 8, 0);
  stala.children[1].body.setSize(80, 64, 8, 24);
  stala.children[2].body.setSize(80, 64, 8, 24);
  stala.children[3].body.setSize(80, 64, 8, 24);
  stala.children[4].body.setSize(180, 80, 6, 0);
  stala.children[5].body.setSize(180, 80, 6, 0);
  stala.children[6].body.setSize(180, 80, 6, 0);
  stala.children[7].body.setSize(240, 80, 8, 0);
  stala.children[8].body.setSize(180, 80, 6, 0);
  stala.children[9].body.setSize(80, 80, 8, 0);




//STALA FINALE
stala_finale = game.add.sprite(17216, 64,'stalafinale');
stala_finale.visible = true
game.physics.arcade.enable(stala_finale);
stala_finale.body.immovable = true;
stala_finale.animations.add('stala_vanish', [0, 1, 2, 3, 4, 5], 5, false);


  /*FLOOR*/

  floor = game.add.physicsGroup();

  floor.create(0, 580, 'terreno1');
  floor.create(1408, 576, 'terreno2');
  floor.create(3112, 576, 'terreno3');
  floor.create(4032, 576, 'terreno4');
  floor.create(5504, 576, 'terreno5');
  floor.create(6656, 576, 'terreno6');

  floor.create(7524 , 256, 'terreno7');
  floor.create(7604 , 328, 'terreno7.1');
  floor.create(7868 , 0, 'floor11x4');
  floor.create(7868 , 454, 'terreno8');
  floor.create(8832 , 192, 'terreno9');
  floor.create(8832 , 0, 'floor6x1');
  floor.create(6144 + 3520, 384, 'terreno10');
  floor.create(6144 + 3720, 552, 'terreno10.1');
  floor.create(6144 + 4352, 256, 'terreno11');
  floor.create(6144 + 4672, 576, 'terreno12');

  floor.create(17342, 65, 'floorfinale')
  floor.create(11904 , 0, 'floor8x5');
  floor.create(11840 , 448, 'terreno13');
  floor.create(11264+1728 , -88, 'floor3x1');
  floor.create(11264+2688 , 0, 'floor6x1');
  floor.create(11264+3520 , 0, 'floor7x2');
  floor.create(11264+3776 , 40, 'floor3x1');
  floor.create(11264+4736 , 0, 'floor4x2');
  floor.create(11264+5888 , -32, 'floor4x2');
  floor.create(11264+5562 , 576, 'terreno14');
  floor.create(11264+5687, 448, 'terreno14.1');
  floor.create(11264+5865, 192, 'terreno14.2');


  game.physics.arcade.enable(floor);

  floor.setAll('body.immovable', true);
  floor.children[24].body.setSize(275, 100, 0, 0);
  floor.children[16].body.setSize(0, 0, 0, 0);




    //GROTTA


  /*PLATFORMS*/

  platforms = game.add.physicsGroup();

  platforms.create(2432, 560, 'platform2');
  platforms.create(2812 , 560, 'platform2');
  platforms.create(3392, 400, 'platform3');
  platforms.create(3840, 126, 'platform8');
  platforms.create(4320, 0, 'platform2v');
  platforms.create(5152 , 416, 'platform1');
  platforms.create(5344 , 256, 'platform1');



  platforms.create(11264+1344 , 480, 'platform2');
  platforms.create(11264+1600 , 192, 'platform5');
  platforms.create(11264+2176 , 288, 'platform2');
  platforms.create(11264+2496 , 480, 'platform1');
  platforms.create(11264+2944 , 234, 'platform3');
  platforms.create(11264+3328 , 224, 'platform1');
  platforms.create(11264+3968 , 320, 'platform3');
  platforms.create(11264+4992 , 288, 'platform2');

  platforms.setAll('body.immovable', true);



  /*timePLATFORMS*/

  timePlatforms = game.add.physicsGroup();
  timePlatforms.enableBody = true;

  timePlatforms.create(6144+3392 , 544, 'platform1time');
  timePlatforms.create(6144+3968 , 544, 'platform1time');
  timePlatforms.create(6144+4032 , 544, 'platform1time');
  timePlatforms.create(6144+4096 , 544, 'platform1time');

  timePlatforms.create(11264+1920 , 192, 'platform2time');
  timePlatforms.create(11264+2752 , 234, 'platform3time');
  timePlatforms.create(11264+3136 , 416, 'platform1time');
  timePlatforms.create(11264+3520 , 320, 'platform1time');
  timePlatforms.create(11264+3584 , 320, 'platform1time');
  timePlatforms.create(11264+3648 , 320, 'platform1time');
  timePlatforms.create(11264+3712 , 320, 'platform1time');
  timePlatforms.create(11264+3776 , 320, 'platform1time');
  timePlatforms.create(11264+3840 , 320, 'platform1time');
  timePlatforms.create(11264+3904 , 320, 'platform1time');
  timePlatforms.create(11264+4672 , 480, 'platform1time');

  timePlatforms.children.forEach( function (tp) {
    tp.posY = tp.body.y
    tp.body.immovable = true;
    tp.body.maxVelocity.y = 800;
  });


  /*PONTE*/

  ponte = game.add.sprite(6016, 576,'ponte');
  ponte.visible = false
  ponte.animations.add('pontecreate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, false);
  game.physics.arcade.enable(ponte);
  ponte.body.setSize(0,0)
  ponte.body.immovable = true

  /*timePlatforms = game.add.physicsGroup();
  for (var p of platformInitialStates) {
    timePlatforms.create(p.x, p.y, p.sprite);
  }



  game.physics.arcade.enable(timePlatforms);
  timePlatforms.setAll('body.immovable', true);





  game.physics.arcade.enable(stala);
  stala.setAll('body.immovable', true);


}

function resetTimePlatforms(){

    for (var i = 0; i < timePlatforms.length; i++) {
      var initState = platformInitialStates[i];
      var tp = timePlatforms[i];

      tp.x = initState.x;
      tp.y = initState.y;
    }*/



}
