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


// lottie logo
const lottie=bodymovin.loadAnimation({
  container:document.querySelector('#lottie'),
  renderer:'svg',//렌더링방식 svg/canvas/html
  loop:true,
  autoplay:true,
  path:'./img/logo.json',
})

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
console.log(bigLocation);