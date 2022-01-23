function portalepreload(){

  game.load.image('gradino1', 'assets/portale/portale_gradinobasso.png');
  game.load.image('gradino2', 'assets/portale/gradino_secondo.png');
  game.load.image('portale', 'assets/portale/Portale_sup.png');

};

  function portalecreate() {

  gradino_1 = game.add.sprite(18691 + 28 , 679, 'gradino1');
  gradino_2 = game.add.sprite(18817 + 28, 665, 'gradino2' );
  portale = game.add.sprite(18781 + 28, 115, 'portale' );


};
