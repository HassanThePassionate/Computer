let circle = document.querySelector('.circle');
document.addEventListener('mousemove', ((dets)=>{
    circle.style.left = dets.x-7 + 'px';
    circle.style.top = dets.y-5 + 'px';
}))
document.addEventListener('mouseleave', (()=>{
    circle.style.display = 'none';
}))
document.addEventListener('mouseenter', (()=>{
    circle.style.display = 'block';
}))