/******************Add the story ******************/
const image_profile = [
    ['https://media.istockphoto.com/id/1289220545/pt/foto/beautiful-woman-smiling-with-crossed-arms.jpg?s=1024x1024&w=is&k=20&c=iMSziXUpBaq3p4Vi6jax7AITgRl4zWeWz3Av_TuJauw=','zineb'],
    ['https://media.istockphoto.com/id/2174201895/pt/foto/smiling-businesswoman-posing-in-modern-office.jpg?s=1024x1024&w=is&k=20&c=FB73v9PqI1bb6qcfFryqofp-9Dcdo8hhWxCuA71ivkg=','ikram'],
    ['https://pixabay.com/pt/images/download/soliejordan-couple-1194312_1920.jpg','amina'],
    ['https://pixabay.com/pt/images/download/bessi-child-817371_1920.jpg','amina'],
    ['https://pixabay.com/pt/images/download/bessi-child-817371_1920.jpg','amal'],
    ['https://pixabay.com/pt/images/download/engin_akyurt-model-2387582_1920.jpg','amine'],
    ['https://pixabay.com/pt/images/download/engin_akyurt-woman-4820864_1920.jpg','loy'],
    ['https://media.istockphoto.com/id/2099403180/pt/foto/laughing-yougn-businesswoman-standing-with-her-arms-crossed-against-an-office-wall.jpg?s=1024x1024&w=is&k=20&c=gxPHFJPgIU-_6Bwqu29_6D_EYrrDl_uefTX-cgVCeZE=','loy'],
    ['https://media.istockphoto.com/id/2177231592/pt/foto/smiling-asian-woman-posing-with-crossed-arms-looking-at-camera-on-blue-background.jpg?s=1024x1024&w=is&k=20&c=3eFViJWPcrprAZL8zKEBpLkG-0myVVyDijI7GGJ5G5M=','loy'],
    ['https://pixabay.com/pt/images/download/hongquan7749-girl-4809433_1920.jpg','loy'],
    ['https://pixabay.com/pt/images/download/engin_akyurt-girl-2322901_1920.jpg','loy'],
    ['https://pixabay.com/pt/images/download/alexklen-woman-3169726_1920.jpg','loy'],
    ['https://pixabay.com/pt/images/download/toan_le-friends-4922436_1920.jpg','loy'],
    ['https://pixabay.com/pt/images/download/pride1979-portrait-3292287_1920.jpg','loy'],
    ['https://pixabay.com/pt/images/download/henryphoto-woman-7577808_1920.jpg','loy'],
    ['https://pixabay.com/pt/images/download/henryphoto-woman-7577808_1920.jpg','loy'],
]
const story_container = document.querySelector('.owl-carousel.items');
if(story_container){
    for (var i = 0; i < image_profile.length; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add("item_s");
        parentDiv.innerHTML = `
            <img src="${image_profile[i][0]}">
            <p>${image_profile[i][1]}</p>
            `;
        story_container.appendChild(parentDiv);
    }
}


$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    responsiveClass:true,
    responsive:{
        0:{
            items:5,
            nav:true
        },
        500:{
            items:7,
            nav:false
        }
    }
})