// console.log("main.js")

$(function(){
    $('.card').hover(function(){
        $(this).css('background','rgb(72, 159, 230)');
        $(this).css('color','white');

    },function(){
        $(this).css('background','white');
        $(this).css('color','black');
    });
});