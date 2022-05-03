// webp
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   }else{
      document.querySelector('body').classList.add('no-webp');
   }
});
// header burger	
function burgerMenu(){
	const burger = document.querySelector('.burger')
	const menu = document.querySelector('.menu')
	const body = document.querySelector('body')
	burger.addEventListener('click', () => { 
		if(!menu.classList.contains('active')){
			menu.classList.add('active')
			burger.classList.add('active-burger')
			body.classList.add('locked')
		} else {
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
	window.addEventListener('resize', () => {
		if (window.innerWidth > 991.98){
			menu.classList.remove('active')
			burger.classList.remove('active-burger')
			body.classList.remove('locked')
		}
	})
}
burgerMenu();
function fixedNav(){
	const nav = document.querySelector('nav')
	const breakpoint = 1
	if (window.scrollY > breakpoint){
		nav.classList.add('fixed__nav')
	} else {
		nav.classList.remove('fixed__nav')
	}
}
window.addEventListener('scroll', fixedNav)


var x, i, j, l, ll, selElmnt, a, b, c;
x = document.getElementsByClassName('select');
l = x.length;
for (i = 0; i < l; i++) {
   selElmnt = x[i].getElementsByTagName('select')[0];
   ll = selElmnt.length;
   a = document.createElement('DIV');
   a.setAttribute('class', 'select-selected  select__text');
   a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
   x[i].appendChild(a);
   b = document.createElement('DIV');
   b.setAttribute('class', 'select-items select-hide select__text');
   for (j = 1; j < ll; j++) {
      c = document.createElement('DIV');
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener('click', function(e) {
         var y, i, k, s, h, sl, yl;
         s = this.parentNode.parentNode.getElementsByTagName('select')[0];
         sl = s.length;
         h = this.parentNode.previousSibling;
         for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
               s.selectedIndex = i;
               h.innerHTML = this.innerHTML;
               y = this.parentNode.getElementsByClassName('same-as-selected');
               yl = y.length;
               for (k = 0; k < yl; k++) {
                  y[k].removeAttribute('class');
               }
               this.setAttribute('class', 'same-as-selected');
               break;
            }
         }
         h.click();
      });
      b.appendChild(c);
   }
   x[i].appendChild(b);
   a.addEventListener('click', function(e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow');
   });
}
function closeAllSelect(elmnt) {
   var x, y, i, xl, yl, arrNo = [];
   x = document.getElementsByClassName('select-items');
   y = document.getElementsByClassName('select-selected');
   xl = x.length;
   yl = y.length;
   for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
         arrNo.push(i)
      } else {
         y[i].classList.remove('select-arrow');
      }
   }
   for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i)) {
         x[i].classList.add('select-hide');
      }
   }
}
document.addEventListener('click', closeAllSelect);


new Swiper('.places__swiper > .swiper-container', {
   direction: 'horizontal',
   loop: !0,
   initialSlide: 0,
   speed: 1500,
   spaceBetween: 30,
   effect: "coverflow",
   centeredSlides: true,
   slidesPerView: "auto",
   autoplay: {
      delay: 5000,
      disableOnInteraction: true,
   },
   coverflowEffect: {
     rotate: 0,
     stretch: 0,
     depth: 50,
     modifier: 1,
     slideShadows: true,
   },
   breakpoint: {
      993:{
         slidesPerView: "auto",
      },
      481:{
         slidesPerView: 2,
         coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 10,
            modifier: 1,
            slideShadows: true,
          },
      },
      0:{
         slidesPerView: 1,
      },
   },
   keyboard: {
      enabled: !0,
      onlyInViewport: !1
   },
});
new Swiper(".partners__swiper > .swiper-container", {
   direction: "horizontal",
   loop: true, 
   spaceBetween: 46,
   slidesPerView: "auto",
   loop: true,
   autoplay: {
      delay: 0,
      disableOnInteraction: false
   },
   speed: 5000,
 });
new Swiper('.customers__swiper > .swiper-container', {
   direction: 'horizontal',
   loop: !0,
   initialSlide: 0,
   speed: 1500,
   slidesPerView: 1,
   spaceBetween: 30,
   keyboard: {
      enabled: !0,
      onlyInViewport: !1
   },
   navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
   },
});
const tl = new TimelineMax()
tl.from('nav', {y: "-100%", duration: .8})
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.animation__opacity').forEach((el, index) => {
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: el,
         start: 'top bottom',
         toggleActions: 'play none none reverse',
      }
   })
   tl
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, {opacity: 0}, {opacity: 1, duration: 1, immediateRender: false})
})
gsap.utils.toArray('.animation__top').forEach((el, index) => {
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: el,
         start: 'top bottom',
         toggleActions: 'play none none reverse',
      }
   })
   tl
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, {y: "-10%"}, {y: "0%", duration: 1, immediateRender: false})
})
gsap.utils.toArray('.animation__left').forEach((el, index) => {
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: el,
         start: 'top bottom',
         toggleActions: 'play none none reverse',
      }
   })
   tl
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, {x: "-10%"}, {x: "0%", duration: 1, immediateRender: false})
})
gsap.utils.toArray('.animation__right').forEach((el, index) => {
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: el,
         start: 'top bottom',
         toggleActions: 'play none none reverse',
      }
   })
   tl
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, {x: "10%"}, {x: "0%", duration: 1, immediateRender: false})
})
gsap.utils.toArray('.animation__bottom').forEach((el, index) => {
   let tl = gsap.timeline({
      scrollTrigger: {
         trigger: el,
         start: 'top bottom',
         toggleActions: 'play none none reverse',
      }
   })
   tl
      .set(el, {transformOrigin: 'center center'})
      .fromTo(el, {y: "30%"}, {y: "0%", duration: 1, immediateRender: false})
})
let scroll = new SmoothScroll('a[href*="#"]', {
	speed: 600
});