let carsouel = document.querySelector("#lio-carousel"),
    nextSliderBtn = carsouel.querySelector("#lio-carousel .next"),
    prevSliderBtn = carsouel.querySelector("#lio-carousel .prev"),
    navLinks=document.querySelectorAll(".navbar .sections .nav-link"),
    sizeButtons=document.querySelectorAll(".latest .item .desc .size ul button"),
    addButton=document.querySelectorAll(".latest .item .desc"),
    shoeChange=document.querySelectorAll(".latest .item .prespective .img img"),
    circles=document.querySelectorAll(".featured .products .item .circles li button"),
    shoeGallery=document.querySelectorAll(".featured .products .item .img img");

 


    window.addEventListener("load", () => {
    let startWindow2 =carsouel.querySelector(".lio-carousel-item"),
        startWindow1 = carsouel.querySelector(".lio-carousel-item .part1 .item");
        startWindow1.classList.add("start");
        startWindow2.classList.add("active");
        let icon = document.querySelector('link[rel="icon"]');
            icon.href = "img/logo.png";
        navLinks[0].classList.add("active");
        let nav=document.querySelector(".nav");
        if(scrollY>0)
            nav.style.opacity=1;
        else
            nav.style.opacity=0.8;
    } 
)


let burger = document.querySelector(".burger");
let navItems = document.querySelector(".nav-items");
if (window.innerWidth >= 992) {
     navItems.classList.remove("show");
 }


            burger.addEventListener("click", function () {  
            navItems.classList.toggle("show");
            });

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(l => l.classList.remove("active"));
        this.classList.add("active");

    });
});

    nextSliderBtn.addEventListener("click", function (e) {
        let currentSlider = carsouel.querySelector(".lio-carousel-item.active"),
        nextSlider=currentSlider.nextElementSibling??carsouel.querySelector(".lio-carousel-item:first-child"),
        currentPart1Start = carsouel.querySelector(".lio-carousel-item .part1 .item.start");

        currentSlider.classList.remove("active");
        nextSlider.classList.add("active");
        let nextPart1Start = nextSlider.querySelector(".part1 .item");
        currentPart1Start.classList.remove("start");
        nextPart1Start.classList.add("start");

        if(nextSlider.classList.contains("red")){
           document.documentElement.style.setProperty("--main-color","var(--first-color)");
            let logo= document.querySelector(".navbar.nav img");
            logo.src="img/logo.png";
            let icon = document.querySelector('link[rel="icon"]');
            icon.href = "img/logo.png";
        }
        else if(nextSlider.classList.contains("blue")){
           document.documentElement.style.setProperty("--main-color","var(--secund-color)");
             let logo= document.querySelector(".navbar.nav img");
            logo.src="img/logo2.png"
            let icon = document.querySelector('link[rel="icon"]');
            icon.href = "img/logo2.png";
        }
        else{
           document.documentElement.style.setProperty("--main-color","var(--third-color)");
             let logo= document.querySelector(".navbar.nav img");
            logo.src="img/logo3.png"
            let icon = document.querySelector('link[rel="icon"]');
            icon.href = "img/logo3.png";
        }

    });

    prevSliderBtn.addEventListener("click",function(e){
        let curentSlider = carsouel.querySelector(".lio-carousel-item.active"),
        prevSlider = curentSlider.previousElementSibling??carsouel.querySelector(".lio-carousel-item:last-child"),
        currentPart1Start = carsouel.querySelector(".lio-carousel-item .part1 .item.start");
        curentSlider.classList.remove("active");
        currentPart1Start.classList.remove("start");
        prevSlider.classList.add("active");
        let prevPart1Start = prevSlider.querySelector(".part1 .item");
        prevPart1Start.classList.add("start");


        if(prevSlider.classList.contains("red")){
           document.documentElement.style.setProperty("--main-color","var(--first-color)");
            let logo= document.querySelector(".navbar.nav img");
            logo.src="img/logo.png"
            let icon = document.querySelector('link[rel="icon"]');
            icon.href = "img/logo.png";
        }
        else if(prevSlider.classList.contains("blue")){
           document.documentElement.style.setProperty("--main-color","var(--secund-color)");
             let logo= document.querySelector(".navbar.nav .logo");
           logo.src="img/logo2.png"
           let icon = document.querySelector('link[rel="icon"]');
            icon.href = "img/logo2.png";
        }
        else{
           document.documentElement.style.setProperty("--main-color","var(--third-color)");
             let logo= document.querySelector(".navbar.nav img");
            logo.src="img/logo3.png"
            let icon = document.querySelector('link[rel="icon"]');
            icon.href = "img/logo3.png";
        }

    });

    shoeChange.forEach(s => {
        s.addEventListener("click",function (e){
        
             let item=s.closest(".item"),
             shoe=item.querySelector(".shoe img");
            shoe.src=s.src;                
            })
        });


sizeButtons.forEach(button => {

    button.addEventListener("click", function () {
        let item = this.closest(".item")
        let buttons = item.querySelectorAll(".size button");
        buttons.forEach(btn => {
            btn.classList.remove("select");
        });
        this.classList.add("select");
    });

});

addButton.forEach(element => {
    let item =element.closest(".item"),
    addItem=item.querySelector(".add-cart");

    addItem.addEventListener("click",function(e){
        if(addItem.classList.contains("add")){
            addItem.classList.remove("add");
            addItem.classList.add("remove");
            addItem.textContent="Remove From cart";
                }
                
                else if(addItem.classList.contains("remove")){
                    addItem.classList.remove("remove");
                    addItem.classList.add("add");        
                    addItem.textContent="Add To cart";
                }

    })

})



circles.forEach(element=>{
    element.addEventListener("click",function(e){
        let item=element.closest(".item"),
        img=item.querySelector(".img img");
        circle=item.querySelectorAll("li button");
        circle.forEach(c=>{
            c.classList.remove("select");
        })
        this.classList.add("select");
        let currentImg=item.querySelector("li button.select img");
        img.src=currentImg.src;
    })
})  