class Form2 {
    constructor() {
        player.getreadyplayers();

        // play button
        this.playbutton = createImg("Gui/buttons/normal/play.png");
        this.playbutton.position(displayWidth / 2 + 350, displayHeight - 150);
        this.playbutton.size(100,100);

        // settings 
        this.setting = createImg("Gui/buttons/normal/settings.png");
        this.setting.position(displayWidth / 2 + 150, displayHeight - 150);
        this.setting.size(100,100);

        // Player Info
        this.info = createImg("Gui/buttons/normal/profile.png");
        this.info.position(displayWidth / 2 + 550, displayHeight - 150);
        this.info.size(100,100);
    }
    display() {
        background(backGui);
        this.playbutton.mousePressed(() => {
            readyplayers += 1;
            player.updatereadyplayers(readyplayers);
        })
    }
    hide() {
        this.playbutton.hide();
        this.setting.hide();
        this.info.hide();
    }
}