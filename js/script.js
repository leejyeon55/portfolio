//타이핑 효과
const target =document.querySelector('#dynamic');
function blink() {
    target.classList.toggle("active");
}
setInterval(blink,500)


const string = "로켓 정연은 퇴근 전 완료 !";
const split = string.split('');
function dynamic(arr) {
    if (arr.length > 0) {
        target.textContent += arr.shift();
        setTimeout(function () {
            dynamic(arr)
        },80);
    }
};
dynamic(split);

function reset() {
    target.textContent="";
    const resplit = string.split('');
    dynamic(resplit);
}
function dynamic(arr) {
    if (arr.length > 0) {
        target.textContent += arr.shift();
        setTimeout(function () {
            dynamic(arr)
        },80)
    }else{
        setTimeout(reset, 3000);
    }
}
//부드러운 스크롤
$('document').ready(function() {
    $(".gnb li a").on('click', function(event) {
  
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          window.location.hash = hash;
        });
      } 
    });
  });


 //탑버튼
  window.addEventListener('scroll', function () {
	if (this.scrollY > 1000) {
		document.querySelector('.top').style.display = 'block';
	} else {
		document.querySelector('.top').style.display = 'none';
	}
});

document.querySelector('.top').addEventListener('click', function (e) {
	e.preventDefault();
	document.querySelector('html, body').scrollTo({ top: 0, behavior: 'smooth' });
});
  
//아트웍 탭
const tabs = $('.tabs');
tabs.each(function(){
  let currentEl = $(this);
  const targetLink = currentEl.find('.artwork_btn li a');
	const tabContent = currentEl.find('.artwork_img > div');

  targetLink.click(function (e) {
    e.preventDefault();
    let tg = $(this);
    let currentLink=tg.attr('href');
    targetLink.removeClass('on');
    tg.addClass('on');
    tabContent.hide();
    $(currentLink).show();
});

});