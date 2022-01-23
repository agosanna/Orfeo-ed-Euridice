
function preload() {

    backgroundpreload();
    hudpreload();
    portalepreload();

    /*PLAYER*/
    game.load.spritesheet('orfeo', 'assets/animazioni-orfeo.png', 80, 80);
    game.load.spritesheet('euridice', 'assets/animazioni-euridice.png', 80, 80);
    game.load.spritesheet('spiritello', 'assets/magic/spiritelloGreen.png', 32, 32);
    game.load.spritesheet('spiritelloE', 'assets/magic/spiritelloRed.png', 32, 32);
    game.load.spritesheet('bubbles48', 'assets/lava/bubbles48.png', 48, 48);
    game.load.spritesheet('bubbles24', 'assets/lava/bubbles24.png', 24, 24);
    game.load.spritesheet('wisp_Jump', 'assets/magic/wisp_Jump.png', 32, 32);
    game.load.spritesheet('wisp_Rotate', 'assets/magic/wisp_Rotate.png', 32, 32);
    game.load.spritesheet('vita','assets/HUD/HP.png');

    game.load.script('BlurX', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/BlurX.js');
    game.load.script('BlurY', 'https://cdn.rawgit.com/photonstorm/phaser-ce/master/filters/BlurY.js');

    environmentpreload();
    environmentBoscopreload();
    holespreload();

}
