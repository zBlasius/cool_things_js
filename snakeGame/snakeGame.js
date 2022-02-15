
window.onload = () => {
    let stage = document.getElementById('stage');
    let view = stage.getContext('2d'); // here will be all graphic part
    document.addEventListener("keydown", keyPush) // toda vez que uma tecla for pressionada, call keyPush

    setInterval(game, 1000 / 15);

    const vel = 1;

    let velX = velY = 0;
    let pointX = pointY = 10;

    let rectArea = 20;
    let rectQtd = 20;

    let appleX = appleY = 19;

    let trail = [];
    tail = 5;

    function game() {
        pointX += velX;
        pointY += velY;

        if (pointX < 0) {
            pointX = rectQtd -1;
        }

        if (pointX > rectQtd - 1) {
            pointX = 0;
        }

        if (pointY < 0) {
            pointY = rectQtd - 1;
        }

        if (pointY > rectQtd - 1) {
            pointY = 0;
        }

        view.fillStyle = "green";
        view.fillRect(0, 0, stage.width, stage.height);

        view.fillStyle = 'red'
        view.fillRect(appleX * 20, appleY * 20, rectArea, rectArea);

        view.fillStyle = "gray";
        for (let i = 0; i < trail.length; i++) {
            view.fillRect(trail[i].x * rectArea, trail[i].y * rectArea, rectArea -1 , rectArea -1);
            if (trail[i].x == pointX && trail[i].y == pointY) {
                velX = velY = 0;
                tail = 5;
                pointX = pointY = 10
            }
        }
        trail.push({ x: pointX, y: pointY })

        while (trail.length > tail) {
            trail.shift();
        }

        if (appleX == pointX && appleY == pointY) {
            tail ++;
            appleX = Math.floor(Math.random() * rectQtd)
            appleY = Math.floor(Math.random() * rectQtd)
        }
    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 38: // up
                velX = 0;
                velY = -vel;
                break;

            case 39: // right
                velX = vel;
                velY = 0;
                break;

            case 40: // down
                velX = 0;
                velY = vel
                break;

            case 37: // left
                velX = -vel;
                velY = 0;
                break;

            default:
                break;
        }
    }

}