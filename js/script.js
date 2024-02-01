// ---------------------MENU-BAR-CLOSE-----------------------
const MenuBar = document.getElementById("menu-toggle");
const CloseBar = document.getElementById("close-toggle");
const MenuLinks = document.getElementById("menu-links");
function toggleMenu() {
    MenuBar.style.display = MenuBar.style.display === "none" ? "block" : "none";
    CloseBar.style.display = CloseBar.style.display === "none" ? "block" : "none";
    MenuLinks.style.top = MenuLinks.style.top === "0" ? "-1000%" : "0";
}
function checkScreenWidth() {
    if (window.innerWidth <= 1000) {
        MenuLinks.style.top = "-1000%"; 
        MenuBar.style.display = "block"; 
        CloseBar.style.display = "none"; 
    } else {
        MenuBar.style.display = "none"; 
        CloseBar.style.display = "none";
    }
}
MenuBar.addEventListener("click", toggleMenu);
MenuBar.addEventListener("click",()=>{
    MenuLinks.style.top="0"
});
CloseBar.addEventListener("click", toggleMenu);
CloseBar.addEventListener("click",()=>{
    MenuLinks.style.top="-1000%"
})
window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);




// ------------MENU-LİNK------------------
MenuLink =()=>{
    const MenuBar = document.getElementById("menu-toggle");
    const CloseBar = document.getElementById("close-toggle");
    const MenuLinks = document.getElementById("menu-links");
    const navLinks=document.querySelectorAll(".nav-link");
    navLinks.forEach((link)=>{
        link.addEventListener("click",()=>{
           
              if (window.innerWidth <= 1200) {
                  MenuLinks.style.top = "-1000%"; 
                  MenuBar.style.display = "block"; 
                  CloseBar.style.display = "none"; 
              } else {
                  MenuBar.style.display = "none"; 
                  CloseBar.style.display = "none";
              }
           
        })
    })
}


window.addEventListener("DOMContentLoaded",MenuLink)


// -------------SCROLL-UP-----------------


Header=()=>{
    const HeaderScroll = document.getElementById("header");
    this.scrollY >=50 ? HeaderScroll.classList.add("show-header")
                        : HeaderScroll.classList.remove("show-header")


}


window.addEventListener("scroll",Header)




// ------------ACTİVE--------------
Activeİmg =()=>{
    const Smallİmgs=document.querySelectorAll(".small-img");
    
    Smallİmgs.forEach((img)=>{
        img.addEventListener("click",()=>{
            for(let i=0;i<Smallİmgs.length;i++)
            Smallİmgs[i].classList.remove("active")
            img.classList.add("active")
        })
        })
    
}

window.addEventListener("DOMContentLoaded",Activeİmg)



// -----------BİGİMG-------------------

Bigİmg=()=>{
    const Bigİmg=document.getElementById("big-img");
    const Smallİmgs=document.querySelectorAll(".small-img");

    Smallİmgs.forEach((img)=>{
        img.addEventListener("click",()=>{
            if(img.classList.contains("active")){
               let İmgsrc =img.firstChild.nextSibling.src
                Bigİmg.src =İmgsrc
                
            }
        })
    })
}

window.addEventListener("DOMContentLoaded",Bigİmg)




// ------------------AİRPODS-COLOR-----------------


AirpodsColor=()=>{
    const colors =document.querySelectorAll(".color");

    colors.forEach((color)=>{
        color.addEventListener("click",()=>{
            for(let i=0;i<colors.length;i++)
            colors[i].classList.remove("active");
            color.classList.add("active")
        })
    })
}


window.addEventListener("DOMContentLoaded",AirpodsColor)





// ------------------AİRPOD-COLOR-----------------


AirpodColor=()=>{
    const colors =document.querySelectorAll(".color");
    const Airpodİmg=document.getElementById("product-img");

    colors.forEach((color)=>{
        color.addEventListener("click",()=>{
          if(color.classList.contains("color-cream"))
          Airpodİmg.firstChild.nextSibling.src ="images/creambuds.png"
        
          if(color.classList.contains("color-black"))
          Airpodİmg.firstChild.nextSibling.src ="images/blackbuds.png"

          if(color.classList.contains("color-white"))
          Airpodİmg.firstChild.nextSibling.src ="images/whitebuds.png"

          if(color.classList.contains("color-red"))
          Airpodİmg.firstChild.nextSibling.src ="images/redbuds.png"

        })
    })

   
}


window.addEventListener("DOMContentLoaded",AirpodColor)



// -------------SCROLL-UP-----------------

const scrollupElement = document.getElementById("scroll-up");

const scrollup=()=>{
    const scrollup =document.getElementById("scroll-up");
    this.scrollY >=350 ? scrollup.classList.add("show-up")
                        : scrollup.classList.remove("show-up")


}
window.addEventListener("scroll",scrollup)


const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

scrollupElement.addEventListener("click", scrollToTop);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu-links a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.menu-links a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)




