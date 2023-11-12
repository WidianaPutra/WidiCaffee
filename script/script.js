// navbar start
let counter = 0;
$(".hidden").click(() => {
  counter = (counter + 1) % 2;
  counter == 1 ? open() : close();
});

const open = () => {
  $(".hidden").attr("src", "./assets/icons/close.svg");
  $(".list-menu").css({
    height: "40vh",
  });
};

const close = () => {
  $(".hidden").attr("src", "./assets/icons/menu.svg");
  $(".list-menu").css({
    height: "0vh",
  });
};
// navbar end

// home start
$(document).ready(() => {
  $(".contain-home").css({
    scale: "100%",
  });
});
// home end

// menu start
$(window).scroll(function () {
  $(".card").each(function () {
    var imagePos = $(this).offset().top;
    var topOfWindow = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (imagePos < topOfWindow + windowHeight && imagePos >= topOfWindow) {
      $(this).css({ scale: "95%" });
    } else {
      // reset jika elemen berada di luar jendela
      $(this).css({
        sclae: "30%",
      });
    }
  });
});

// menu end
