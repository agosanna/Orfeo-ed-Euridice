function backgroundpreload(){

  game.load.image('inf_sky_a', 'assets/sfondo inferno/inf_sky_a.png');
  game.load.image('inf_sky_b', 'assets/sfondo inferno/inf_sky_b.png');
  game.load.image('inf_hills_a', 'assets/sfondo inferno/inf_hills_a.png');
  game.load.image('inf_hills_b', 'assets/sfondo inferno/inf_hills_b.png');
  game.load.image('inf_mountains_a', 'assets/sfondo inferno/inf_mountains_a.png');
  game.load.image('inf_mountains_b', 'assets/sfondo inferno/inf_mountains_b.png');
  game.load.image('inf_mountains2_a', 'assets/sfondo inferno/inf_mountains2_a.png');
  game.load.image('inf_mountains2_b', 'assets/sfondo inferno/inf_mountains2_b.png');
  game.load.image('inf_arch_a', 'assets/sfondo inferno/inf_arch_a.png');
  game.load.image('inf_details_a', 'assets/sfondo inferno/inf_details_a.png');
  game.load.image('inf_details_b', 'assets/sfondo inferno/inf_details_b.png');
  game.load.image('inf_cave_b', 'assets/sfondo inferno/inf_cave_b.png');
  game.load.image('inf_clouds_a', 'assets/sfondo inferno/inf_clouds_a.png');
  game.load.image('inf_clouds_b', 'assets/sfondo inferno/inf_clouds_b.png');

  game.load.image('bosco_sky', 'assets/sfondo bosco/bosco_sky.png');
  game.load.image('bosco_clouds', 'assets/sfondo bosco/bosco_clouds.png');
  game.load.image('bosco_mountains', 'assets/sfondo bosco/bosco_mountains.png');
  game.load.image('bosco_trees', 'assets/sfondo bosco/bosco_trees.png');

  game.load.spritesheet('check_inf', 'assets/magic/check_inf.png', 64, 192);
  game.load.spritesheet('check_bosco', 'assets/magic/check_bosco.png', 64, 192);



//PORTALE
game.load.image('portale_sky', 'assets/portale/sfondo_portale.png');
game.load.image('portale_clouds', 'assets/portale/nuvole_portale.png');
game.load.image('portale_mountains', 'assets/portale/monti_portale.png');
game.load.image('portale_water', 'assets/portale/acqua_portale.png');
game.load.image('portale_floor', 'assets/portale/Portale_floor.png');
game.load.image('portale_forest', 'assets/portale/portale_bosco.png');
game.load.image('portale_costa', 'assets/portale/portale_terra-front.png');
game.load.image('portale_rocks', 'assets/portale/portale_rocce.png');




}


function backgroundcreate(){

  //PORTALE
    portale_sky = game.add.sprite(17408 , -3, 'portale_sky');
    portale_clouds = game.add.sprite(17408 , 0, 'portale_clouds');
    portale_mountains = game.add.sprite(17408 , 0, 'portale_mountains');
    portale_water = game.add.sprite(17408 , 0, 'portale_water');
    portale_floor = game.add.sprite(17408 , 703, 'portale_floor');
    game.physics.arcade.enable(portale_floor);
    portale_floor.body.immovable = true;
    portale_forest = game.add.sprite(17408 , 0, 'portale_forest');
    portale_costa = game.add.sprite(17408 , 0, 'portale_costa');
    portale_rocks = game.add.sprite(17408 , 0, 'portale_rocks');


  //BACKGROUND INFERNO

  background_inf = game.add.group()

  inf_sky_a = background_inf.create(0, 0, 'inf_sky_a');
  inf_sky_b = background_inf.create(7744, 0, 'inf_sky_b');
  inf_hills_a = background_inf.create(0, 0, 'inf_hills_a');
  inf_hills_b = background_inf.create(7744, 0, 'inf_hills_b');
  inf_mountains_a = background_inf.create(0, 0, 'inf_mountains_a');
  inf_mountains_b = background_inf.create(7744, 0, 'inf_mountains_b');
  inf_mountains2_a = background_inf.create(0, 0, 'inf_mountains2_a');
  inf_mountains2_b = background_inf.create(7744, 0, 'inf_mountains2_b');
  inf_arch_a = background_inf.create(0, 0, 'inf_arch_a');
  inf_details_a = background_inf.create(0, 0, 'inf_details_a');
  inf_details_b = background_inf.create(7744, 0, 'inf_details_b');
  inf_cave_b = background_inf.create(7744, 0, 'inf_cave_b');
  inf_clouds_a = background_inf.create(0, 0, 'inf_clouds_a');
  inf_clouds_b = background_inf.create(7744, 0, 'inf_clouds_b');

  background_inf.y = -8;
  background_inf.setAll('scale.y', 1.2);


  //BACKGROUND BOSCO

  bosco_sky = game.add.sprite(20480, 0, 'bosco_sky');
  bosco_clouds = game.add.sprite(20480, 0, 'bosco_clouds');
  bosco_mountains = game.add.sprite(20362, 0, 'bosco_mountains');
  bosco_trees = game.add.sprite(20480, 0, 'bosco_trees');
  bosco_light = game.add.sprite(20480, 0, 'bosco_light');




  //CHECKPOINT SIGNALS

  check_inf = game.add.group()

    check_inf.create(1664, 432, 'check_inf');
    check_inf.create(6848, 432, 'check_inf');
    check_inf.create(11400, 432, 'check_inf');

  check_inf.setAll('scale.x', 0.75);
  check_inf.setAll('scale.y', 0.75);

  check_inf.callAll('animations.add', 'animations', 'light', [1, 2, 3, 4, 5, 6, 7, 8], 10, true);


  check_bosco = game.add.group()

    check_bosco.create(27648, 208, 'check_bosco');
    check_bosco.create(25472, 304, 'check_bosco');
    check_bosco.create(23520, 192, 'check_bosco');

  check_bosco.setAll('scale.x', 0.75);
  check_bosco.setAll('scale.y', 0.75);

  check_bosco.callAll('animations.add', 'animations', 'lightB', [1, 2, 3, 4, 5, 6, 7, 8], 10, true);



}



function checkupdate(){

  if (orfeo.x > 1664){
    check_inf.children[0].animations.play('light');
    text.children[3].visible = true;
  }

  if (orfeo.x > 6848){
    check_inf.children[1].animations.play('light');
  }

  if (orfeo.x > 11400){
    check_inf.children[2].animations.play('light');
  }


  if (euridice.x < 27648){
    check_bosco.children[0].animations.play('lightB');
  }

  if (euridice.x < 25472){
    check_bosco.children[1].animations.play('lightB');
  }

  if (euridice.x < 23520){
    check_bosco.children[2].animations.play('lightB');
  }
}
