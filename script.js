window.onload = function () {
    var canvas = document.getElementById("SmokeWeedEveryday");
    var ctx = canvas.getContext("2d");
    var innerWidth = 1440;
    var innerHeight = 720;
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    //borders 
    //;

    // todo Upload page 

    var snoop = new Rapper("./Rappers_faces/snoop.png", window.innerWidth - 100, window.innerHeight - 100, 100, 100);
    var weed = new Rapper("./Rappers_faces/weed.png", window.innerWidth - 100, window.innerHeight - 100, 100, 100)
    var rapperArray = [];
    var imgrapper = ["./Rappers_faces/nas.png", "./Rappers_faces/weed.png", "./Rappers_faces/biggie.png", "./Rappers_faces/jay_z.png", "./Rappers_faces/ice_cube.png", "./Rappers_faces/tupac.png", "./Rappers_faces/dr-dre.png", "./Rappers_faces/drake.png", "./Rappers_faces/kanye.png", "./Rappers_faces/ll-cool-j.png"]
    var imgrapperwidth = 100;
    var imgrapperheight = 100;
    // var gameOverNotify = document.querySelector('.game-over-notify')


    for (var i = 0; i < imgrapper.length; i++) {

        var randomIndex = Math.floor(imgrapper.length * Math.random());
        var randomY = Math.floor(Math.random() * (canvas.height - 100));
        var randomX = Math.floor(Math.random() * (canvas.width - 100));
        rapperArray.push(new Rapper(imgrapper[i], randomX, randomY, imgrapperwidth, imgrapperheight));

    }

    var frameCounter = 0
    var speed = 1

    // AUDIO
    var audio = new Audio('audio/track.mp3');
    // audio.preload = "metadata”;
    var weedTime = null;

    audio.onloadedmetadata = function () {
        console.log("Playing " + audio.src + ", for: " + audio.duration + "seconds.");
        audio.play();
        console.log("audio.duration", audio.duration)
        // todo real end time
        weedTime = audio.duration - 160;
        console.log("weedTime", weedTime)
    };

    function updateCanvas() {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        frameCounter++;

        for (var i = 0; i < rapperArray.length; i++) {
            var rapper = rapperArray[i]
            // ctx.draw(imgrapper[i], imgrapper[i].x, imgrapper[i].y, imgrapper[i].width, imgrapper[i].height);}

            //speed   
            if (frameCounter % 600 == 0) {
                console.log("increasing speed")
                rapper.speed += 3
            }

            rapper.x += rapper.dx * rapper.speed
            rapper.y += rapper.dy * rapper.speed

            // hits the left border
            if (rapper.x <= 0) {
                // change the X direction
                rapper.dx = - rapper.dx
            }
            // hits the right border
            if (rapper.rightBorder() >= canvas.width) {
                // change the X direction
                rapper.dx = - rapper.dx
            }
            // hits the top border
            if (rapper.y <= 0) {
                // change the Y direction
                rapper.dy = - rapper.dy
            }
            // hits the bottom border
            if (rapper.bottomBorder() >= canvas.height) {
                // change the Y direction
                rapper.dy = - rapper.dy
            }

            //rapperArray.push(rapper);
            //console.log(rapperArray);
            ctx.drawImage(rapper.img, rapper.x, rapper.y, rapper.width, rapper.height)
        }

        // if (weedTime && audio.currentTime > weedTime) {
        //     console.log('audio.currentTime', audio.currentTime, weedTime)
        //     console.log("weed time")
        //     ctx.drawImage(weedImage.img, weedImage.x, weedImage.y, 100, 100)
        // }

        console.log('audio.currentTime', audio.currentTime, weedTime)
        ctx.drawImage(snoop.img, snoop.x, snoop.y, snoop.width, snoop.height)


        window.requestAnimationFrame(updateCanvas);

        //ctx.strokeStyle = "green";
        //ctx.lineWidth = 10;
        //ctx.strokeRect(0, 0, 1390, 700)
    }
    updateCanvas();

    console.log("test");
    window.addEventListener("keydown", (e) => {
        console.log(e.keyCode);

        if (e.keyCode == 38) {
            console.log("You pressed UP!");
            snoop.y -= 10;
        } else if (e.keyCode == 40) {
            console.log("You pressed DOWN!");
            snoop.y += 10;
        } else if (e.keyCode == 37) {
            console.log("You pressed LEFT!");
            snoop.x -= 10;
        } else if (e.keyCode == 39) {
            console.log("You pressed RIGHT!");
            snoop.x += 10;
        }

    })
}



