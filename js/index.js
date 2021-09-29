// Your code goes here

//navbar /mouseover

//  * `mouseover`
//   * `keydown`
// * `wheel`
// * `load`
// * `focus`
// * `resize`
// * `scroll`
// * `select`
// * `dblclick`
// * `drag / drop`

//mouse over
const navBar = document.querySelector('.main-navigation')


navBar.addEventListener('mouseover', function(event){
    event.target.style.backgroundColor = 'grey';
    setTimeout(function(){
        event.target.style.backgroundColor = '';
    }, 3000);
});

//image removal thank you Mr.Harding!!! :D
const topImg = document.querySelector('.intro img')

document.addEventListener('keydown', escKey);

function escKey(event){
    if(event.key === 'Escape'){
        topImg.classList.add('off');
        setTimeout(function(){
            topImg.classList.remove('off');
        }, 400);
        //loop over line 26, add off to each elements in the array //try queryselectorall, grabbing all imgs, try const imgs, CONSOLE LOG!!! 29 and 31 are golden. add class to each of the img elements    
    }
}

//document global js object, entire page,
//


//Wheel
const contentImg = document.querySelector('.content-section img');

function zoom(event){
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.300, scale), 1.3);
    contentImg.style.transform = `scale(${scale})`;    
}
let scale = 1;

contentImg.onwheel = zoom;

//load
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});
//

//focus
window.addEventListener('focus', (event) => {
    console.log('page is focused');
  });
//
//mouseenter
Array.from(document.links).forEach((link) =>{
    link.addEventListener(
    'mouseenter',
    function(event) {
        event.target.style.color = 'blue';
        setTimeout(function() {
            event.target.style.color = '';
        }, 500);
    },
    );
});

const funBusColor = document.querySelector('h1.logo-heading');
funBusColor.addEventListener("mouseover", function (event){
event.target.style.color = 'pink';
setTimeout(function (){
    event.target.style.color = '';
}, 500);
});



//dblclick

const navButtons = document.querySelector('nav')
navButtons.addEventListener('dblclick', function(e){
    navButtons.classList.toggle('large');
})

funBusColor.addEventListener('mouseleave', function (event){
    event.target.style.color = 'cyan';
    setTimeout(function (){
        event.target.style.color = '';
    }, 200);
})

