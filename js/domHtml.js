// DOM Html

// 1. Lấy nội dung thẻ Html
// content.innerHTML
// content.innerText
// content.textContent
// content.outerHtml

//2. Thay đổi nội dung cho thẻ HTML


var content = document.querySelector('.content');
var btn = document.querySelector('.btn');
var result = document.querySelector('.result');


var count = 0;
btn.onclick = function(){
    
    count ++;
    console.log(count);
    if(count % 2 !== 0){
        result.innerHTML = content.innerHTML;
        content.innerHTML = "";
        btn.innerHTML = "Lên";
    }else{
        result.innerHTML = "";
        content.innerHTML = `<h1>Chào mừng bạn đến với bình nguyên vô tận</h1>
        <h2>Kẻ mạnh không phải lúc nào cũng chiến thắng mà kẻ chiến thắng mới là kẻ mạnh</h2>`; 
        btn.innerHTML = "Xuống";

    }
    
}