$('#home-slider').slick({
autoplay : false,
speed : 800,
lazyload : 'progressive',
arrows : true,
dots: false,
prevArrow :'<div class="slick-nav prev-arrow"><i class=" fa fa-chevron-right"</div>',
nextArrow :'<div class="slick-nav next-arrow"><i class=" fa fa-chevron-Left"</div>',
resposive:[
{
    breakpoint : 992,
    settings :{
dots:true,
arrows:false,


    }



}
]


}).slickAnimation();
$(".slick-nav").on("click touch",function(e){
e.preventDefault();
var arrow = $(this);


if(!arrow.hasClass('animate')){
arrow.addClass('animate');
setTimeout(()=>{
arrow.removeclass('animate');


},1600);





}
})