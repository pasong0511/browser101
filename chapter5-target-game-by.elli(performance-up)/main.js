const horizontal = document.querySelector('.horizontal');
const vertical = document.querySelector('.vertical');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');



addEventListener("load", () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeight = targetRect.height / 2;

    document.addEventListener("mousemove", (event) => {
        const x = event.clientX;
        const y = event.clientY;
    
        vertical.style.transform = `translateX(${x}px)`;  //top, left를 이용하면 layout부터 다시 그리기 때문에 성능이 낮아지므로 transform를 이용하는것이 더 효율성이 높다
        horizontal.style.transform = `translateY(${y}px)`;
    
        target.style.transform = `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`;
    
        tag.style.transform = `translate(${x+20}px, ${y+20}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    }); 
}); 