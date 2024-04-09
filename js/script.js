
// 반응형 스크롤메뉴

$(()=>{const smGnb = $('.sm_gnb');
const scrollThreshold = 770; 

$(window).on('scroll', function () {
    const scroll = $(window).scrollTop();
    if (scroll <= scrollThreshold) {
        smGnb.removeClass('fixed');
    } else {
        smGnb.addClass('fixed');
    }
});}
)
$("document").ready(function () {
  $(".sm_gnb li a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//contact
$("document").ready(function () {
  $(".contact_me a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});




const el = document.querySelector('.followAnimation');

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove',(e)=>{
    mouseX=e.clientX;
    mouseY=e.clientY;
    console.log(mouseX,mouseY);
});
tick();
function tick(){
    requestAnimationFrame(tick);
    currentX += (mouseX - currentX) * .1;
    currentY += (mouseY - currentY) * .1;
    el.style.transform=`translate(${currentX}px,${currentY}px)`;

}


// lottie logo
const lottie=bodymovin.loadAnimation({
  container:document.querySelector('#lottie'),
  renderer:'svg',//렌더링방식 svg/canvas/html
  loop:true,
  autoplay:true,
  path:'./img/logo.json',
})

//타이핑 효과
const target = document.querySelector("#dynamic");
function blink() {
  target.classList.toggle("active");
}
setInterval(blink, 500);

const string = "로켓 정연은 퇴근 전 완료 !";
const split = string.split("");
function dynamic(arr) {
  if (arr.length > 0) {
    target.textContent += arr.shift();
    setTimeout(function () {
      dynamic(arr);
    }, 80);
  }
}
dynamic(split);

function reset() {
  target.textContent = "";
  const resplit = string.split("");
  dynamic(resplit);
}
function dynamic(arr) {
  if (arr.length > 0) {
    target.textContent += arr.shift();
    setTimeout(function () {
      dynamic(arr);
    }, 80);
  } else {
    setTimeout(reset, 3000);
  }
}
//부드러운 스크롤
$("document").ready(function () {
  $(".gnb li a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

//탑버튼
window.addEventListener("scroll", function () {
  if (this.scrollY > 1000) {
    document.querySelector(".top").style.display = "block";
  } else {
    document.querySelector(".top").style.display = "none";
  }
});

document.querySelector(".top").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector("html, body").scrollTo({ top: 0, behavior: "smooth" });
});

//아트웍 탭
const tabs = $(".tabs");
tabs.each(function () {
  let currentEl = $(this);
  const targetLink = currentEl.find(".artwork_btn li a");
  const tabContent = currentEl.find(".artwork_img > div");

  targetLink.click(function (e) {
    e.preventDefault();
    let tg = $(this);
    let currentLink = tg.attr("href");
    targetLink.removeClass("on");
    tg.addClass("on");
    tabContent.hide();
    tabContent.addClass('on');
    $(currentLink).show();
  });
});

//스킬바

const bar = document.querySelectorAll(".skill_bar .bar");
bar.forEach((el) => {
  const pbar = el.querySelector(".skill_bar .pbar");
  const counter = el.querySelector(".skill_bar .bar_counter");
  const tg = counter.textContent + "%";
  const tm = gsap.timeline({
    defaults: {
      duration: 4,
      ease: "expo.out",
    },
    scrollTrigger: {
      trigger: el,
      toggleActions: "play pause resume reset",
    },
  });
  tm.from(counter, {
    textContent: 0,
    modifiers: {
      textContent: (textContent) => {
        return textContent.toFixed();
      },
    },
  });
  tm.to(pbar, { "--p": tg }, 0);
});


gsap.to('.project1', {
	scrollTrigger: '.project1',
	y: '-100px',
	duration: 1,
	opacity:1
});
gsap.to('.project2', {
	scrollTrigger: '.project2',
	y: '-100px',
	duration: 1,
	opacity:1
});
gsap.to('.project3', {
	scrollTrigger: '.project3',
	y: '-100px',
	duration: 1,
	opacity:1
});
gsap.to('.project4', {
	scrollTrigger: '.project4',
	y: '-100px',
	duration: 1,
	opacity:1
});
gsap.to('.project5', {
	scrollTrigger: '.project5',
	y: '-100px',
	duration: 1,
	opacity:1
});


//art work load
const pics=$('.pic');
const lightbox=$('#lightbox');
const lightboxImage=$('#lightboxImage');
pics.on('click',function (e){
  e.preventDefault();
  const bigLocation=$(this).attr("data-src");
  lightbox.css('display','block');
  lightboxImage.load(bigLocation);
})
lightbox.on('click',function (){
  lightbox.css('display','none');
})


//contact me
document.addEventListener('mousemove',parallax);
function parallax(e){
    this.querySelectorAll('.effect span').forEach((el) => {
        const pos = el.getAttribute('data-value');
        const x=(window.innerWidth - e.pageX * pos) / 400 ;
        const y=(window.innerHeight - e.pageY * pos) / 400;
        el.style.transform=`translateX(${x}px) translateY(${y}px)`
    });
};