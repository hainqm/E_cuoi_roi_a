var itemActive = document.querySelector('.items .active');
var nextBtn = document.querySelector('.next');
var prevBtn = document.querySelector('.prev');
// console.log(items);
var firstItem = itemActive;
nextBtn.addEventListener('click', function(){
    var nextItem = itemActive.nextElementSibling;

    if(nextItem === null){
        nextItem = firstItem;
    }
    nextItem.classList.add('active');
    itemActive.classList.remove('active');
    itemActive = nextItem;
    console.log(itemActive);
    
    
    
})


var lastItem = document.querySelector('.items');
console.log(lastItem);

prevBtn.addEventListener('click', function(){
    var prevItem = itemActive.previousElementSibling;

    if(prevItem === null){
        prevItem = lastItem;
    }
    prevItem.classList.add('active');
    itemActive.classList.remove('active');
    itemActive = prevItem;
    console.log(prevItem);
    
    
    
})