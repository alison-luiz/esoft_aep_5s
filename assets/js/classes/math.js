document.addEventListener("DOMContentLoaded", function () {
  const btnsShowVideo = document.querySelectorAll(".btn-show-video");
  const modals = document.querySelectorAll(".modal");
  const closes = document.querySelectorAll(".close");
  const videos = document.querySelectorAll("iframe");

  btnsShowVideo.forEach((btn, index) => {
    btn.addEventListener("click", function () {
      modals[index].style.display = "block";
      videos[index].src += "&autoplay=1";
    });
  });

  closes.forEach((close, index) => {
    close.addEventListener("click", function () {
      modals[index].style.display = "none";
      videos[index].src = videos[index].src.replace("&autoplay=1", "");
      videos[index].contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
    });
  });

  window.addEventListener("click", function (event) {
    modals.forEach((modal, index) => {
      if (event.target === modal) {
        modal.style.display = "none";
        videos[index].src = videos[index].src.replace("&autoplay=1", "");
        videos[index].contentWindow.postMessage(
          '{"event":"command","func":"pauseVideo","args":""}',
          "*"
        );
      }
    });
  });
});
