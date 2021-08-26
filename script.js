let nav = document.querySelector('nav')
let freeCourses = document.querySelector('.header-free-courses')
let coursesSale = document.querySelectorAll('.courses-sale-block')
let coursesimg = document.querySelector('.courses-img')
let masters = document.querySelector('.masters')
let lili = document.querySelectorAll('.li1')
let itemBlock = document.querySelector('.description-item-block')


window.addEventListener('scroll', () =>{
     if(scrollY > 900){
        nav.style.position = 'fixed'
        nav.style.background = '#81e0fd'
        masters.style.color = '#0a21ed'
     }
     if(scrollY < 900){
        nav.style.position = 'fixed'
        nav.style.background = ''
    }
    if(scrollY > 800){
        itemBlock.style.opacity = 1
        itemBlock.style.transition = '0.3s linear'
    }
    if(scrollY === 0){
        freeCourses.classList.add('header-courses-free')
    }
    if(scrollY > 2100){
        coursesSale[0].style.transform = 'translateX(0)'
        coursesSale[0].style.transition = '0.5s linear'
        coursesSale[0].style.opacity = '1'
    }
    if(scrollY > 2800){
        coursesSale[1].style.transform = 'translateX(0)'
        coursesSale[1].style.transition = '0.5s linear'
        coursesSale[1].style.opacity = '1'
    }
    if(scrollY > 3500){
        coursesSale[2].style.transform = 'translateX(0)'
        coursesSale[2].style.transition = '0.5s linear'
        coursesSale[2].style.opacity = '1'
    }
    if(scrollY > 4200){
        coursesSale[3].style.transform = 'translateX(0)'
        coursesSale[3].style.transition = '0.5s linear'
        coursesSale[3].style.opacity = '1'
    }
    if(scrollY > 4900){
        coursesSale[4].style.transform = 'translateX(0)'
        coursesSale[4].style.transition = '0.5s linear'
        coursesSale[4].style.opacity = '1'
    }
    if(scrollY > 5350){
        coursesimg.style.transform = 'translateY(0)'
        coursesimg.style.transition = '0.3s'
        coursesimg.style.opacity = '1'
    }
    
})

const anchors = document.querySelectorAll('a[href*="#"]')

console.log(anchors);

for(let anchor of anchors){
    console.log(anchor);
    anchor.addEventListener('click',(e) =>{
        e.preventDefault()
        const blockId = anchor.getAttribute('href')
        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
