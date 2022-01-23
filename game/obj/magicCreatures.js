
function magicCreaturescreate(){

spiritello = game.add.sprite(0, 0,'spiritello')
spiritello.animations.add('yellow', [0, 1, 2, 3, 4, 5, 6, 7], 10, true);
spiritello.animations.add('green', [8, 9, 10, 11, 12, 13, 14, 15], 10, true);
spiritello.scale.x = 1;
spiritello.scale.y = 1;
game.physics.arcade.enable(spiritello);
spiritello.animations.play('yellow')



}
