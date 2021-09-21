const lineX = document.querySelector('.lineX');
const lineY = document.querySelector('.lineY');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

function moveTarget(event) {
    var x = event.clientX;
    var y = event.clientY;

    lineY.style.left = `${x}px`;
    lineX.style.top = `${y}px`;

    target.style.left = `${x}px`;
    target.style.top = `${y}px`;

    tag.style.top = `${y}px`;
    tag.style.left = `${x}px`;
    tag.innerHTML = `${x}px, ${y}px`;
}

document.addEventListener("mousemove", (event) => {
    moveTarget(event);
}); 