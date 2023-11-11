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
