var btn = document.querySelector(".btn");
var complete = document.querySelector(".complete");
// btn.addEventListener("click", function(){
//     console.log("Đăng ký sự kiện thành công");
    
// })


//Hàm sự kiện riêng biệt
var handleBtn = function(){
    console.log("Chúc mừng bạn đã là người may mắn cuối cùng sống sót");
    
}
btn.addEventListener("click", handleBtn);


// Dừng sự kiện handleBtn 
// (Phải có hàm sự kiện riêng biệt)
complete.addEventListener('click', function(){
    btn.removeEventListener('click',handleBtn);
})