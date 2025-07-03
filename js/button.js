// Event Object

var btn = document.querySelector('.btn');
// console.log(btn);

var isDown  = false;
var offsetX, offsetY;
btn.addEventListener('mousedown', function(e){
    // console.log(e);
    isDown = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    
})


document.addEventListener('mousemove', function(e){
    if(isDown){
        var clientX = e.clientX - offsetX - 10;
        var clientY = e.clientY - offsetY - 10 ;
        var css = {
            position : 'relative',
            top : clientY + 'px',
            left : clientX + 'px'

        }
        // console.log(css);
        Object.assign(btn.style,css);
    }
    console.log('đang kéo');
})



document.addEventListener('mouseup', function(e){

    isDown = false;    
})


