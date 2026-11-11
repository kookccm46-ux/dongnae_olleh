// mobile menu
const menuBtn = document.querySelector('.menu-btn');
const gnb = document.querySelector('.site-header .gnb');

// 모바일 메뉴 닫기 함수
function closeMenu() {
  menuBtn.classList.remove('active');
  gnb.classList.remove('active');
  document.body.classList.remove('menu-open');

  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-label', '메뉴 열기');
}

// 햄버거 버튼 클릭
menuBtn.addEventListener('click', function () {
  const isOpen = gnb.classList.contains('active');

  if (isOpen) {
    closeMenu();
  } else {
    menuBtn.classList.add('active');
    gnb.classList.add('active');
    document.body.classList.add('menu-open');

    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', '메뉴 닫기');
  }
});

// 메뉴 링크 클릭 시 닫기
gnb.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', closeMenu);
});

// PC 화면으로 전환하면 메뉴 초기화
window.addEventListener('resize', function () {
  if (window.innerWidth > 600) {
    closeMenu();
  }
});