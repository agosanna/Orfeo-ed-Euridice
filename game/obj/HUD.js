function hudpreload(){

  /*MENU PAUSA*/
  game.load.image('pausatasto', 'assets/Pause/pausa_bottone.png');
  game.load.image('pausasfondo', 'assets/Pause/pausa_menu.png');

  game.load.image('riprendi', 'assets/Pause/riprendi.png');
  game.load.image('ricomincia', 'assets/Pause/ricomincia.png');
  game.load.image('comandi', 'assets/Pause/comandi.png');
  game.load.image('menu_princ', 'assets/Pause/menu_princ.png');
  game.load.image('menu_comandi', 'assets/Pause/menu_comandi.png');

  /*TESTI HUD*/
  game.load.image('text0', 'assets/HUD/text0.png');
  game.load.image('text1', 'assets/HUD/text1.png');
  game.load.image('text2', 'assets/HUD/text2.png');
  game.load.image('text3', 'assets/HUD/text3.png');
  game.load.image('text4', 'assets/HUD/text4.png');
  game.load.image('text5', 'assets/HUD/text5.png');
  game.load.image('text6', 'assets/HUD/text6.png');
  game.load.image('text7', 'assets/HUD/text7.png');
  game.load.image('text8', 'assets/HUD/text8.png');
  game.load.image('text9', 'assets/HUD/text9.png');
  game.load.image('text10', 'assets/HUD/text10.png');
  game.load.image('text11', 'assets/HUD/text11.png');

  /*RENDER*/
  game.load.image('vittoria', 'assets/finali/vittoria.jpg');
  game.load.image('haiVinto', 'assets/finali/vittoria_con_txt.jpg');
  game.load.image('sconfitta', 'assets/finali/sconfitta.jpg');
  game.load.image('haiPerso', 'assets/finali/sconfitta_con_txt.jpg');

  /*INGOMBRI TASTI RENDER*/
  game.load.image('ingombro_menù', 'assets/Pause/menù.png');
  game.load.image('ingombro_ricarica', 'assets/Pause/ricarica.png');


  }





function hudcreate(){


      // Create a label to use as a button
    pause_label = game.add.sprite(970, 16, 'pausatasto');
    pause_label.inputEnabled = true;
    pause_label.input.useHandCursor = true;
    pause_label.fixedToCamera = true
    pause_label.scale.x = 0.25;
    pause_label.scale.y = 0.25;



     menu = game.add.sprite(w/2, h/2, 'pausasfondo');
     menu.anchor.setTo(0.5, 0.5);
     menu.fixedToCamera = true;
     menu.visible = false;

     menu_comandi = game.add.sprite(w/2, h/2, 'menu_comandi');
     menu_comandi.anchor.setTo(0.5, 0.5);
     menu_comandi.fixedToCamera = true;
     menu_comandi.visible = false;








     pause_label.events.onInputUp.add(function () {


         game.paused = true;

         menu.visible = true;

         text.setAll('alpha', 0)

         life.setAll('visible', false)



        //glow_over.setAll('visible', true);



     });


     game.input.onDown.add(unpause, self);

     function unpause(event){
         if(game.paused){

           //RIPRENDI
             var x1 = 720, x2 = 915,
                 y1 = 307, y2 = 351;
             if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){
                 var x = event.x - x1,
                     y = event.y - y1;
                 menu.visible=false;
                 menu_comandi.visible = false;
                 game.paused = false;
                 text.setAll('alpha', 1)
                 life.setAll('visible', true)
             }

          //RICOMINCIA
              var y3 = 396;
             if(event.x > x1 && event.x < x2 && event.y > y2 && event.y < y3 ){
                 var x = event.x - x1,
                     y = event.y - y2;

                     window.location.href = "game.html"


            }
        //MENUCOMANDI
            var  y4 = 440;
            if(event.x > x1 && event.x < x2 && event.y > y3 && event.y < y4 ){
                var x = event.x - x1,
                    y = event.y - y3;

                if (menu.visible===true && menu_comandi.visible===false){
                  menu_comandi.visible = true;
                  menu.visible = false;
                }


           }

        //MENU PRINC
           var  y5 = 582, y6= 626;
           if(event.x > x1 && event.x < x2 && event.y > y5 && event.y < y6 ){
               var x = event.x - x1,
                   y = event.y - y5;
                   window.location.href = "home.html"

          }

         }
     }



      /*LIFE*/

      life = game.add.group()

      life.create(20, 20,'vita')
      life.create(70, 20,'vita')
      life.create(120, 20,'vita')
      life.create(170, 20,'vita')
      life.create(220, 20,'vita')

      life.setAll('fixedToCamera', true)
      life.setAll('scale.y', 0.25)
      life.setAll('scale.x', 0.25)



      /*TEXT*/

      text = game.add.group()

      text.create(150, 240, 'text0')
      text.create(444, 596, 'text1')
      text.create(860, 596, 'text2')
      text.create(1664, 596, 'text3')
      text.create(5668, 380, 'text4')
      text.create(5566, 570, 'text5')
      text.create(6796, 596, 'text6')
      text.create(11404, 596, 'text7')
      text.create(27952, 596, 'text8')
      text.create(27952, 596, 'text9')
      text.create(23994, 596, 'text10')
      text.create(22944, 680, 'text11')

      game.physics.arcade.enable(text);

      text.setAll('scale.x', 0.75)
      text.setAll('scale.y', 0.75)

      text.children[1].visible = false;
      text.children[2].visible = false;
      text.children[3].visible = false;
      text.children[5].visible = false;
      text.children[6].visible = false;
      text.children[7].visible = false;
      text.children[9].visible = false;
      text.children[10].visible = false;



      game.time.events.add(Phaser.Timer.SECOND*5, function(){
        text.children[1].visible = true;
        text.children[2].visible = true;
        orfeo.body.moves = true;
      });

      game.time.events.add(Phaser.Timer.SECOND*8, function(){
        text.children[0].visible = false;
      });


      vittoria = game.add.sprite(0, 0, 'vittoria')
      vittoria.alpha = 0;
      vittoria.fixedToCamera = true;
      mytween3 = game.add.tween(vittoria).to( { alpha: 1 }, 2000, "Linear", true);
      mytween3.pause();



      haiVinto = game.add.sprite(0, 0, 'haiVinto')
      haiVinto.alpha = 0;
      haiVinto.fixedToCamera = true;
      mytween4 = game.add.tween(haiVinto).to( { alpha: 1 }, 2000, "Linear", true);
      mytween4.pause();






      sconfitta = game.add.sprite(0, 0, 'sconfitta')
      sconfitta.alpha = 0;
      sconfitta.fixedToCamera = true;



      haiPerso = game.add.sprite(0, 0, 'haiPerso')
      haiPerso.alpha = 0;
      haiPerso.fixedToCamera = true;

mytween = game.add.tween(sconfitta).to( { alpha: 1 }, 1000, "Linear", true);
mytween.pause();

mytween2 = game.add.tween(haiPerso).to( { alpha: 1 }, 2000, "Linear", true);
mytween2.pause();


tastiRender = game.add.group()

  ingombro_menù = tastiRender.create(452, 457, 'ingombro_menù');
  ingombro_ricarica = tastiRender.create(494, 539, 'ingombro_ricarica');

tastiRender.setAll('alpha', 1);
tastiRender.setAll('visible', false);
tastiRender.setAll('inputEnabled', true);



  ingombro_menù.inputEnabled = false;
  ingombro_ricarica.inputEnabled = false;


  ingombro_menù.input.useHandCursor = true;
  ingombro_ricarica.input.useHandCursor = true;
  ingombro_menù.fixedToCamera = true
  ingombro_ricarica.fixedToCamera = true

  ingombro_menù.events.onInputDown.add(tornaMenu, this);

  ingombro_ricarica.events.onInputDown.add(rigioca, this);

}



function tornaMenu(){
 window.location.href = "home.html"
}

function rigioca(){
 window.location.href = "game.html"
}

function hudupdate(){


if (gameOverRender === true){

mytween.resume()
game.time.events.add(Phaser.Timer.SECOND*3, function(){  mytween2.resume()
  tastiRender.setAll('visible', true);
  tastiRender.setAll('alpha', 0);
  tastiRender.setAll('inputEnabled', true);

})
}




if (orfeo.x > 5300 && orfeo.x < 5800){
  game.time.events.add(Phaser.Timer.SECOND*6, function(){
    text.children[4].visible = false;
    text.children[5].visible = true;
  })}

if (euridice.x > 28300 && switchCounter === 1){
  game.time.events.add(Phaser.Timer.SECOND*4, function(){
    text.children[8].visible = false;
    text.children[9].visible = true;
})}








//  if (game.paused && gameOverRender === true){
  //  tween0001.resume();
  //}

/*  glow_over.children.forEach(function(gl){

    if (gl.input.pointerOver())
        {
            gl.alpha = 1;
        }
        else
        {
            gl.alpha = 0;
        }

  });*/

/*if (orfeo.x > 5632 && tutorial === true){

    orfeo.body.moves = false
    //game.camera.follow(text.children[8], Phaser.Camera.FOLLOW_LOCKON, 0.03, 0.03);

    game.time.events.add(Phaser.Timer.SECOND*3, function(){
  //  game.camera.follow(orfeo, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    text.children[2].visible = true;
    text.children[8].visible = false;
    orfeo.body.moves = true;
    tutorial = false;
    }, this);


}*/



}
