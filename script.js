window.onload = function () {
    var canvas = document.getElementById("SmokeWeedEveryday");
    var ctx = canvas.getContext("2d");
    var innerWidth = 1440;
    var innerHeight = 720;
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    var rapperArray = [];
    var imgrapper = ["./Rappers_faces/nas.png", "./Rappers_faces/biggie.png", "./Rappers_faces/jay_z.png", "./Rappers_faces/ice_cube.png", "./Rappers_faces/tupac.png", "./Rappers_faces/dr-dre.png", "./Rappers_faces/drake.png", "./Rappers_faces/kanye.png", "./Rappers_faces/ll-cool-j.png"]
    var imgrapperwidth = 100;
    var imgrapperheight = 100;


    for (var i = 0; i < imgrapper.length; i++) {

        var randomIndex = Math.floor(imgrapper.length * Math.random());
        var randomY = Math.floor(Math.random() * (canvas.height - 100));
        var randomX = Math.floor(Math.random() * (canvas.width - 100));
        rapperArray.push(new Rapper(imgrapper[i], randomX, randomY, imgrapperwidth, imgrapperheight));

    }
    
    var frameCounter = 0
    var speed = 2

    function updateCanvas() {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        frameCounter++;

        for (var i = 0; i < rapperArray.length; i++) {
            var rapper = rapperArray[i]
            //         ctx.drawImage(imgrapper[i], imgrapper[i].x, imgrapper[i].y, imgrapper[i].width, imgrapper[i].height);}

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
            //console.log(nas);
            ctx.drawImage(rapper.img, rapper.x, rapper.y, rapper.width, rapper.height)

        }


// Weed








//Track 





// Keyboard 




// Upload page 







        window.requestAnimationFrame(updateCanvas);
    }
    updateCanvas();
}


