
document.addEventListener('DOMContentLoaded', () => { // when load page

    const brush = {
        active: false,
        moving: false,
        pos: { x: 0, y: 0 },
        previewPos: null
    }

    const view = document.querySelector('#tela')
    const context = view.getContext('2d')

    view.width = 700;
    view.height = 500;

    const drawLine = (line) => {

        context.beginPath();
        context.moveTo(line.previewPos.x, line.previewPos.y)
        context.lineTo(line.pos.x, line.pos.y)
        context.stroke();
    }

    view.onmousedown = (event) => { brush.active = true }
    view.onmouseup = (event) => { brush.active = false }
    view.onmousemove = (event) => { brush.pos.x = event.clientX, brush.pos.y = event.clientY, brush.moving = true }

    const cycle = () => {

        if (brush.moving && brush.active && brush.previewPos) {
            drawLine({ pos: brush.pos, previewPos: brush.previewPos });
            brush.moving = false;
        }

        brush.previewPos = { x: brush.pos.x, y: brush.pos.y }
        setTimeout(cycle, 10)
    }

    cycle()
})
//drawLine({previewPos:{x:10, y:10}, pos:{x:350, y:250}})