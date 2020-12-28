/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
   if($(".swiper-container").hasClass("team-member-slider")){
       var swiper = new Swiper('.swiper-container',{
           slidesPerView:3,
           allowTouchMov: true,
           loop:true,
           centeredSlides:true,
           slidesToclickedslide:true,
           effect:"coverflow",
           grabcursor:true,
           autoplay:false,
           navigation:{
               nextEl:'.swiper-button-next',
               prevEl:'.swiper-button-prev',
           },
           coverflow:{
               rotate:0,
               stretch:100,
               depth:200,
               modifier:1,
               slideShadows:false
           },
           breakpoints:{
               767:{
                   slidesPerView:1,
                   centeredSlides:false,
                   effect:"slide",
               }
           }
       });
   } 
});

