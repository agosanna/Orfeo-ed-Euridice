function holespreload(){
  game.load.image('bucosx', 'assets/magic/buco_left.png');
  game.load.image('bucodx', 'assets/magic/buco_right.png');
  game.load.image('bosco_light', 'assets/sfondo bosco/bosco_light.png');
}



function holescreate(){
  holes = game.add.group()

  holeRight1_1 = holes.create(23438, 544, 'bucodx');
  holeLeft1_2 = holes.create(22655, 576, 'bucosx');
  holeLeft2_1 = holes.create(22655, 384, 'bucosx');
  holeLeft2_2 = holes.create(22655, 64, 'bucosx');
  holeRight3_1 = holes.create(23420, 64, 'bucodx');
  holeRight3_2 = holes.create(22558, 480, 'bucodx');
  holeLeft4_1 = holes.create(21600, 480, 'bucosx');
  holeRight4_2 = holes.create(21502, 480, 'bucodx');
  holeLeft5_1 = holes.create(21600, 192, 'bucosx');
  holeRight5_2 = holes.create(21502, 192, 'bucodx');
  holeLeft6_1 = holes.create(21600, 32, 'bucosx');
  holeRight6_2 = holes.create(21502, 32, 'bucodx');
  holeLeft7_1 = holes.create(20386, 96, 'bucosx')
  holeRight7_2 = holes.create(20290, 608, 'bucodx')
  grottasx = holes.create (17342, 82, 'grottasx');
  grottadx = holes.create (17342, 594, 'grottadx');

  game.physics.arcade.enable(holes);
  holes.setAll('body.immovable', true);

  bosco_light = game.add.sprite(20480, 0, 'bosco_light');
}



function holesupdate(){

  //hole1
  game.physics.arcade.collide(euridice, holeRight1_1, function(){
    if (go === true){
    euridice.y = 592
    euridice.x = 22676
    back = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){back = true});
    }
  });
  game.physics.arcade.collide(euridice, holeLeft1_2, function(){
    if (back ===true){
    euridice.y = 560
    euridice.x = 23400
    go = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){go = true});
    }
  });

  //hole2
  game.physics.arcade.collide(euridice, holeLeft2_1, function(){
    if (go === true){
    euridice.y = 80
    euridice.x = 22676
    back = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){back = true});
    }
  });
  game.physics.arcade.collide(euridice, holeLeft2_2, function(){
    if (back ===true){
    euridice.y = 400
    euridice.x = 22676
    go = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){go = true});
    }
  });


  //hole3
  game.physics.arcade.collide(euridice, holeRight3_1, function(){
    if (go === true){
    euridice.y = 496
    euridice.x = 22500
    back = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){back = true});
    }
  });
  game.physics.arcade.collide(euridice, holeRight3_2, function(){
    if (back ===true){
    euridice.y = 80
    euridice.x = 23342
    go = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){go = true});
    }
  });


  //hole4
  game.physics.arcade.collide(euridice, holeLeft4_1, function(){
    if (go === true){
    euridice.y = 496
    euridice.x = 21484
    back = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){back = true});
    }
  });
  game.physics.arcade.collide(euridice, holeRight4_2, function(){
    if (back ===true){
    euridice.y = 496
    euridice.x = 21620
    go = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){go = true});
    }
  });


  //hole5
  game.physics.arcade.collide(euridice, holeLeft5_1, function(){
    if (go === true){
    euridice.y = 208
    euridice.x = 21484
    back = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){back = true});
    }
  });
  game.physics.arcade.collide(euridice, holeRight5_2, function(){
    if (back ===true){
    euridice.y = 208
    euridice.x = 21620
    go = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){go = true});
    }
  });


  //hole6
  game.physics.arcade.collide(euridice, holeLeft6_1, function(){
    if (go === true){
    euridice.y = 48
    euridice.x = 21484
    back = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){back = true});
    }
  });
  game.physics.arcade.collide(euridice, holeRight6_2, function(){
    if (back ===true){
    euridice.y = 48
    euridice.x = 21620
    go = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){go = true});
    }
  });


  game.physics.arcade.collide(euridice, holeLeft7_1, function(){
    if (go === true){
    euridice.y = 624
    euridice.x = 20270
    back = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){back = true});
    }
  });
  game.physics.arcade.collide(euridice, holeRight7_2, function(){
    if (back ===true){
    euridice.y = 112
    euridice.x = 20402
    go = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){go = true});
    }
  });

  game.physics.arcade.collide(orfeo, grottasx, function(){
    if (go ===true){
    orfeo.y = 623
    orfeo.x = 17440
    back = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){back = true});
    }
  });

  /*game.physics.arcade.collide(orfeo, grottasx, function(){
    if (back ===true){
    orfeo.y = 623
    orfeo.x = 17440
    go = false;
    game.time.events.add(Phaser.Timer.SECOND*1, function(){go = true});
    }
  });*/
}
