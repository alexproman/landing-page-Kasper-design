
const menu = document.querySelector('.menu');

const menuLines = document.querySelectorAll('.line');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', ()=>{
    menuLines.forEach(line=>{
        line.classList.toggle('active');
    })
    navigation.classList.toggle('active')
})

// slider

const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const dots = document.querySelectorAll('.bullets span');

let slideIndex = 0

const slideImage =()=>{
    slides.forEach((slide)=>{
        slide.style.transform =`translateX(-${slideIndex * 100}%)`
        dots.forEach((dot,index)=>{
            if(slideIndex==index){
                dot.classList.add('active')
            }else{
                dot.classList.remove('active')
            }
        })
    })
}

 const slidePrev =()=>{
         slideIndex >= 2 ? slideIndex =0 : slideIndex ++
         slideImage();
         console.log(slideIndex)
        }
        const slideNext =()=>{  
            slideIndex ==2 ? slideIndex = 0 :slideIndex ++
            slideImage();
}

const goToSlide = (index) => {
    slideIndex = index;
    slideImage();
  };

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
    });
  });
const header = document.querySelector('.header')
const lists = document.querySelectorAll('li')
const activeLink = document.querySelector('li.activeLink')



    window.onscroll=()=>{
        if(scrollY >= 400){
            header.classList.add('scl-hd-bg')
            activeLink.classList.add('scroll')
            lists.forEach(list=>{
                list.classList.add('thin')
            })
    
        }else{
            header.classList.remove('scl-hd-bg')
            activeLink.classList.remove('scroll')
            lists.forEach(list=>{
                list.classList.remove('thin')
            })
            
        }
    }

lists.forEach(list=>{
    
    list.addEventListener('click',()=>{
        lists.forEach(li=>{
            li.classList.remove('activeLink')
        })
        list.classList.add('activeLink','scroll')
    })
})


const personSlide = document.querySelector('.persons-slider')

const teamSlider = document.querySelectorAll('.team-paj li');
function teamDot (id){
    let temp = 500
    const current = document.getElementById(`${id}`);
    teamSlider.forEach((li,index)=>{
        li.classList.remove('active')
        if(id == index){
            current.classList.add('active')
        }
        
    })
    personSlide.style.transform= `translateX(-${id * temp}px)`
}

const Categories = document.querySelectorAll('.category')
const plusIcons = document.querySelectorAll('.plus-icon')
const descriptions = document.querySelectorAll('.description')


Categories.forEach((category,index)=>{
    category.addEventListener('mouseover',()=>{
        plusIcons.forEach((icon,i)=>{
            if(index == i){
                icon.classList.add("active")
            }else{
                icon.classList.remove('active')
            }
        })
        descriptions.forEach((discrp,j)=>{
            if(index == j){
                discrp.classList.add("active")
            }else{
                discrp.classList.remove('active')
            }
        })
    })
    
    category.addEventListener('mouseleave',()=>{
        plusIcons.forEach(icon=>{
            icon.classList.remove('active')    
        })
        descriptions.forEach(discrp=>{
            discrp.classList.remove('active')
        })
    })
})

    
const caregorySlider = document.querySelector('.caregory-slider')
const catSlideContainer = document.querySelector('.cat-slide-container')
const body = document.querySelector('body')
const closeIcon = document.querySelector('.close-icon')
plusIcons.forEach(icon=>{
    icon.addEventListener('click',()=>{
        caregorySlider.classList.add('active')
        setTimeout(()=>{
            catSlideContainer.classList.add('active')
        },150)
        body.style.overflow = 'hidden'    
            })
})
closeIcon.addEventListener('click',()=>{
    catSlideContainer.classList.remove('active')
    setTimeout(()=>{
        caregorySlider.classList.remove('active')
        body.style.overflow = 'auto'    
    },150)

})
const catPrev = document.querySelector('.cat-prev')
const catNext = document.querySelector('.cat-next')
const catSlides = document.querySelector('.all-slides')
const slideImgs = document.querySelectorAll('.all-slides img')
let transformWidth = (100 / slideImgs.length)
let index =0
catPrev.addEventListener('click',()=>{
    index ++
    
    if(index >= slideImgs.length){
        index = slideImgs.length-1
    }else{
        catSlides.style.transform =`translateX(-${index * transformWidth}%)`
    }
    console.log(index)
})

catNext.addEventListener('click', () => {
    if(index < 1 ){
        index = 0
    }else{
        index--
        catSlides.style.transform =`translateX(-${index * transformWidth}%)`
        
    }
    console.log(index)
});


const projects = document.getElementById('projects')
const Clients = document.getElementById('Clients')
const Hours = document.getElementById('Hours')
const Award = document.getElementById('Award')


let projectscounter=0,Clientscounter=0,Hourscounter=0,Awardcounter=0
window.addEventListener('scroll',()=>{
    if(scrollY >= 2800){
        setInterval(()=>{
            projectscounter == 180 ? projectscounter= 180 : projectscounter++
            projects.innerText = `${projectscounter}`
            Clientscounter == 124 ? Clientscounter= 124 : Clientscounter++
            Clients.innerText = `${Clientscounter}`
            Hourscounter == 2500 ? Hourscounter= 2500 : Hourscounter+=10
            Hours.innerText = `${Hourscounter}`
            Awardcounter == 67 ? Awardcounter= 67 : Awardcounter++
            Award.innerText = `${Awardcounter}`
        },20)
       
    }
})
window.addEventListener('scroll',()=>{
    const progressPar = document.querySelectorAll('.bg')
    if(scrollY >= 3200){
        progressPar.forEach(bar=>{
            bar.classList.add('active')
        })    
    }else{
        progressPar.forEach(bar=>{
            bar.classList.remove('active')
        })    
        
    }
})


























