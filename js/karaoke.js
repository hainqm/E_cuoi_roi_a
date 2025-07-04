var progressBar = document.querySelector('.progress-bar');
var progress = progressBar.querySelector('.progress');
var progressSpan = progress.querySelector('span')


//lấy chiều dài của progress
var handleProgressWidth = function(value){
    progress.style.width = `${value}%`;
}
var isDown = false;
var offsetX, value;
var progressBarWidth = progressBar.clientWidth;//Tính chiều dài progressBar


progressBar.addEventListener('mousedown', function(e){
    isDown = true
    offsetX = e.offsetX;
    // console.log(offsetX);
    value = ( offsetX * 100 ) / progressBarWidth;
    handleProgressWidth(value);
    // console.log(value);

    audio.currentTime = (value * audio.duration) / 100 ;
})

//chống nội bọt 
progressSpan.addEventListener('mousedown', function(e){
    e.stopPropagation();
    
})


// chống giật giật
progressSpan.addEventListener('mousemove', function(e){
    e.stopPropagation();
    
})





document.addEventListener('mousemove', function(e){
    if (isDown) {
        var progressBarLeft = progressBar.getBoundingClientRect().left;// Khoảng cách từ mép trái trình duyệt đến phần tử
        var cursorX = e.clientX - progressBarLeft; // vị trí con trỏ trong progressBar
        if (cursorX < 0) cursorX = 0;
        if (cursorX > progressBarWidth) cursorX = progressBarWidth;

        value = (cursorX * 100) / progressBarWidth;
        handleProgressWidth(value);
        

        // console.log(`value: ${value}%`);
        audio.currentTime = (value * audio.duration) / 100 ;

    }
});


document.addEventListener('mouseup',function(e){
    isDown = false;
   
})




//Xử lý audio phát nhạc

var audio = document.querySelector('.audio');
var time = document.querySelectorAll('.time');
var test = document.querySelector('.test');
// console.log(audio);





//Tính độ dài nhạc
var getTime = function(seconds){
    var minute = Math.floor(seconds / 60);
    var second = Math.floor(seconds - (minute * 60));

    return( minute < 10 ?`0${minute}`:`${minute}`) + ':' + (second < 10 ?`0${second}`:`${second}`);
   
    
}

//lắng nghe sự kiện load nhạc
audio.addEventListener('loadeddata', function(){
    time[1].innerText = getTime(audio.duration);
    // console.log(audio.paused);
    
    
})

var controls = document.querySelector('.controls');
var btnControl = controls.querySelector('button');

var btnPlay = '<i class="fa-solid fa-play"></i>';
var btnPause = '<i class="fa-solid fa-pause"></i>';

btnControl.addEventListener('click', function(){
    
    if(audio.paused ){
        btnControl.innerHTML = btnPause;
        audio.play();
        console.log(audio.paused);
        
    }else{
        btnControl.innerHTML = btnPlay;
        audio.pause();
        console.log(audio.paused);
        
    }

   
    
})


//cập nhật thời gian chạy
audio.addEventListener('timeupdate', function(){
    time[0].innerText = getTime(audio.currentTime);//
    //Lấy ra tỉ lệ % dựa vào currentTime và duration
    var value = (audio.currentTime * 100) / audio.duration;
    console.log(value);
    handleProgressWidth(value);
    
})
