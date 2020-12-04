var database, player, box, game, input, save, reset;

var playImg, settingImg, infoImg, backGui, boxImg, Font, acceptImg, matchbackground, ground;
var player1idle, player1attack, player1die, player1jump, player1run;
var player2idle, player2attack, player2die, player2jump, player2run;

var allPlayers, player1, player2, form2, players;

var playercount = 0;
var gamestate = 0;
var readyplayers = 0;

function preload() {
    playImg = loadImage("Gui/buttons/normal/play.png");
    settingImg = loadImage("Gui/buttons/normal/settings.png");
    infoImg = loadImage("Gui/buttons/normal/profile.png");
    backGui = loadImage("Gui/background1.png");
    boxImg = loadImage("Gui/frames/paused.png");
    Font = loadFont("characters/TXT/Christopher Done.ttf");
    acceptImg = loadImage("Gui/buttons/normal/accept.png");

    matchbackground = loadImage("backgroud/back.png");

    //player1 animation
    player1idle = loadAnimation("characters/PNG/1/idle1.png", "characters/PNG/1/idle2.png", "characters/PNG/1/idle3.png", "characters/PNG/1/idle4.png",
        "characters/PNG/1/idle5.png", "characters/PNG/1/idle6.png", "characters/PNG/1/idle7.png");

    player1run = loadAnimation("characters/PNG/1/run1.png", "characters/PNG/1/run2.png", "characters/PNG/1/run3.png", "characters/PNG/1/run4.png",
        "characters/PNG/1/run5.png", "characters/PNG/1/run6.png", "characters/PNG/1/run7.png")

    player1jump = loadAnimation("characters/PNG/1/jump1.png", "characters/PNG/1/jump2.png", "characters/PNG/1/jump3.png", "characters/PNG/1/jump4.png",
        "characters/PNG/1/jump5.png", "characters/PNG/1/jump6.png", "characters/PNG/1/jump7.png");

    player1attack = loadAnimation("characters/PNG/1/attack1.png", "characters/PNG/1/attack2.png", "characters/PNG/1/attack3.png", "characters/PNG/1/attack4.png",
        "characters/PNG/1/attack5.png", "characters/PNG/1/attack6.png", "characters/PNG/1/attack7.png");

    player1die = loadAnimation("characters/PNG/1/die1.png", "characters/PNG/1/die2.png", "characters/PNG/1/die3.png", "characters/PNG/1/die4.png",
        "characters/PNG/1/die5.png", "characters/PNG/1/die6.png", "characters/PNG/1/die7.png");

    //player2 animations
    player2idle = loadAnimation("characters/PNG/3/idle1.png", "characters/PNG/3/idle2.png", "characters/PNG/3/idle3.png", "characters/PNG/3/idle4.png",
        "characters/PNG/3/idle5.png", "characters/PNG/3/idle6.png", "characters/PNG/3/idle7.png");

    player2run = loadAnimation("characters/PNG/3/run1.png", "characters/PNG/3/run2.png", "characters/PNG/3/run3.png", "characters/PNG/3/run4.png",
        "characters/PNG/3/run5.png", "characters/PNG/3/run6.png", "characters/PNG/3/run7.png");

    player2attack = loadAnimation("characters/PNG/3/attack1.png", "characters/PNG/3/attack2.png", "characters/PNG/3/attack3.png", "characters/PNG/3/attack4.png",
        "characters/PNG/3/attack5.png", "characters/PNG/3/attack6.png", "characters/PNG/3/attack7.png");

    player2jump = loadAnimation("characters/PNG/3/jump1.png", "characters/PNG/3/jump2.png", "characters/PNG/3/jump3.png", "characters/PNG/3/jump4.png",
        "characters/PNG/3/jump5.png", "characters/PNG/3/jump6.png", "characters/PNG/3/jump7.png");

    player2die = loadAnimation("characters/PNG/3/die1.png", "characters/PNG/3/die2.png", "characters/PNG/3/die3.png", "characters/PNG/3/die4.png",
        "characters/PNG/3/die5.png", "characters/PNG/3/die6.png", "characters/PNG/3/die7.png");
}
function setup() {
    createCanvas(displayWidth, displayHeight);

    //database
    database = firebase.database();

    //ground
    ground = createSprite(displayWidth/2,displayHeight-10,displayWidth,20);
    ground.visible = true;
    ground.debug = true;

    //players
    player1 = createSprite(displayWidth, displayHeight);
    player1.addAnimation("1", player1idle);
    player1.addAnimation("2", player1run);
    player1.addAnimation("3", player1jump);
    player1.addAnimation("4", player1attack);
    player1.addAnimation("5", player1die);
    player1.scale = 0.25;
    player1.visible = false;
    player1.setcollider("rectangle",0,0,100,100);
    player2 = createSprite(displayWidth, displayHeight);
    player2.addAnimation("6", player2idle);
    player2.addAnimation("7", player2run);
    player2.addAnimation("8", player2jump);
    player2.addAnimation("9", player2attack);
    player2.addAnimation("10", player2die);
    player2.scale = 0.25;
    player2.visible = false;
    player2.setcollider("rectangle",0,0,100,100);

    //player
    player = new Player();

    //game object
    game = new Game();
    game.getstate();
    game.preStart();
}
function draw() {
    if (readyplayers === 2) {
        game.updatestate(2);
    }
    if (gamestate == 2) {
        game.play();
    }
}
function keyReleased(){
    if(player.index === 1 && keyCode === 39){
        player1.changeAnimation("1");
    }
    if(player.index === 2 && keyCode == 39){
        player2.changeAnimation("6");
    }
    if(player.index === 1 && keyCode == 37){
        player1.changeAnimation("1");
    }
    if(player.index === 2 && keyCode == 37){
        player2.changeAnimation("6");
    }
    return false;
}