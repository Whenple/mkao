// 헤더 토글버튼 기능
let openedHeader = null;
function showHeader(elem) {
  const subMenu = elem.children[1];
  if (elem.id != "opened") {
    if (openedHeader) {
      openedHeader.children[1].style["display"] = "none";
      openedHeader.id = "closed";
    }
    openedHeader = elem;
    elem.id = "opened";
    subMenu.style.display = "block";
  } else {
    elem.id = "closed";
    subMenu.style.display = "none";
    if (openedHeader) {
      openedHeader = null;
    }
  }
}

// 나이트 모드 기능
document.documentElement.setAttribute("color-theme", "light");
// let tail = document.getElementsByClassName("tail");

let darkmode_src = "./Kmain-darkmode-img/";
let lightmode_src = "./Kmain-lightmode-img/";
let calendar_src = "https://www.kakaocorp.com/page/calendar/";
let darkTail = "";
let lightTail = "";

function nightMode(elem) {
  const nightMode = elem.children[0];
  if (elem.id != "nightModeOn") {
    elem.id = "nightModeOn";
    document.documentElement.setAttribute("color-theme", "dark");

    // 이미지 경로 다크모드로 바꾸기

    document.getElementById("search-img").src = darkmode_src + "search.png";
    document.getElementById("language-img").src = darkmode_src + "language.png";
    document.getElementById("nightmode-img").src =
      darkmode_src + "night_mode.png";
    document.getElementById("calendar-img").src =
      calendar_src + "dark/ico_date24.gif";
    $(".tail").css("background", "url(darkTail)");
  } else {
    elem.id = "lightModeOn";
    document.documentElement.setAttribute("color-theme", "light");

    // 이미지 경로 라이트모드로 바꾸기

    document.getElementById("search-img").src = lightmode_src + "search.png";
    document.getElementById("language-img").src =
      lightmode_src + "language.png";
    document.getElementById("nightmode-img").src =
      lightmode_src + "night_mode.png";
    document.getElementById("calendar-img").src =
      calendar_src + "light/ico_date24.gif";
    $(".tail").css("background", "url(lightTail)");
  }
}

// $checkbox.addEventListener("click", (e) => {
//   if (e.target.checked) {
//     document.documentElement.setAttribute("color-theme", "dark");
//   } else {
//     document.documentElement.setAttribute("color-theme", "light");
//   }
// });

// 스크롤시 헤드 모션
var lastScrollTop = 0,
  delta = 10;

$(window).scroll(function () {
  var scrollTop =
    $(
      this
    ).scrollTop(); /* 스크롤바 수직 위치를 가져옵니다, 괄호 안에 값(value)이 있을 경우 스크롤바의 수직 위치를 정합니다. */
  // Math.abs: 주어진 숫자의 절대값을 반환(return)합니다.
  if (Math.abs(lastScrollTop - scrollTop) <= delta)
    // 스크롤 값을 받아서 ~
    return; // ~ 리턴

  if (scrollTop > lastScrollTop && lastScrollTop > 100) {
    /* 화면에 나오지 않을 때, top값은 요소가 보이지 않을 정도로 사용해야함 */
    $(".main_header").css("top", "-98px");
    $(".sub-header").css("top", "0px"); // 서브메뉴 위치
    $(".sub-header").css("display", "flex"); // 서브메뉴 보이게 설정
  } else {
    $(".main_header").css("top", "0px");
  }
  if (lastScrollTop < 100) {
    $(".sub-header").css("display", "none"); // 서브 다시 안보이게 해주기
  }
  lastScrollTop = scrollTop; // 현재 멈춘 위치를 기준점으로 재설정
});

// 드롭다운 메뉴
let openedElement = null;
function clickshow(elem) {
  // var menu = document.getElementById(ID);
  const menu = elem.children[1];
  // var angleBracket = document.getElementById(aB);
  const angleBracket = elem.children[0];
  if (elem.className != "opened") {
    if (openedElement) {
      openedElement.children[1].style["display"] = "none";
      openedElement.className = "closed";
      openedElement.style.color = "#888";
      openedElement.children[0].innerText = "∨";
    }
    openedElement = elem;

    elem.className = "opened";
    elem.style.color = "var(--fontColor)";
    menu.style.display = "block";
    angleBracket.innerText = "∧";
  } else {
    elem.className = "closed";
    elem.style.color = "#888";
    menu.style.display = "none";
    angleBracket.innerText = "∨";
    if (openedElement) {
      openedElement = null;
    }
  }
}

// 관련사이트 버튼
function relatedShow(elem, ID, txt) {
  var menu = document.getElementById(ID);
  var txtX = document.getElementById(txt);
  if (elem.className != "clickMenu") {
    elem.className = "clickMenu";
    menu.style.display = "block";
    txtX.style.fontSize = "18px";
    txtX.innerText = "X";
  } else {
    elem.className = "opened";
    menu.style.display = "none";
    txtX.innerText = "+";
    txtX.style.fontSize = "22px";
  }
}
