//MYTWEEN
var mytween
var mytween2
var mytween3
var mytween4

//  PLAYER
var orfeo;
var euridice;
var current = 0;
var spiritello;
var life1, life2, life3;
var immortal = false;
var switchEnable = false
var switchCounter = 0;
var checkPoint_O = {x:480, y:-100}
var checkPoint_E = {x:28352, y:208}

var together = false;

// PAUSE MENU
var menu;
var pause_label;
var w = 1024;
var h = 768;
var pausa = false;
var tutorial = true;
var gameOverRender = false;

var sconfitta
var haiPerso
var vittoria
var haiVinto
var finali


//INPUT
var cursors;
var jumpButton;
var e;
var c;



// AZIONI

var maxJump = 1
var jump;
var canDash = false;
var dash = false;
var go = true
var back = true
var moveE = false
var cut = false;
var dieE = false
var die = false;
var moveObj = false;
var runE = true;
var runO = true;
buttonpressed = false;



// WILLOWISPS
var wisp_Rotate;
var wisp_Jump;



// BACKGROUND
var inf_sky_a;
var inf_sky_b;
var inf_hills_a;
var inf_hills_b;
var inf_mountains_a;
var inf_mountains_b;
var inf_mountains2_a;
var inf_mountains2_b;
var inf_arch_a;
var inf_details_a;
var inf_details_b;
var inf_cave_b;
var inf_clouds_a;
var inf_clouds_b;



// ENVIRONMENT
var moveplatforms;
var horMovePlatforms
var timePlatforms;
var platforms;
var floor;
var lava;
var stala;
var geyserGroup;



// ENVIRONMENT BOSCO
var floorB;
var platformsB;
var movable;
var water;
var waterfall;
var thorns;
var falce;



function create() {

    game.world.setBounds(0,0,28672,768);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.tweens.frameBased = true;


    backgroundcreate()


    /*ORFEO*/

    orfeo = game.add.sprite(480, 500, 'orfeo');

    game.physics.arcade.enable(orfeo);
    game.camera.follow(orfeo, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

    orfeo.body.velocity.y = 0;
    orfeo.body.moves = false;
    orfeo.body.setSize(32, 70, 25, 10)
    orfeo.body.collideWorldBounds = true;
    orfeo.body.gravity.y = 1500;
    orfeo.x = checkPoint_O.x;
    orfeo.y = checkPoint_O.y;
    orfeo.lifes = 5
/*ORFEO ANIMATIONS*/
    orfeo.animations.add('base', [10], 20, true);
    orfeo.animations.add('rotateLeft', [35, 34, 33, 32, 31, 30, 29, 28, 27], 30, false);
    orfeo.animations.add('rotateRight', [18, 19, 20, 21, 22, 23, 24, 25, 26], 30, false);
    orfeo.animations.add('left', [7, 6, 5, 4, 3, 2, 1], 20 , false);
    orfeo.animations.add('right', [11, 12, 13, 14, 15, 16, 17], 20, false);
    orfeo.animations.add('jumpRight', [46], 10, false);
    orfeo.animations.add('jumpLeft', [41], 10, false);
    orfeo.animations.add('dieRight', [54, 55, 56, 57, 58, 59, 60, 61, 62], 10, false);
    orfeo.animations.add('dieLeft', [71, 70, 69, 68, 67, 66, 65, 64, 63], 10, false);

    orfeo.animations.play('base')


    /*EURIDICE*/

    euridice = game.add.sprite(0, 0, 'euridice');
    euridice.x = checkPoint_E.x;
    euridice.y = checkPoint_E.y;
    game.physics.arcade.enable(euridice);
    euridice.body.setSize(33, 71, 25, 10)
    euridice.body.collideWorldBounds = true;
    euridice.body.gravity.y = 1500;

    euridice.body.moves = false;

/*EURIDICE ANIMATIONS*/
    euridice.animations.add('base', [8], 20, true);
    euridice.animations.add('left', [7, 6, 5, 4, 3, 2, 1], 20 , false);
    euridice.animations.add('right', [12, 13, 14, 15, 16, 17, 18], 20, false);
    euridice.animations.add('moveLeft', [31, 32, 33, 34, 35, 36, 37], 20, false);
    euridice.animations.add('moveRight', [27, 26, 25,24, 23, 22, 21], 20, false);
    euridice.animations.add('cutLeft', [59, 58, 57, 56, 55, 54, 53, 52, 51, 50], 20, false);
    euridice.animations.add('cutRight', [40, 41, 42, 43, 44, 45, 46, 47, 48, 49], 20, false);
    euridice.animations.add('jumpRight', [61], 10, false);
    euridice.animations.add('jumpLeft', [62], 10, false);
    euridice.animations.add('dieRight', [70, 71, 72, 73, 74, 75, 76, 77], 10, false);
    euridice.animations.add('dieLeft', [87, 86, 85, 84, 83, 82, 81, 80, 81], 10, false);

/*SPIRITELLO ANIMATIONS*/
    spiritelloE = game.add.sprite(0, 0,'spiritelloE')
    spiritelloE.animations.add('yellow', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
    spiritelloE.animations.add('red', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
    game.physics.arcade.enable(spiritelloE);
    spiritelloE.animations.play('yellow')

    euridice.animations.play('base');



    magicCreaturescreate()


/*WILLOWISPS*/


    wisp_Jump = game.add.sprite(7064, 508, 'wisp_Jump');
    wisp_Jump.animations.add('glow_Jump', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10, true);
    game.physics.arcade.enable(wisp_Jump);
    wisp_Jump.animations.play('glow_Jump');

    wisp_Rotate = game.add.sprite(11616, 508, 'wisp_Rotate');
    wisp_Rotate.animations.add('glow_Rotate', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 10, true);
    game.physics.arcade.enable(wisp_Rotate);
    wisp_Rotate.animations.play('glow_Rotate');








    geysercreate();
    environmentcreate();
    environmentBoscocreate();
    holescreate();
    portalecreate();
    hudcreate();



    /*CONTROLS*/

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    /*changeButton*/ e = game.input.keyboard.addKey(Phaser.Keyboard.E);
    ///*changeButton*/ o = game.input.keyboard.addKey(Phaser.Keyboard.O);
    c = game.input.keyboard.addKey(Phaser.Keyboard.C);

    //orfeo.x = 17075;
    //orfeo.x = 5700;
    //euridice.x = 20288;
}
