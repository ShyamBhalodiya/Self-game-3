class Game {
    constructor() {
        this.input = null;
        this.save = null;
        this.text = null;
        this.greeting = null;
    }
    getstate() {
        database.ref("gamestate").on("value", (data) => {
            gamestate = data.val();
        });
    }
    updatestate(state) {
        database.ref("/").update({
            gamestate: state
        })
    }
    preStart() {
        clear();
        background(backGui);

        var form = new Form();
        form.display();

    }
    start() {
        clear();
        form2 = new Form2();
        form2.display();

        players = [player1, player2];
    }

    play() {
        clear();
        form2.hide();
        background(matchbackground);
        player1.visible = true;
        player2.visible = true;
        
        player1.debug = true;
        player2.debug = true;
        player1.collide(ground);
        player2.collide(ground);
        var index = 0;
        Player.getplayer();
        drawSprites();
        for (var plr in allPlayers) {
            index = index + 1;
            var x = 500 - allPlayers[plr].distance;
            var y = displayHeight - 200;

            players[index - 1].x = x;
            players[index - 1].y = y;

            players[index - 1].y += 20;
            players[index - 1].collide(ground);
            if (index === player.index) {
                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    if (player.index == 1) {
                        player1.changeAnimation("2");
                    }
                    if (player.index == 2) {
                        player2.changeAnimation("7");
                    }
                    player.distance -= 10
                    player.updateplayer();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    if (player.index == 1) {
                        player1.changeAnimation("2");
                    }
                    if (player.index == 2) {
                        player2.changeAnimation("7");
                    }
                    player.distance += 10
                    player.updateplayer();
                }
            }
        }
        
    }

    reset() {
        player.updatecount(0);
        game.updatestate(0);
        player.updatereadyplayers(0);
        player.removenode();
        location.reload(true);
    }
}