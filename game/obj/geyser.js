function geysercreate(){

  geyserGroup = game.add.group()

  geyserGroup.create(4288, 256, 'geyser');
  geyserGroup.create(4416, 256, 'geyser');
  geyserGroup.create(4544, 256, 'geyser');
  geyserGroup.create(4672, 256, 'geyser');
  geyserGroup.create(9984, 290, 'geyser');
  geyserGroup.create(12800, 290, 'geyser');
  geyserGroup.create(14048, 308, 'geyser');
  geyserGroup.create(15664, 192, 'geyser');
  geyserGroup.create(16448, 276, 'geyser');
  geyserGroup.create(16576, 276, 'geyser');
  geyserGroup.create(16704, 276, 'geyser');

  game.physics.arcade.enable(geyserGroup);
  geyserGroup.setAll('body.immovable', true);

  geyserGroup.callAll('animations.add', 'animations', 'spring', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 10, false);

  geyserGroup.children[7].scale.x = 1.25;
  geyserGroup.children[7].scale.y = 1.5;
  geyserGroup.children[7].animations.add('spring7', [4, 5, 6, 7], 10, true);
  geyserGroup.children[7].animations.play('spring7');


  game.time.events.loop(Phaser.Timer.SECOND * 3, function geyserspring() {
    geyserGroup.children[0].animations.play('spring');
    geyserGroup.children[4].animations.play('spring');
    geyserGroup.children[5].animations.play('spring');
    geyserGroup.children[6].animations.play('spring');
    geyserGroup.children[8].animations.play('spring');
    game.time.events.add(Phaser.Timer.SECOND*0.5, function(){geyserGroup.children[1].animations.play('spring');}, this);
    game.time.events.add(Phaser.Timer.SECOND*0.5, function(){geyserGroup.children[9].animations.play('spring');}, this);
    game.time.events.add(Phaser.Timer.SECOND, function(){geyserGroup.children[2].animations.play('spring');}, this);
    game.time.events.add(Phaser.Timer.SECOND, function(){geyserGroup.children[10].animations.play('spring');}, this);
    game.time.events.add(Phaser.Timer.SECOND*1.5, function(){geyserGroup.children[3].animations.play('spring');}, this);
  }, this);



  basegeyser = game.add.group()

  basegeyser.create(4273, 554, 'basegeyser');
  basegeyser.create(4401, 554, 'basegeyser');
  basegeyser.create(4529, 554, 'basegeyser');
  basegeyser.create(4657, 554, 'basegeyser');

  game.physics.arcade.enable(basegeyser);
  basegeyser.setAll('body.immovable',true);

}



function geyserupdate(){

  //game.physics.arcade.collide(orfeo, basegeyser);

  game.physics.arcade.overlap(orfeo, geyserGroup, function() {gameOver_O();game.camera.unfollow(orfeo);
    console.log(orfeo.x)
    console.log(orfeo.y);});


  geyserGroup.children.forEach(function(ge){

    if (ge.frame === 0 || ge.frame === 13){
      ge.body.setSize(25, 30, 20, 280);}

    else if (ge.frame === 1){
      ge.body.setSize(25, 80, 20, 240);}

    else if (ge.frame === 2 || ge.frame === 12){
      ge.body.setSize(25, 150, 20, 170);}

    else if (ge.frame === 3 || ge.frame === 11){
      ge.body.setSize(25, 190, 20, 130);}

    else if (ge.frame === 4 || ge.frame === 10){
      ge.body.setSize(25, 240, 20, 80);}

    else if (ge.frame === 5 || ge.frame === 9){
      ge.body.setSize(25, 284, 20, 36);}

    else if (ge.frame === 6 || ge.frame === 8){
      ge.body.setSize(25, 296, 20, 24);}

    else if (ge.frame === 7){
      ge.body.setSize(25, 320, 20, 0);}

    else if (ge.frame === 14){
      ge.body.setSize(0, 0, 0, 330);}

  });

}
